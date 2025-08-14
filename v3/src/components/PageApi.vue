<template>
  <div class="api-view">
    <vxe-grid
      ref="gridRef"
      class="api-table"
      :columns="columns"
      v-bind="gridOptions">
      <template #toolbarButtons>
        <vxe-input clearable class="api-search-input" v-model="searchName" type="search" :placeholder="$t('app.layout.apiSearch', [apiName])" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
      </template>

      <template #default_name="{ row }">
        <span class="api-name">
          <span class="api-name-text" v-html="row.name"></span>
          <span v-if="row.version" class="api-name-version">
            <a v-if="row.isPlugin" class="link enterprise-link" :href="getPluginDocsUrl(row)" target="_blank">{{ getVersion(row) }}</a>
            <span v-else>{{ getVersion(row) }}</span>
          </span>
        </span>
      </template>
      <template #default_version="{ row }">
         <template v-if="row.isPlugin">
          <a v-show="row.version" :href="getPluginDocsUrl(row)" class="compatibility enterprise-version" target="_blank">{{ getVersion(row) }}</a>
        </template>
        <template v-else-if="row.disabled">
          <span class="disabled">已废弃</span>
        </template>
        <template v-else-if="row.abandoned">
          <span class="abandoned">评估阶段</span>
        </template>
        <template v-else>
          <span v-show="row.version" class="compatibility">{{ getVersion(row) }}</span>
        </template>
      </template>

      <template #empty>
        <span class="red">找不对应 API，请输入正确的关键字！</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import XEUtils from 'xe-utils'

interface RowVO {
  name: string
  enum: string
  type: string
  defVal: string
  version: string
  i18nKey: string
  i18nValue: string
  isPlugin?: boolean
  pluginName?: string
  pluginVersion?: string
  disabled?: boolean
  abandoned?: boolean
  list: RowVO[]
}

const tableComponents = [
  'table',
  'colgroup',
  'column',
  'grid',
  'toolbar'
]

const pluginAppNames = ['ExtendCellArea', 'ExtendPivotTable', 'FiltersCombination', 'FiltersComplexInput']
const pluginAppRE = new RegExp(`^(${pluginAppNames.join('|')})(@(\\d{1,3}.\\d{1,3}.\\d{1,3}))?$`)

