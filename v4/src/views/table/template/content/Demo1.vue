<template>
  <div>
    <vxe-table border :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column type="expand" width="80">
        <template #content="{ row }">
          <vxe-table
            border
            :data="row.list">
            <vxe-column field="nickname" title="Nickname"></vxe-column>
            <vxe-column field="content" title="Content"></vxe-column>
            <vxe-column field="amount" title="Amount"></vxe-column>
          </vxe-table>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name" width="160"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Number"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

const tableData = ref<RowVO[]>([
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
])
</script>
