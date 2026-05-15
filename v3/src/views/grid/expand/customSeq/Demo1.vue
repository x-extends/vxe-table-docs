<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #expand_content="{ row }">
        <div>Seq：{{ row.seq }}</div>
        <div>Name：{{ row.name }}</div>
        <div>Role：{{ row.role }}</div>
        <div>Age：{{ row.age }}</div>
        <div>Sex：{{ row.sex }}</div>
        <div>Address：{{ row.address }}</div>
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
  sex: string
  age: number
  address: string
  seq: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      rowConfig: {
        keyField: 'id'
      },
      expandConfig: {
        height: 80,
        labelField: 'seq'
      },
      columns: [
        { field: 'seq', title: '序号', type: 'expand', width: 80, slots: { content: 'expand_content' } },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', seq: 1 },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', seq: 2 },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', seq: 3 },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', seq: 4 }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
