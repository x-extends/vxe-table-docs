<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #expand_content="{ row }">
        <vxe-table
          border
          :data="row.list">
          <vxe-column field="nickname" title="Nickname"></vxe-column>
          <vxe-column field="content" title="Content"></vxe-column>
          <vxe-column field="amount" title="Amount"></vxe-column>
        </vxe-table>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string,
  list: {
    nickname: string
    content: string
    amount: number
  }[]
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  expandConfig: {
    padding: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { type: 'expand', width: 80, slots: { content: 'expand_content' } },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    {
      id: 10001,
      name: 'Test1',
      role: 'Develop',
      sex: '0',
      age: 28,
      num: 234,
      address: 'test abc',
      list: [
        { nickname: '张三', content: '内容22', amount: 99 },
        { nickname: '王五', content: '内容56', amount: 42 },
        { nickname: '老六', content: '内容785', amount: 23 }
      ]
    },
    {
      id: 10002,
      name: 'Test2',
      role: 'Test',
      sex: '1',
      age: 22,
      num: 34,
      address: 'Guangzhou',
      list: [
        { nickname: '张三', content: '内容184', amount: 45 },
        { nickname: '李四', content: '内容2344', amount: 64 }
      ]
    }
  ]
})
</script>
