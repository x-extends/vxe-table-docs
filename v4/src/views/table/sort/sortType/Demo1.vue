<template>
  <div>
    <vxe-table
      border
      height="300"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="num1" title="按字符串排序" sort-type="string" sortable></vxe-column>
      <vxe-column field="num2" title="按数值排序" sort-type="number" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  name: string
  role: string
  num: number
  num1: string
  num2: string
}

const tableData = ref<RowVO[]>([
  { name: 'lefa', role: '前端', num: 7, num1: '1368.7', num2: '1368.7' },
  { name: '老王1', role: '后端', num: 6, num1: '89657', num2: '89657' },
  { name: 'xgy王', role: '后端', num: 1, num1: '672', num2: '672' },
  { name: '小明11', role: '前端', num: 2, num1: '482456', num2: '482456' },
  { name: '好吧', role: '测试', num: 3, num1: '7546.7', num2: '7546.7' },
  { name: '老王11', role: '前端', num: 3, num1: '6897', num2: '6897' },
  { name: 'tfhn', role: '测试', num: 4, num1: '8957', num2: '8957' },
  { name: '踢fhz', role: '测试', num: 4, num1: '8957', num2: '8957' },
  { name: 'qtjh1111111', role: '前端', num: 4, num1: '56433.57', num2: '56433.57' },
  { name: 'lhfgt', role: '前端', num: 8, num1: '977', num2: '977' },
  { name: 'h小明111', role: '测试', num: 6, num1: '98477', num2: '98477' },
  { name: '小红11111', role: '后端', num: 9, num1: '67017', num2: '67017' },
  { name: 'tfhnhy', role: '测试', num: 4, num1: '8957', num2: '8957' },
  { name: '老徐11', role: '前端', num: 5, num1: '7364', num2: '7364' },
  { name: 'qth', role: '测试', num: 1, num1: '1573.7', num2: '1573.7' },
  { name: '小红1111', role: '前端', num: 4, num1: '16807', num2: '16807' },
  { name: '小红111', role: '前端', num: 2, num1: '744345.7', num2: '744345.7' },
  { name: '前任', role: '测试', num: 3, num1: '10957', num2: '10957' },
  { name: 'q老王1', role: '前端', num: 6, num1: '6737', num2: '6737' }
])
</script>
