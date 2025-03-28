<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="300"
      :edit-config="{trigger: 'click',mode: 'cell'}"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="amount" title="Amount" :edit-render="amountEditRender"></vxe-column>
      <vxe-column field="num" title="Num" :edit-render="numEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'

interface RowVO {
  id: number
  name: string
  amount: string
  num: number
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', amount: '65', num: 28 },
  { id: 10002, name: 'Test2', amount: '31', num: 22 },
  { id: 10003, name: 'Test3', amount: '20', num: 32 },
  { id: 10004, name: 'Test4', amount: '12', num: 23 }
])

const amountEditRender = reactive({
  name: 'MyTableEditAmount'
})

const numEditRender = reactive({
  name: 'MyTableEditAmount'
})
</script>
