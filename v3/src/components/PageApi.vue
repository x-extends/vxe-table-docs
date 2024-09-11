<template>
  <div class="api-view">
    <vxe-grid
      ref="gridRef"
      class="api-table"
      :columns="columns"
      v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-input clearable class="search-input" v-model="searchName" type="search" :placeholder="$t('app.layout.apiSearch', [apiName])" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
      </template>

      <template #default_version="{ row }">
        <template v-if="row.version === 'extend-cell-area'">
          <a class="link enterprise-version" :href="pluginBuyUrl" target="_blank">{{ $t('api.enterpriseVersion') }}</a>
        </template>
        <template v-else-if="row.disabled">
          <span class="disabled">已废弃</span>
        </template>
        <template v-else-if="row.abandoned">
          <span class="abandoned">评估阶段</span>
        </template>
        <template v-else>
          <span v-show="row.version" class="compatibility">{{ getVersion(row.version) }}</span>
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
import { mapState } from 'vuex'
import XEUtils from 'xe-utils'

interface RowVO {
  name: string
  enum: string
  type: string
  defVal: string
  version: string
  i18nKey: string
  i18nValue: string
  disabled?: boolean
  abandoned?: boolean
  list: RowVO[]
}

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
            'api-enterprise': row.version === 'extend-cell-area',
            'api-disabled': row.disabled,
            'api-abandoned': row.abandoned,
            'disabled-line-through': (row.disabled) && column.field === 'name'
          }
        },
        customConfig: {
          storage: true,
          checkMethod ({ column }) {
            if (['name', 'desc'].includes(column.field)) {
              return false
            }
            return true
          }
        },
        treeConfig: {
          childrenField: 'list',
          expandRowKeys: []
        },
        toolbarConfig: {
          custom: true,
          refresh: {
            query: this.loadList
          },
          slots: {
            buttons: 'toolbar_buttons'
          }
        },
        data: []
      }
    }
  },
  computed: {
    ...mapState([
      'pluginBuyUrl',
      'compApiMaps'
    ]),
    ...({} as {
      pluginBuyUrl(): string
    }),
    apiName () {
      const route = this.$route
      return route.params.name as string
    },
    apiConfig (this: any) {
      return this.compApiMaps ? this.compApiMaps[`vxe-${this.apiName}`] : null
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
          ]
        },
        { field: 'i18nValue', title: this.$t('api.title.desc'), type: 'html', minWidth: 300 },
        { field: 'type', title: this.$t('api.title.type'), type: 'html', minWidth: 140 },
        { field: 'enum', title: this.$t('api.title.enum'), type: 'html', minWidth: 150 },
        { field: 'defVal', title: this.$t('api.title.defVal'), type: 'html', minWidth: 160, titlePrefix: { content: this.$t('api.title.defValHelp') } },
        { field: 'version', title: this.$t('api.title.version'), type: 'html', width: 180, titlePrefix: { content: this.$t('api.title.versionHelp') }, slots: { default: 'default_version' } }
      ]
    }
  },
  methods: {
    loadList (this: any) {
      this.gridOptions.loading = true
      return new Promise<void>(resolve => {
        setTimeout(() => {
          const list = XEUtils.clone(this.apiConfig, true) || []
          XEUtils.eachTree(list, (item, i, items, path, parent, nodes) => {
            if (parent) {
              item.i18nKey = `components.${this.apiName}.${nodes.map(item => `${XEUtils.kebabCase(item.name)}`.replace(/\(.*/, '')).join('_')}`
            } else {
              item.i18nKey = `api.title.${item.name}`
            }
            item.i18nValue = this.$t(item.i18nKey)
          }, { children: 'list' })
          this.tableData = list
          this.gridOptions.data = list
          this.gridOptions.loading = false
          this.handleSearch()
          resolve()
        }, 100)
      })
    },
    handleValueHighlight  (str: string, filterRE: RegExp) {
      return `${str || ''}`.replace(filterRE, (match) => `<span class="keyword-lighten">${match}</span>`)
    },
    handleSearch (this: any) {
      const filterName = XEUtils.toValueString(this.searchName).trim()
      if (filterName) {
        const options = { children: 'list' }
        if (filterName === 'pro') {
          const rest = XEUtils.searchTree(this.tableData, (item: any) => item.version === 'extend-cell-area', options)
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
    getVersion (this: any, version?: string) {
      const tableComponents = [
        'table',
        'colgroup',
        'column',
        'grid',
        'toolbar'
      ]
      if (version) {
        if (tableComponents.includes(this.apiName)) {
          if (/^\d{1,3}[.]\d{1,3}/.test(version)) {
            return `vxe-table@${version}`
          }
        }
      }
      return version
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
    }
  },
  created (this: any) {
    this.$nextTick(() => {
      this.loadList()
    })
  }
})
</script>

<style lang="scss" scoped>
.api-view {
  height: 100%;
  overflow: hidden;
}
.search-input {
  width: 300px;
}
.enterprise-version {
  background-color: #f6ca9d;
  border-radius: 10px;
  font-size: 12px;
  padding: 2px 8px;
  color: #606266;
}
::v-deep(.vxe-body--row) {
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
    }
  }
}
</style>
