<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #group_name="{ row }">
        <span v-if="row.type === 'group'">
          <vxe-tag :status="row.level === 1 ? 'success' : 'warning'" class="group-name">{{ row.name }}</vxe-tag>
          <span class="group-count">数量：{{ row.count }}</span>
        </span>
        <span v-else>{{ row.seq }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  seq: string
  name: string
  role: string
  sex: string
  age: number
  address: string
  count?: number
  type?: string
  level?: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      mergeCells: [
        { row: 0, col: 0, rowspan: 1, colspan: 5 },
        { row: 2, col: 0, rowspan: 1, colspan: 5 }
      ],
      columns: [
        { field: 'seq', title: '序号', width: 70, slots: { default: 'group_name' } },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: 10000001, name: '销售冠军', role: '', sex: '', age: 0, address: '', count: 1, type: 'group', level: 1, seq: '' },
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', seq: '1' },
        { id: 10000002, name: '普通销售', role: '', sex: '', age: 0, address: '', count: 3, type: 'group', level: 2, seq: '' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', seq: '2' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', seq: '3' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', seq: '4' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>

<style lang="scss" scoped>
.group-name {
  padding: 0 8px;
}
.group-count {
  padding-left: 8px;
}
</style>
