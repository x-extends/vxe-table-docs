<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="nameEditRender"></vxe-column>
      <vxe-column field="role" title="Role" :edit-render="roleEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'
import { VxeInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Women', address: 'Shanghai' }
    ]

    const nameEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeInput'
    }

    const roleEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeInput',
      props: {
        clearable: true
      },
      events: {
        input (cellParams, eventParams) {
          const { row, column } = cellParams
          console.log('input', row, column.field, eventParams.value)
        }
      }
    }

    return {
      tableData,
      nameEditRender,
      roleEditRender
    }
  }
})
</script>
