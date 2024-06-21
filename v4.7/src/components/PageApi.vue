<template>
  <div class="api-view">
    <vxe-grid
      ref="gridRef"
      class="api-table"
      v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-input clearable class="search-input" v-model="searchName" type="search" :placeholder="$t('app.layout.apiSearch', [apiName])" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
      </template>

      <template #default_version="{ row }">
        <template v-if="row.version === 'extend-cell-area'">
          <a class="link enterprise-version" :href="appStore.pluginApiUrl" target="_blank">{{ $t('api.enterpriseVersion') }}</a>
        </template>
        <template v-else-if="row.disabled">
          <span class="disabled">已废弃</span>
        </template>
        <template v-else-if="row.abandoned">
          <span class="abandoned">评估阶段</span>
        </template>
        <template v-else>
          <span v-show="row.version" class="compatibility">{{  getVersion(row.version) }}</span>
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
import { VxeGridProps, VxeGridInstance } from 'vxe-table'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'

// import newZh from '@/i18n/lang/zh-CN'

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

const gridRef = ref<VxeGridInstance>()

const searchName = ref(`${route.query.q || ''}`)
const tableData = ref<any[]>([])

const apiName = computed(() => {
  return route.params.name as string
})

const apiConfig = computed(() => {
  return appStore.compApiMaps ? appStore.compApiMaps[`vxe-${apiName.value}`] : null
})

const loadList = () => {
  gridOptions.loading = true

  // 合并老数据
  // XEUtils.each(appStore.compApiMaps, (list, name) => {
  //   XEUtils.eachTree(list, (item, i, items, path, parent, nodes) => {
  //     if (parent) {
  //       item.i18nKey = `components.${name.replace('vxe-', '')}.${nodes.map(item => `${XEUtils.kebabCase(item.name)}`.replace(/\(.*/, '')).join('_')}`
  //     } else {
  //       item.i18nKey = `api.title.${item.name}`
  //     }
  //     item.i18nValue = XEUtils.get(newZh, item.i18nKey)
  //     if (!item.i18nValue) {
  //       XEUtils.set(newZh, item.i18nKey, item.desc || '')
  //     }
  //   }, { children: 'list' })
  // })
  // console.log(JSON.stringify(newZh.components, null, 2))

  return new Promise<void>(resolve => {
    setTimeout(() => {
      const list = XEUtils.clone(apiConfig.value, true) || []
      XEUtils.eachTree(list, (item, i, items, path, parent, nodes) => {
        if (parent) {
          item.i18nKey = `components.${apiName.value}.${nodes.map(item => `${XEUtils.kebabCase(item.name)}`.replace(/\(.*/, '')).join('_')}`
        } else {
          item.i18nKey = `api.title.${item.name}`
        }
        item.i18nValue = i18n.global.t(item.i18nKey)
      }, { children: 'list' })
      tableData.value = list
      gridOptions.data = list
      gridOptions.loading = false
      handleSearch()
      resolve()
    }, 100)
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
      query: loadList
    },
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  columns: [
    {
      field: 'name',
      title: i18n.global.t('api.title.prop'),
      type: 'html',
      treeNode: true,
      minWidth: 280,
      titlePrefix: {
        message: '参数名称及使用，如果是在 CDN 环境中使用 kebab-case（短横线式），\n如果项目基于 vue-cli 脚手架可以使用 camelCase（驼峰式）'
      },
      filters: [
        { label: 'Props', value: 'Props' },
        { label: 'Slots', value: 'Slots' },
        { label: 'Events', value: 'Events' },
        { label: 'Methods', value: 'Methods' }
      ]
    },
    { field: 'i18nValue', title: i18n.global.t('api.title.desc'), type: 'html', minWidth: 300 },
    { field: 'type', title: i18n.global.t('api.title.type'), type: 'html', minWidth: 140 },
    { field: 'enum', title: i18n.global.t('api.title.enum'), type: 'html', minWidth: 150 },
    { field: 'defVal', title: i18n.global.t('api.title.defVal'), type: 'html', minWidth: 160, titlePrefix: { message: '部分参数可支持全局设置，具体请查阅相关说明' } },
    { field: 'version', title: i18n.global.t('api.title.version'), type: 'html', width: 180, titlePrefix: { message: '该文档与最新版本保持同步，如果遇到参数无效时，\n请检查当前使用的版本号是否支持该参数' }, slots: { default: 'default_version' } }
  ],
  data: []
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
    if (tableComponents.includes(apiName.value)) {
      if (/^\d{1,3}[.]\d{1,3}/.test(version)) {
        return `vxe-table@${version}`
      }
    }
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
