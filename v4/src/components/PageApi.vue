<template>
  <div class="api-view">
    <vxe-grid
      ref="gridRef"
      class="api-table"
      :columns="columns"
      v-bind="gridOptions">
      <template #toolbarButtons>
        <vxe-input clearable class="search-input" v-model="searchName" type="search" :placeholder="$t('app.layout.apiSearch', [apiName])" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
      </template>

      <template #default_name="{ row }">
        <span class="api-name">
          <span class="api-name-text" v-html="row.name"></span>
          <span class="api-name-version" v-if="row.version">
            <span v-if="row.version === 'extend-cell-area'">{{ $t('api.enterpriseVersion') }}</span>
            <span v-else>{{ getVersion(row.version) }}</span>
          </span>
        </span>
      </template>
      <template #default_version="{ row }">
        <template v-if="row.version === 'extend-cell-area'">
          <a class="link enterprise-version" :href="appStore.pluginBuyUrl" target="_blank">{{ $t('api.enterpriseVersion') }}</a>
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

<script lang="ts" setup>
import { ref, watch, nextTick, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import { VxeGridProps, VxeGridPropTypes, VxeGridInstance } from 'vxe-table'
import i18n from '@/i18n'
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

const route = useRoute()
const appStore = useAppStore()

const gridRef = ref<VxeGridInstance<RowVO>>()

const searchName = ref(`${route.query.q || ''}`)
const tableData = ref<any[]>([])

const apiName = computed(() => {
  return route.params.name as string
})

const loadList = () => {
  gridOptions.loading = true

  return Promise.all([
    appStore.getComponentApiConf(apiName.value),
    appStore.getComponentI18nJSON()
  ]).then(([data]) => {
    const list = XEUtils.clone(data || [], true)
    let firstI18nKey = ''
    XEUtils.eachTree(list, (item, i, items, path, parent, nodes) => {
      if (parent) {
        item.i18nKey = `components.${apiName.value}.${nodes.map(item => `${XEUtils.kebabCase(item.name)}`.replace(/\(.*/, '')).join('_')}`
        if (!firstI18nKey) {
          firstI18nKey = item.i18nKey
        }
      } else {
        item.i18nKey = `api.title.${item.name}`
      }
      item.i18nValue = i18n.global.t(item.i18nKey)
    }, { children: 'list' })
    tableData.value = list
    gridOptions.data = list
    gridOptions.loading = false
    handleSearch()
  })
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
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
  toolbarConfig: {
    custom: true,
    refresh: {
      query: loadList
    },
    slots: {
      buttons: 'toolbarButtons'
    }
  },
  data: []
})

const columns = computed<VxeGridPropTypes.Columns>(() => {
  return [
    {
      field: 'name',
      title: i18n.global.t('api.title.prop'),
      type: 'html',
      treeNode: true,
      minWidth: 280,
      titlePrefix: {
        content: i18n.global.t('api.title.propHelp')
      },
      filters: [
        { label: 'Props', value: 'Props' },
        { label: 'Slots', value: 'Slots' },
        { label: 'Events', value: 'Events' },
        { label: 'Methods', value: 'Methods' }
      ],
      slots: { default: 'default_name' }
    },
    { field: 'i18nValue', title: i18n.global.t('api.title.desc'), type: 'html', minWidth: 300 },
    { field: 'type', title: i18n.global.t('api.title.type'), type: 'html', minWidth: 140 },
    { field: 'enum', title: i18n.global.t('api.title.enum'), type: 'html', minWidth: 150 },
    { field: 'defVal', title: i18n.global.t('api.title.defVal'), type: 'html', minWidth: 160, titlePrefix: { content: i18n.global.t('api.title.defValHelp') } },
    { field: 'version', title: i18n.global.t('api.title.version'), type: 'html', width: 180, titlePrefix: { content: i18n.global.t('api.title.versionHelp') }, slots: { default: 'default_version' } }
  ]
})

const handleValueHighlight = (str: string, filterRE: RegExp) => {
  return `${str || ''}`.replace(filterRE, (match) => `<span class="keyword-lighten">${match}</span>`)
}

const handleSearch = () => {
  const filterName = XEUtils.toValueString(searchName.value).trim()
  if (filterName) {
    const options = { children: 'list' }
    if (filterName === 'pro') {
      const rest = XEUtils.searchTree(tableData.value, item => item.version === 'extend-cell-area', options)
      gridOptions.data = rest
    } else {
      const filterRE = new RegExp(`${filterName}|${XEUtils.camelCase(filterName)}|${XEUtils.kebabCase(filterName)}`, 'i')
      const rest = XEUtils.searchTree(tableData.value, item => {
        return filterRE.test(item.name) || filterRE.test(item.i18nValue)
      }, options)
      XEUtils.eachTree(rest, item => {
        item.name = handleValueHighlight(item.name, filterRE)
        item.i18nValue = handleValueHighlight(item.i18nValue, filterRE)
      }, options)
      gridOptions.data = rest
      setTimeout(() => {
        const $grid = gridRef.value
        if ($grid) {
          $grid.setAllTreeExpand(true)
        }
      }, 100)
    }
  } else {
    gridOptions.data = tableData.value.slice(0)
    setTimeout(() => {
      const $grid = gridRef.value
      if ($grid) {
        $grid.setTreeExpand(gridOptions.data, true)
      }
    }, 100)
  }
}

// 调用频率间隔 500 毫秒
const searchEvent = XEUtils.debounce(handleSearch, 500, { leading: false, trailing: true })

const tableComponents = [
  'table',
  'colgroup',
  'column',
  'grid',
  'toolbar'
]

const getVersion = (version?: string) => {
  if (version) {
    if (/^\d{1,3}[.]\d{1,3}/.test(version)) {
      if (tableComponents.includes(apiName.value)) {
        return `vxe-table@${version}`
      }
    }
    return `vxe-pc-ui@${version}`
  }
  return version
}

watch(apiName, () => {
  const $grid = gridRef.value
  searchName.value = ''
  if ($grid) {
    $grid.clearAll()
  }
  loadList()
})

watch(() => appStore.compApiMaps, () => {
  loadList()
})

nextTick(() => {
  loadList()
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
.api-name {
  position: relative;
  .api-name-version {
    position: absolute;
    bottom: 8px;
    color: var(--vxe-ui-docs-primary-color);
    border: 1px solid var(--vxe-ui-docs-primary-color);;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 14px;
    height: 16px;
    padding: 0 2px;
    transform: translateX(2px);
    border-radius: 4px;
  }
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
