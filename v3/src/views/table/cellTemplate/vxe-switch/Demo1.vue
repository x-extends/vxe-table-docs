<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="flag1" title="开关" width="200">
        <template #default="{ row }">
          <vxe-switch v-model="row.flag1" disabled></vxe-switch>
        </template>
      </vxe-column>
      <vxe-column field="flag2" title="开关" width="200">
        <template #default="{ row }">
          <vxe-switch v-model="row.flag2"></vxe-switch>
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
  flag1: boolean
  flag2: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', flag1: false, flag2: false },
      { id: 10002, name: 'Test2', role: 'Test', flag1: true, flag2: true },
      { id: 10003, name: 'Test3', role: 'PM', flag1: false, flag2: false }
    ]

    return {
      tableData
    }
  }
})
</script>
