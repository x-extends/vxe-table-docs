<template>
  <div>
    <vxe-grid
      v-bind="gridOptions"
      @form-submit="formSubmitEvent"
      @form-reset="formResetEvent">
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showOverflow: true,
      border: true,
      height: 500,
      formConfig: {
        data: {
          name: '',
          role: '',
          age: ''
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
        { type: 'seq', width: 70, fixed: 'left' },
        { field: 'name', title: 'Name', minWidth: 160 },
        { field: 'email', title: 'Email', minWidth: 160 },
        { field: 'nickname', title: 'Nickname', minWidth: 160 },
        { field: 'age', title: 'Age', width: 100 },
        { field: 'role', title: 'Role', minWidth: 160 },
        { field: 'amount', title: 'Amount', width: 140 },
        { field: 'updateDate', title: 'Update Date', visible: false },
        { field: 'createDate', title: 'Create Date', visible: false }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    formSubmitEvent () {
      console.log('form submit')
    },
    formResetEvent () {
      console.log('form reset')
    }
  }
})
</script>
