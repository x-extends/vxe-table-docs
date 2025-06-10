<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="角色">
        <template #default="{ row }">
          <vxe-input v-model="row.role"></vxe-input>
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
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop' },
      { id: 10002, name: 'Test2', role: 'Test' },
      { id: 10003, name: 'Test3', role: 'PM' }
    ]

    return {
      tableData
    }
  }
})
</script>