export default Vue.extend({
  data (this: any) {
    const route = this.$route
    return {
      searchName: `${route.query.q || ''}`,
      tableData: [] as RowVO[],

      gridOptions: {
        id: 'document_api',
        autoResize: true,
        height: 'auto',
        loading: false,
        loadingConfig: {
          text: '检测到 API 有更新，正在自动更新中，请稍后...'
        },
        rowConfig: {
          useKey: true,
          keyField: 'id',
          isHover: true,
          isCurrent: true
        },
        columnConfig: {
          useKey: true,
          resizable: true,
          isHover: true,
          isCurrent: true
        },
        cellClassName ({ row, column }) {
          return {
            'api-enterprise': row.isPlugin,
            'api-disabled': row.disabled,
            'api-abandoned': row.abandoned,
            'disabled-line-through': (row.disabled) && column.field === 'name'
          }
        },
        customConfig: {
          storage: true,
          checkMethod ({ column }) {
            if (['name', 'i18nValue'].includes(column.field)) {
              return false
            }
            return true
          }
        },
        treeConfig: {
          childrenField: 'list',
          expandRowKeys: []
        },

        tooltipConfig: {
          showAll: true,
          contentMethod ({ type, row }) {
            if (type === 'body') {
              if (row.disabled) {
                return '该参数已经被废弃了，除非不打算更新版本，否则不应该被使用'
              } else if (row.abandoned) {
                return '该参数属于评估阶段，谨慎使用，后续有可能会被废弃的风险'
              }
            }
            return ''
          }
        },
        toolbarConfig: {
          custom: true,
          refresh: true,
          refreshOptions: {
            query: this.loadList
          },
          slots: {
            buttons: 'toolbarButtons'
          }
        },
        data: []
      }
    }
  },
  computed: {
    ...mapState([
      'pluginBuyUrl',
      'pluginDocsUrl',
      'compApiMaps',
      'pluginAppList'
    ]),
    ...({} as {
      pluginBuyUrl(): string
    }),
    apiName () {
      const route = this.$route
      return route.params.name as string
    },
    columns () {
      return [
        {
          field: 'name',
          title: this.$t('api.title.prop'),
          type: 'html',
          treeNode: true,
          minWidth: 280,
          titlePrefix: {
            content: this.$t('api.title.propHelp')
          },
          filters: [
            { label: 'Props', value: 'Props' },
            { label: 'Slots', value: 'Slots' },
            { label: 'Events', value: 'Events' },
            { label: 'Methods', value: 'Methods' }
          ],
          slots: { default: 'default_name' }
        },
        { field: 'i18nValue', title: this.$t('api.title.desc'), type: 'html', minWidth: 300 },
        { field: 'type', title: this.$t('api.title.type'), type: 'html', minWidth: 140 },
        { field: 'enum', title: this.$t('api.title.enum'), type: 'html', minWidth: 150 },
        { field: 'defVal', title: this.$t('api.title.defVal'), type: 'html', minWidth: 160, titlePrefix: { content: this.$t('api.title.defValHelp') } },
        { field: 'version', title: this.$t('api.title.version'), type: 'html', width: 180, titlePrefix: { content: this.$t('api.title.versionHelp') }, slots: { default: 'default_version' } }
      ]
    }
  },
  watch: {
    apiName (this: any) {
      const $grid = this.$refs.gridRef
      this.searchName = ''
      if ($grid) {
        $grid.clearAll()
      }
      this.loadList()
    },
    compApiMaps (this: any) {
      this.loadList()
    },
    '$t.locale' (this: any) {
      this.loadList()
    }
  },
  methods: {
    ...mapActions([
      'getComponentApiConf',
      'getComponentI18nJSON',
      'getPluginAppList'
    ]),
    loadList (this: any) {
      this.gridOptions.loading = true
      Promise.all([
        this.getComponentApiConf(this.apiName),
        this.getComponentI18nJSON()
      ]).then(([data]) => {
        const list = XEUtils.clone(data || [], true)
        XEUtils.eachTree(list, (item, i, items, path, parent, nodes) => {
          if (parent) {
            item.i18nKey = `components.${this.apiName}.${nodes.map(item => `${XEUtils.kebabCase(item.name)}`.replace(/\(.*/, '')).join('_')}`
          } else {
            item.i18nKey = `api.title.${item.name}`
          }
          item.i18nValue = this.$t(item.i18nKey)
          const pluginVersion = item.version ? item.version.match(pluginAppRE) : null
          if (pluginVersion) {
            const pName = pluginVersion[1]
            const pVersion = pluginVersion[3]
            item.isPlugin = true
            item.pluginName = pName
            item.pluginVersion = pVersion
          } else {
            item.isPlugin = false
            item.pluginName = ''
            item.pluginVersion = ''
          }
        }, { children: 'list' })
        this.tableData = list
        this.gridOptions.data = list
        this.gridOptions.loading = false
        this.handleSearch()
      })
    },
    handleValueHighlight  (str: string, filterRE: RegExp) {
      return `${str || ''}`.replace(filterRE, (match) => `<span class="keyword-lighten">${match}</span>`)
    },
    handleSearch (this: any) {
      const filterName = XEUtils.toValueString(this.searchName).trim()
      if (filterName) {
        const options = { children: 'list' }
        const spName = pluginAppNames.find(name => name === filterName || XEUtils.kebabCase(name) === filterName)
        if (spName) {
          const rest = XEUtils.searchTree(this.tableData, (item: any) => item.pluginName === spName, options)
          this.gridOptions.data = rest
        } else if (filterName === 'pro') {
          const rest = XEUtils.searchTree(this.tableData, (item: any) => item.pluginName === 'ExtendCellArea', options)
          this.gridOptions.data = rest
        } else {
          const filterRE = new RegExp(`${filterName}|${XEUtils.camelCase(filterName)}|${XEUtils.kebabCase(filterName)}`, 'i')
          const rest = XEUtils.searchTree(this.tableData, (item: any) => {
            return filterRE.test(item.name) || filterRE.test(item.i18nValue)
          }, options)
          XEUtils.eachTree(rest, (item: any) => {
            item.name = this.handleValueHighlight(item.name, filterRE)
            item.i18nValue = this.handleValueHighlight(item.i18nValue, filterRE)
          }, options)
          this.gridOptions.data = rest
          setTimeout(() => {
            const $grid = this.$refs.gridRef
            if ($grid) {
              $grid.setAllTreeExpand(true)
            }
          }, 100)
        }
      } else {
        this.gridOptions.data = this.tableData.slice(0)
        setTimeout(() => {
          const $grid = this.$refs.gridRef
          if ($grid) {
            $grid.setTreeExpand(this.gridOptions.data, true)
          }
        }, 100)
      }
    },
    searchEvent: XEUtils.debounce(function (this: any) {
      this.handleSearch()
    }, 500, { leading: false, trailing: true }),
    getVersion (this: any, row: RowVO) {
      const { isPlugin, version, pluginName, pluginVersion } = row
      if (isPlugin) {
        if (pluginVersion) {
          return `${XEUtils.kebabCase(pluginName)}@${pluginVersion}`
        }
        return `${XEUtils.kebabCase(pluginName)}`
      }
      if (version) {
        if (/^\d{1,3}[.]\d{1,3}/.test(version)) {
          if (tableComponents.includes(this.apiName)) {
            return `vxe-table@${version}`
          }
        }
        return `vxe-pc-ui@${version}`
      }
      return ''
    },
    getPluginDocsUrl (this: any, row: RowVO) {
      if (row.isPlugin) {
        const appItem = this.pluginAppList.find(item => item.code === row.pluginName)
        if (appItem) {
          return `${this.pluginDocsUrl}${appItem.uri}`
        }
      }
      return this.pluginDocsUrl
    }
  },
  created (this: any) {
    this.$nextTick(() => {
      this.loadList()
    })
    this.getPluginAppList()
  }
})
</script>

