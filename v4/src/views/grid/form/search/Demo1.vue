<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  showOverflow: true,
  border: true,
  height: 500,
  formConfig: {
    data: {
      name: '',
      role: '',
      sex: '',
      num: '',
      address: ''
    },
    items: [
      { field: 'name', title: 'Name', itemRender: { name: 'VxeInput' } },
      { field: 'role', title: 'Role', itemRender: { name: 'VxeInput' } },
      { field: 'age', title: 'Age', itemRender: { name: 'VxeInput' } },
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
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Num' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
    { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
    { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
    { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
    { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
    { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
    { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
    { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
  ]
})

const gridEvents: VxeGridListeners = {
  formSubmit () {
    console.log('form submit')
  },
  formReset () {
    console.log('form reset')
  }
}
</script>
