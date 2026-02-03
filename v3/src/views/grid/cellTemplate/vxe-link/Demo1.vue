<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #role_default="{ row }">
        <vxe-link :href="`https://vxeui.com?id=${row.id}`">{{ row.role }}</vxe-link>
      </template>

      <template #address_default="{ row }">
        <vxe-link :href="`https://vxeui.com?id=${row.id}&name=${row.name}`" status="error" target="_blank">{{ row.address }}</vxe-link>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'role', title: 'Role', width: 120, slots: { default: 'role_default' } },
        { field: 'address', title: 'Address', width: 300, slots: { default: 'address_default' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
