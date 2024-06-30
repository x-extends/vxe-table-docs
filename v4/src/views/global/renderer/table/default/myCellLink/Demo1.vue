<template>
  <div>
    <vxe-table
      border
      height="300"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name" :cell-render="{name: 'MyTableCellLink'}"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
  url: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', sex: 'Man', age: 28, url: 'https://vxetable.cn/' },
  { id: 10002, name: 'Test2', sex: 'Women', age: 22, url: 'https://vxeui.com/' },
  { id: 10003, name: 'Test3', sex: 'Man', age: 32, url: 'https://vxetable.cn/' },
  { id: 10004, name: 'Test4', sex: 'Women', age: 23, url: 'https://vxeui.com/' }
])
</script>
