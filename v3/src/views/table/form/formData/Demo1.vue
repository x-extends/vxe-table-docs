<template>
  <div>
    <vxe-form
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>

    <vxe-table
      border
      show-overflow
      height="500"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Num"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeFormProps } from 'vxe-pc-ui'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

interface FormDataVO {
  name: string
  role: string
  sex: string
  num: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
      { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
      { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
      { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
      { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
      { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
      { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
      { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
    ]

    const formOptions: VxeFormProps<FormDataVO> = {
      data: {
        name: '',
        role: '',
        sex: '',
        num: '',
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 8, itemRender: { name: 'VxeInput' } },
        { field: 'email', title: '邮件', span: 8, itemRender: { name: 'VxeInput' } },
        {
          span: 8,
          itemRender: {
            name: 'VxeButtonGroup',
            options: [
              { type: 'submit', content: '搜索', status: 'primary' },
              { type: 'reset', content: '重置' }
            ]
          }
        }
      ]
    }

    return {
      tableData,
      formOptions
    }
  },
  methods: {
    submitEvent () {
      console.log('form submit')
    },
    resetEvent () {
      console.log('form reset')
    }
  }
})
</script>
