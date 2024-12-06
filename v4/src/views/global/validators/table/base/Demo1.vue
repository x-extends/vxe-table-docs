<template>
  <div>
    <vxe-button status="primary" @click="validEvent">校验</vxe-button>
    <vxe-table
      border
      keep-source
      show-overflow
      ref="tableRef"
      height="300"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
      :data="tableData"
      :edit-rules="tableRules">
      <vxe-column field="name" title="Name" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="nickname" title="Nickname" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="mobile" title="Mobile" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="email" title="Email" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{ name: 'VxeInput' }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  email: string
  mobile: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', email: 'abcd@163.com', mobile: '', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', email: '', mobile: '13111111111', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', email: '', mobile: '13611111111', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', email: '', mobile: '', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', email: '', mobile: '', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', email: 'abcd@qq.com', mobile: '', age: 21, address: 'test abc' }
    ]

    const tableRules: VxeTablePropTypes.EditRules = {
      mobile: [
        { required: true, validator: 'ValidMobile' }
      ],
      email: [
        { validator: 'ValidEmail' }
      ]
    }

    return {
      tableData,
      tableRules
    }
  },
  methods: {
    async validEvent   () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const errMap = await $table.validate(true)
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    }
  }
})
</script>
