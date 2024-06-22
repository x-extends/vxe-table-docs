<template>
  <div>
    <vxe-table
      border
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="num" title="Num" :formatter="formatterNum" sortable></vxe-column>
      <vxe-column field="sex" title="Sex" :formatter="formatterSex" sortable></vxe-column>
      <vxe-column field="time" title="Time" :formatter="formatTime"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  bankCard: string
  sex: string
  time: number
  date: string
  amount: number
  num: number
  num7: number
  num8: number
  num9: number
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', bankCard: '6222525678789432', sex: '0', time: 1599320111520, date: '2020-11-14T07:14:41.000Z', amount: 998.3, num: 863.345, num7: 863.345, num8: 863.345, num9: 863.345 },
  { id: 10002, name: 'Test2', bankCard: '6222525675674564', sex: '1', time: 1590820967410, date: '2022-10-24T08:14:18.000Z', amount: 777776536.3, num: 854.7789, num7: 854.7789, num8: 854.7789, num9: 854.7789 },
  { id: 10003, name: 'Test3', bankCard: '6222525477686963', sex: '0', time: 1599390785410, date: '2020-09-04T06:08:25.000Z', amount: 253.486, num: 963.1456, num7: 963.1456, num8: 963.1456, num9: 963.1456 },
  { id: 10004, name: 'Test4', bankCard: '6222525678678946', sex: '1', time: 1597385230710, date: '2019-10-20T20:40:20.000Z', amount: 9990000.66, num: 963.9856, num7: 963.9856, num8: 963.9856, num9: 963.9856 },
  { id: 10005, name: 'Test5', bankCard: '6222525478909009', sex: '0', time: 1591627586920, date: '2020-09-17T11:14:18.000Z', amount: 10000.35, num: 99.845632, num7: 99.845632, num8: 99.845632, num9: 99.845632 },
  { id: 10006, name: 'Test6', bankCard: '6222525789898793', sex: '1', time: 1599728569710, date: '2021-01-04T10:12:18.000Z', amount: 999, num: 698.3689, num7: 698.3689, num8: 698.3689, num9: 698.3689 },
  { id: 10007, name: 'Test7', bankCard: '6222525476534534', sex: '1', time: 1590740052710, date: '2020-08-10T08:14:18.000Z', amount: 458666.3, num: 1000.3658, num7: 1000.3658, num8: 1000.3658, num9: 1000.3658 },
  { id: 10008, name: 'Test8', bankCard: '6222525445554231', sex: '0', time: 1599320425610, date: '2020-05-04T07:17:30.000Z', amount: 79999935.6, num: 600053.32845, num7: 600053.32845, num8: 600053.32845, num9: 600053.32845 }
])

const sexList = [
  { label: '女', value: '0' },
  { label: '男', value: '1' }
]

const formatterNum: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  return XEUtils.commafy(Number(cellValue), { digits: 2 })
}

const formatterSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  const item = sexList.find(item => item.value === cellValue)
  return item ? item.label : cellValue
}

const formatTime: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
}
</script>
