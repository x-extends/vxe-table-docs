<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="300"
      :edit-config="{trigger: 'click',mode: 'cell'}"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name" :edit-render="nameEditRender"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', sex: 'Man', age: 28 },
  { id: 10002, name: 'Test2', sex: 'Women', age: 22 },
  { id: 10003, name: 'Test3', sex: 'Man', age: 32 },
  { id: 10004, name: 'Test4', sex: 'Women', age: 23 }
])

const nameEditRender = reactive({
  name: 'MyTableEditPulldown'
})
</script>
