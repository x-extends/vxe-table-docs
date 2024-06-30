<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  email: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  showOverflow: true,
  border: true,
  height: 500,
  formConfig: {
    data: {
      name: 'Test',
      email: '',
      nickname: ''
    },
    items: [
      { field: 'name', title: 'Name', span: 6, itemRender: { name: 'VxeInput' } },
      { field: 'role', title: 'Role', span: 6, itemRender: { name: 'VxeInput' } },
      { field: 'age', title: 'Age', span: 6, itemRender: { name: 'VxeInput' } },
      {
        span: 6,
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
    { type: 'seq', width: 70, fixed: 'left' },
    { field: 'name', title: 'Name', minWidth: 160 },
    { field: 'nickname', title: 'Nickname', minWidth: 160 },
    { field: 'age', title: 'Age', width: 100 },
    { field: 'role', title: 'Role', minWidth: 160 },
    { field: 'amount', title: 'Amount', width: 140 },
    { field: 'email', title: 'Email', minWidth: 160 },
    { field: 'updateDate', title: 'Update Date', visible: false },
    { field: 'createDate', title: 'Create Date', visible: false }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: '', role: 'Develop', sex: 'Man', age: 28, email: '', address: 'test abc' },
    { id: 10002, name: 'Test2', nickname: '', role: 'Test', sex: 'Women', age: 22, email: '', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: '', role: 'PM', sex: 'Man', age: 32, email: '', address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: '', role: 'Designer', sex: 'Women', age: 24, email: '', address: 'Shanghai' }
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
