<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions">

    <!--将表单放在工具栏中-->
    <template #toolbar_buttons>
      <vxe-button @click="triggerProxy('query')">刷新当前</vxe-button>
      <vxe-button @click="triggerProxy('reload')">重置条件并重载</vxe-button>
      <vxe-button @click="triggerProxy('mark_cancel')">删除/取消</vxe-button>
    </template>

    <template #toolbar_tools>
      <vxe-form :data="formData" @submit="searchEvent" @reset="resetEvent">
        <vxe-form-item field="name">
          <template #default>
            <vxe-input v-model="formData.name" type="text" placeholder="请输入名称"></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item>
          <template #default>
            <vxe-button type="submit" status="primary" content="查询"></vxe-button>
            <vxe-button type="reset" content="重置"></vxe-button>
          </template>
        </vxe-form-item>
      </vxe-form>
    </template>

    <!--自定义空数据模板-->
    <template #empty>
      <span style="color: red;">
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">
        <p>没有更多数据了！</p>
      </span>
    </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  [key: string]: any
}

const serveApiUrl = 'https://api.vxetable.cn/demo'

const xGrid = ref<VxeGridInstance<RowVO>>()

const formData = reactive({
  name: ''
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  showOverflow: true,
  border: 'inner',
  height: 548,
  rowConfig: {
    keyField: 'id'
  },
  columnConfig: {
    resizable: true
  },
  printConfig: {
    columns: [
      { field: 'name' },
      { field: 'email' },
      { field: 'nickname' },
      { field: 'age' },
      { field: 'amount' }
    ]
  },
  sortConfig: {
    trigger: 'cell',
    remote: true,
    defaultSort: {
      field: 'name',
      order: 'desc'
    }
  },
  filterConfig: {
    remote: true
  },
  pagerConfig: {
    pageSize: 15,
    pageSizes: [5, 15, 20, 50, 100, 200, 500, 1000]
  },
  exportConfig: {
    // 默认选中类型
    type: 'xlsx',
    // 局部自定义类型
    types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
    // 自定义数据量列表
    modes: ['current', 'all']
  },
  radioConfig: {
    labelField: 'id',
    reserve: true,
    highlight: true
  },
  proxyConfig: {
    seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
    sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为
    filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
    // 对应响应结果 { result: [], page: { total: 100 } }
    props: {
      result: 'result', // 配置响应结果列表字段
      total: 'page.total' // 配置响应结果总页数字段
    },
    ajax: {
      // 接收 Promise 对象
      query: ({ page, sorts, filters }) => {
        const queryParams: any = Object.assign({}, formData)
        // 处理排序条件
        const firstSort = sorts[0]
        if (firstSort) {
          queryParams.sort = firstSort.field
          queryParams.order = firstSort.order
        }
        // 处理筛选条件
        filters.forEach(({ field, values }) => {
          queryParams[field] = values.join(',')
        })
        return fetch(`${serveApiUrl}/api/pub/page/list/${page.pageSize}/${page.currentPage}?${XEUtils.serialize(queryParams)}`).then(response => response.json())
      },
      // 被某些特殊功能所触发，例如：导出数据 mode=all 时，会触发该方法并对返回的数据进行导出
      queryAll: () => fetch(`${serveApiUrl}/api/pub/all`).then(response => response.json())
    }
  },
  toolbarConfig: {
    export: true,
    print: true,
    custom: true,
    slots: {
      buttons: 'toolbar_buttons',
      tools: 'toolbar_tools'
    }
  },
  columns: [
    { type: 'seq', width: 60, fixed: 'left' },
    { type: 'radio', title: 'ID', width: 120, fixed: 'left' },
    { field: 'name', title: 'Name', minWidth: 160, sortable: true },
    { field: 'email', title: 'Email', minWidth: 160 },
    { field: 'nickname', title: 'Nickname', sortable: true, minWidth: 160 },
    { field: 'age', title: 'Age', visible: false, sortable: true, width: 100 },
    {
      field: 'role',
      title: 'Role',
      sortable: true,
      minWidth: 160,
      filters: [
        { label: '前端开发', value: '前端', checked: true },
        { label: '后端开发', value: '后端' },
        { label: '测试', value: '测试' },
        { label: '程序员鼓励师', value: '程序员鼓励师' }
      ],
      filterMultiple: false
    },
    {
      field: 'amount',
      title: 'Amount',
      width: 140,
      formatter ({ cellValue }) {
        return cellValue ? `￥${XEUtils.commafy(Number(cellValue), { digits: 2 })}` : ''
      }
    },
    {
      field: 'updateDate',
      title: 'Update Date',
      visible: false,
      width: 160,
      sortable: true,
      formatter ({ cellValue }) {
        return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
      }
    },
    {
      field: 'createDate',
      title: 'Create Date',
      visible: false,
      width: 160,
      sortable: true,
      formatter ({ cellValue }) {
        return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
      }
    }
  ]
})

const triggerProxy = (code: string) => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.commitProxy(code)
  }
}

const searchEvent = () => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.commitProxy('query')
  }
}

const resetEvent = () => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.commitProxy('reload')
  }
}
</script>