<style lang="scss">
.api-view {
  height: 100%;
  overflow: hidden;
  .api-search-input {
    width: 300px;
  }
  .api-name {
    position: relative;
    .api-name-version {
      position: absolute;
      bottom: 8px;
      color: var(--vxe-ui-docs-primary-color);
      border: 1px solid var(--vxe-ui-docs-primary-color);
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 14px;
      height: 16px;
      padding: 0 2px;
      transform: translateX(2px);
      border-radius: 4px;
      background: var(--vxe-ui-docs-layout-background-color);
      z-index: 99;
      user-select: none;
    }
  }
  .enterprise-version {
    background-color: #f6ca9d;
    border-radius: 10px;
    font-size: 12px;
    padding: 2px 8px;
    color: #606266;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
.api-table {
  .vxe-body--row {
    .vxe-body--column {
      &.api-abandoned {
        cursor: help;
        color: #70541C;
        background-color: #FFFBE5;
        .compatibility {
          background-color: #70541C;
        }
      }
      &.api-disabled {
        cursor: help;
        color: #cb2431;
        background-color: #fbb1b1;
        .compatibility {
          background-color: #cb2431;
        }
      }
      &.api-enterprise {
        color: #409eff;
        font-weight: 700;
        .api-name-version {
          border: 1px solid #f6ca9d;
          background-color: #f6ca9d;
          color: #606266;
          user-select: none;
        }
        .enterprise-link {
          color: #606266;
          font-size: 12px;
          text-decoration: none;
          user-select: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
