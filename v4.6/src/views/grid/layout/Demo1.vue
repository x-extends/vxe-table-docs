<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #top>
        <div>表格顶部模板</div>
      </template>
      <template #bottom>
        <div>表格底部模板</div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  [key: string]: any
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  showOverflow: true,
  border: true,
  height: 548,
  rowConfig: {
    keyField: 'id'
  },
  columnConfig: {
    resizable: true
  },
  pagerConfig: {
    enabled: true
  },
  toolbarConfig: {
    custom: true
  },
  layouts: ['Top', 'Toolbar', 'Form', 'Pager', 'Table', 'Bottom'],
  formConfig: {
    items: [
      { field: 'name', title: '名称', itemRender: { name: 'VxeInput' } },
      { field: 'email', title: '邮件', itemRender: { name: 'VxeInput' } },
      { field: 'nickname', title: '昵称', itemRender: { name: 'VxeInput' } },
      {
        itemRender: {
          name: 'VxeButtonGroup',
          options: [
            { type: 'submit', content: '搜索', status: 'primary' },
            { type: 'reset', content: '重置' }
          ]
        }
      }
    ]
  },
  proxyConfig: {
    // 对应响应结果 { result: [], page: { total: 100 } }
    props: {
      result: 'result', // 配置响应结果列表字段
      total: 'page.total' // 配置响应结果总页数字段
    },
    ajax: {
      // 接收 Promise 对象
      query: ({ page }) => {
        return fetch(`https:/apipub.vxeui.com/publicapi/api/pub/page/list/${page.pageSize}/${page.currentPage}`).then(response => response.json())
      }
    }
  },
  columns: [
    { type: 'seq', width: 60, fixed: 'left' },
    { field: 'name', title: 'Name', minWidth: 160 },
    { field: 'email', title: 'Email', minWidth: 160 },
    { field: 'nickname', title: 'Nickname', minWidth: 160 },
    { field: 'age', title: 'Age', width: 100 },
    { field: 'role', title: 'Role', minWidth: 160 },
    { field: 'amount', title: 'Amount', width: 140 },
    { field: 'updateDate', title: 'Update Date', visible: false },
    { field: 'createDate', title: 'Create Date', visible: false }
  ]
})
</script>
