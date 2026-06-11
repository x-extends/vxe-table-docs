<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  height: 400,
  rowConfig: {
    isCurrent: true
  },
  columnConfig: {
    resizable: true
  },
  columns: [
    { field: 'checkbox', type: 'checkbox', width: 50 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', width: 340 },
    { field: 'nickname', title: 'Nickname', width: 420 },
    { field: 'age', title: 'Age', width: 200 },
    { field: 'role', title: 'Role', width: 280 },
    { field: 'attr1', title: 'Attr1', minWidth: 360 },
    { field: 'address', title: 'Address', width: 300 }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
  ],
  menuConfig: {
    className: 'my-table-menu-wrapper',
    header: {
      options: [
        [
          { code: 'exportAll', name: '导出所有.csv', className: 'my-red', prefixConfig: { icon: 'vxe-icon-download' } }
        ]
      ]
    },
    body: {
      options: [
        [
          { code: 'copy', name: '复制内容（Ctrl+C）', className: 'my-red', prefixConfig: { icon: 'vxe-icon-copy' } },
          { code: 'clear', name: '清除内容' },
          { code: 'reload', name: '刷新表格' }
        ],
        [
          {
            code: 'fixed',
            name: '冻结列',
            children: [
              { code: 'cancelFixed', name: '取消冻结' },
              { code: 'fixedLeft', name: '冻结在左侧', prefixConfig: { icon: 'vxe-icon-fixed-left' } },
              { code: 'fixedRight', name: '冻结在右侧', prefixConfig: { icon: 'vxe-icon-fixed-right' } }
            ]
          }
        ],
        [
          { code: 'myPrint', name: '打印（Ctrl+P）', className: 'my-blue', prefixConfig: { icon: 'vxe-icon-print' } },
          { code: 'myExport', name: '导出.csv', prefixConfig: { icon: 'vxe-icon-download' } }
        ]
      ]
    },
    footer: {
      options: [
        [
          { code: 'exportAll', name: '导出所有.csv', className: 'my-red', prefixConfig: { icon: 'vxe-icon-download' } }
        ]
      ]
    }
  },
  footerData: [
    { checkbox: '合计', age: 135 }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  menuClick ({ menu }) {
    VxeUI.modal.message({ content: `点击了 ${menu.code}`, status: 'success' })
    console.log('触发 menu-click')
  }
}
</script>

<style lang="scss">
.my-table-menu-wrapper {
  .my-red a {
    color: red;
  }
  .my-blue a {
    color: blue;
  }
}
</style>
