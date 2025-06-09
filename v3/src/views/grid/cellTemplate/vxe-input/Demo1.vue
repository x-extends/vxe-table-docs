<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #role_default="{ row }">
        <vxe-input v-model="row.role"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'role', title: '角色', slots: { default: 'role_default' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop' },
        { id: 10002, name: 'Test2', role: 'Test' },
        { id: 10003, name: 'Test3', role: 'PM' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
