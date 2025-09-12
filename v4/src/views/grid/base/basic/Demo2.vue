<template>
  <div>
    显示name<vxe-switch v-model="showName"></vxe-switch>
    显示address<vxe-switch v-model="showAddress"></vxe-switch>

    <vxe-grid :columns="tableColumn" :data="tableData"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const showName = ref(true)
const showAddress = ref(true)

const tableColumn = computed(() => {
  const defCols: VxeGridPropTypes.Columns<RowVO> = [
    { type: 'seq', width: 70 },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ]
  if (showName.value) {
    defCols.splice(1, 0, { field: 'name', title: 'Name' })
  }
  if (showAddress.value) {
    defCols.push({ field: 'address', title: 'Address' })
  }
  return defCols
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
</script>
