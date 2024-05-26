<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const xGrid = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  keepSource: true,
  showOverflow: true,
  id: 'toolbar_demo_1',
  height: 500,
  printConfig: {},
  importConfig: {},
  exportConfig: {},
  columnConfig: {
    resizable: true
  },
  customConfig: {
    storage: true
  },
  columns: [
    { type: 'checkbox', width: 50 },
    { type: 'seq', width: 60 },
    { field: 'name', title: 'Name' },
    {
      title: '分类',
      children: [
        { field: 'nickname', title: 'Nickname' },
        { field: 'role', title: 'Role' }
      ]
    },
    { field: 'address', title: 'Address' }
  ],
  toolbarConfig: {
    buttons: [
      { code: 'myInsert', name: '新增' },
      { code: 'mySave', name: '保存', status: 'success' },
      { code: 'myExport', name: '导出', type: 'text', status: 'warning' },
      {
        name: '按钮',
        disabled: false,
        dropdowns: [
          { code: 'other1', name: '下拉的按钮1', type: 'text', disabled: false },
          { code: 'other2', name: '下拉的按钮2', type: 'text', disabled: true },
          { code: 'other3', name: '下拉的按钮3', type: 'text', disabled: false }
        ]
      }
    ],
    tools: [
      { code: 'myPrint', name: '打印' }
    ],
    import: true,
    export: true,
    print: true,
    zoom: true,
    custom: true
  },
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
    { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
    { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  toolbarButtonClick ({ code }) {
    const $grid = xGrid.value
    if ($grid) {
      switch (code) {
        case 'myInsert': {
          $grid.insert({
            name: 'xxx'
          })
          break
        }
        case 'mySave': {
          const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
          VxeUI.modal.message({ content: `新增 ${insertRecords.length} 条，删除 ${removeRecords.length} 条，更新 ${updateRecords.length} 条`, status: 'success' })
          break
        }
        case 'myExport': {
          $grid.exportData({
            type: 'csv'
          })
          break
        }
      }
    }
  },
  toolbarToolClick ({ code }) {
    const $grid = xGrid.value
    if ($grid) {
      switch (code) {
        case 'myPrint': {
          $grid.print()
          break
        }
      }
    }
  }
}
</script>
