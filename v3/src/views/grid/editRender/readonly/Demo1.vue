<template>
  <div>
    <vxe-button status="primary" @click="toggleReadonly">切换</vxe-button>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'
import type { VxeSelectProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
}

export default Vue.extend({
  data () {
    const sexEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps> = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> & { editConfig: VxeTablePropTypes.EditConfig<RowVO> } = {
      border: true,
      showOverflow: true,
      editConfig: {
        enabled: true,
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: '名称', minWidth: 200, editRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', width: 200, editRender: sexEditRender },
        { field: 'age', title: '年龄', minWidth: 200, editRender: { name: 'VxeNumberInput' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'role2', sex: '', age: 24 },
        { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', age: 24 },
        { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', age: 24 }
      ]
    }

    return {
      gridOptions,
      sexEditRender
    }
  },
  methods: {
    toggleReadonly () {
      this.gridOptions.editConfig.enabled = !this.gridOptions.editConfig.enabled
    }
  }
})
</script>
