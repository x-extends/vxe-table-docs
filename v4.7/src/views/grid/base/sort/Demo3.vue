<template>
  <div>
    <vxe-table
      border
      height="300"
      :row-config="{isHover: true}"
      :data="tableData"
      :sort-config="sortConfig">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="num1" title="Num1"></vxe-column>
      <vxe-column field="num2" title="Num2"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  num: number
  num1: number
  num2: string
}

const tableData = ref<RowVO[]>([
  { name: 'lefa', role: '前端', num: 7, num1: 1368.7, num2: '1368.7' },
  { name: '老王1', role: '后端', num: 6, num1: 89657, num2: '89657' },
  { name: 'xgy王', role: '后端', num: 1, num1: 672, num2: '672' },
  { name: '小明11', role: '前端', num: 2, num1: 482456, num2: '482456' },
  { name: '好吧', role: '测试', num: 3, num1: 7546.7, num2: '7546.7' },
  { name: '老王11', role: '前端', num: 3, num1: 6897, num2: '6897' },
  { name: 'tfhn', role: '测试', num: 4, num1: 8957, num2: '8957' },
  { name: '踢fhz', role: '测试', num: 4, num1: 8957, num2: '8957' },
  { name: 'qtjh1111111', role: '前端', num: 4, num1: 56433.57, num2: '56433.57' },
  { name: 'lhfgt', role: '前端', num: 8, num1: 977, num2: '977' },
  { name: 'h小明111', role: '测试', num: 6, num1: 98477, num2: '98477' },
  { name: '小红11111', role: '后端', num: 9, num1: 67017, num2: '67017' },
  { name: 'tfhnhy', role: '测试', num: 4, num1: 8957, num2: '8957' },
  { name: '老徐11', role: '前端', num: 5, num1: 7364, num2: '7364' },
  { name: 'qth', role: '测试', num: 1, num1: 1573.7, num2: '1573.7' },
  { name: '小红1111', role: '前端', num: 4, num1: 16807, num2: '16807' },
  { name: '小红111', role: '前端', num: 2, num1: 744345.7, num2: '744345.7' },
  { name: '前任', role: '测试', num: 3, num1: 10957, num2: '10957' },
  { name: 'q老王1', role: '前端', num: 6, num1: 6737, num2: '6737' }
])

const getPinYin = (str: string) => {
  return str.split('').map(char => {
    switch (char.charAt(0)) {
      case '老': return 'lao'
      case '小': return 'xiao'
      case '前': return 'qian'
      case '好': return 'hao'
      case '王': return 'wang'
      case '红': return 'hong'
      case '明': return 'ming'
      case '吧': return 'ba'
      case '踢': return 'ti'
    }
    return char.charAt(0)
  }).join('')
}

const sortConfig = ref<VxeTablePropTypes.SortConfig<RowVO>>({
  sortMethod ({ data, sortList }) {
    const sortItem = sortList[0]
    // 取出第一个排序的列
    const { field, order } = sortItem
    let list: RowVO[] = []
    if (order === 'asc' || order === 'desc') {
      if (field === 'name') {
        // 例如：实现中英文混排，按照字母排序
        list = data.sort((a, b) => {
          return getPinYin(a.name).localeCompare(getPinYin(b.name))
        })
      } else {
        list = data.sort()
      }
    }
    if (order === 'desc') {
      list.reverse()
    }
    return list
  }
})
</script>
