<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="checked1" title="复选框1" width="100">
        <template #default="{ row }">
          <vxe-checkbox v-model="row.checked1"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column field="checked2" title="复选框2" width="100">
        <template #default="{ row }">
          <vxe-checkbox v-model="row.checked2"></vxe-checkbox>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  checked1: boolean
  checked2: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', checked1: false, checked2: false },
      { id: 10002, name: 'Test2', role: 'Test', checked1: true, checked2: false },
      { id: 10003, name: 'Test3', role: 'PM', checked1: false, checked2: true }
    ]

    return {
      tableData
    }
  }
})
</script>
