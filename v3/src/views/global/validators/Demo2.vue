<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-button @click="validEvent">校验</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  data () {
    return {
      gridOptions: {
        border: true,
        keepSource: true,
        showOverflow: true,
        height: 300,
        toolbarConfig: {
          slots: {
            buttons: 'toolbar_buttons'
          }
        },
        editConfig: {
          trigger: 'click',
          mode: 'cell',
          showStatus: true
        },
        editRules: {
          mobile: [
            { required: true, validator: 'mobile' }
          ],
          email: [
            { validator: 'email' }
          ]
        },
        columns: [
          { field: 'name', title: 'Name', editRender: { name: '$input', props: { placeholder: '请输入名称' } } },
          { field: 'nickname', title: 'Nickname', editRender: { name: '$input' } },
          { field: 'mobile', title: 'Mobile', editRender: { name: '$input' } },
          { field: 'email', title: 'Email', editRender: { name: '$input' } },
          { field: 'address', title: 'Address', editRender: { name: '$input' } }
        ],
        data: [
          { id: 10001, name: 'Test1', email: 'abcd@163.com', mobile: '', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', email: '', mobile: '13111111111', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', email: '', mobile: '13611111111', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', email: '', mobile: '', age: 23, address: 'test abc' },
          { id: 10005, name: 'Test5', email: '', mobile: '', age: 30, address: 'Shanghai' },
          { id: 10006, name: 'Test6', email: 'abcd@qq.com', mobile: '', age: 21, address: 'test abc' }
        ]
      }
    }
  },
  methods: {
    async validEvent () {
      const $grid = this.$refs.gridRef
      if ($grid) {
        const errMap = await $grid.validate(true)
        if (errMap) {
          VXETable.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VXETable.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    }
  }
}
</script>
