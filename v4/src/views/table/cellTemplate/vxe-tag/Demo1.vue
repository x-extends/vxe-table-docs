<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="300"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="status" title="标签" width="300">
        <template #default>
          <vxe-tag status="info">未开始</vxe-tag>
          <vxe-tag status="success">已完成</vxe-tag>
          <vxe-tag status="primary">待处理</vxe-tag>
          <vxe-tag status="error">已驳回</vxe-tag>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  status: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', status: '1' },
  { id: 10002, name: 'Test2', status: '2' },
  { id: 10003, name: 'Test3', status: '3' },
  { id: 10004, name: 'Test4', status: '2' },
  { id: 10005, name: 'Test5', status: '2' },
  { id: 10006, name: 'Test6', status: '3' },
  { id: 10007, name: 'Test7', status: '1' },
  { id: 10008, name: 'Test8', status: '1' }
])
</script>
