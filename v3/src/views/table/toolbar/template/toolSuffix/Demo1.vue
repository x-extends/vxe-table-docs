<template>
  <div>
    <vxe-toolbar :tools="toolbarTools">
      <template #tools>
        <vxe-button status="primary">按钮1</vxe-button>
        <vxe-button status="primary">按钮2</vxe-button>
        <vxe-button status="primary">按钮3</vxe-button>
      </template>

      <template #toolSuffix>
        <vxe-button status="error">后缀按钮2</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeToolbarPropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const toolbarTools: VxeToolbarPropTypes.Tools = [
      { code: 'myBtn1', name: '配置按钮1' }
    ]

    return {
      tableData,
      toolbarTools
    }
  }
})
</script>
