<template>
  <div>
    <vxe-grid v-bind="gridOptions" :footerData="footerData">
      <template #num_footer="{ row }">
        <span style="color: red">￥{{ row.num }}元</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'

import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number', slots: { footer: 'num_footer' } },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})

const footerData = computed(() => {
  return [
    { seq: '合计', num: sumNum(gridOptions.data || [], 'num') }
  ]
})
</script>
