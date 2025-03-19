<template>
  <div>
    <vxe-switch v-model="gridOptions.menuConfig.enabled"></vxe-switch>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridInstance, VxeTablePropTypes, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO> & {
  menuConfig: VxeTablePropTypes.MenuConfig<RowVO>
}>({
  border: true,
  showFooter: true,
  rowConfig: {
    isCurrent: true
  },
  columnConfig: {
    resizable: true
  },
  columns: [
    { field: 'checkbox', type: 'checkbox', width: 50 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'age', title: 'Age' },
    { field: 'role', title: 'Role' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
  ],
  menuConfig: {
    enabled: true,
    header: {
      options: [
        [
          { code: 'exportAll', name: '导出所有.csv', prefixConfig: { icon: 'vxe-icon-download' }, visible: true, disabled: false }
        ]
      ]
    },
    body: {
      options: [
        [
          { code: 'copy', name: '复制内容（Ctrl+C）', prefixConfig: { icon: 'vxe-icon-copy' }, visible: true, disabled: false },
          { code: 'clear', name: '清除内容', visible: true, disabled: false },
          { code: 'reload', name: '刷新表格', visible: true, disabled: false }
        ],
        [
          { code: 'myPrint', name: '打印（Ctrl+P）', prefixConfig: { icon: 'vxe-icon-print' }, visible: true, disabled: false },
          { code: 'myExport', name: '导出.csv', prefixConfig: { icon: 'vxe-icon-download' }, visible: true, disabled: false }
        ]
      ]
    },
    footer: {
      options: [
        [
          { code: 'exportAll', name: '导出所有.csv', prefixConfig: { icon: 'vxe-icon-download' }, visible: true, disabled: false }
        ]
      ]
    },
    visibleMethod ({ options, column }) {
      // 示例：只有 name 列允许操作，清除按钮只能在 age 才显示
      // 显示之前处理按钮的操作权限
      const isDisabled = !column || column.field !== 'name'
      const isVisible = column && column.field === 'age'
      options.forEach(list => {
        list.forEach(item => {
          if (item.code === 'copy') {
            item.disabled = isDisabled
          }
          if (item.code === 'clear') {
            item.visible = isVisible
          }
        })
      })
      return true
    }
  },
  footerData: [
    { checkbox: '合计', age: 135 }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  cellMenu ({ row }) {
    const $grid = gridRef.value
    if ($grid) {
      $grid.setCurrentRow(row)
    }
  },
  menuClick ({ menu, row, column }) {
    const $grid = gridRef.value
    if ($grid) {
      switch (menu.code) {
        case 'copy':
          VxeUI.modal.message({ content: `点击了 "${menu.name}"`, status: 'info' })
          break
        case 'clear':
          $grid.clearData(row, column.field)
          break
        case 'myPrint':
          $grid.print()
          break
        case 'myExport':
          $grid.exportData()
          break
      }
    }
  }
}
</script>
