<template>
  <div>
    <vxe-table
      border
      :row-config="rowConfig"
      :column-config="columnConfig"
      :row-drag-config="rowDragConfig"
      :data="tableData">
      <vxe-column field="name" title="Name" drag-sort></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeUI, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const rowConfig = reactive<VxeTablePropTypes.RowConfig<RowVO>>({
  drag: true
})

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig<RowVO>>({
})

const rowDragConfig = reactive<VxeTablePropTypes.RowDragConfig<RowVO>>({
  async dragEndMethod () {
    const type = await VxeUI.modal.confirm({
      content: '请是否确认调整顺序？'
    })
    if (type === 'confirm') {
      return true
    } else {
      VxeUI.modal.message({
        content: '操作已取消',
        status: 'warning'
      })
    }
    return false
  }
})
</script>
