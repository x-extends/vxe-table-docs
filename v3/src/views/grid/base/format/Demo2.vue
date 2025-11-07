<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'date', title: '转日期', width: 180, formatter: 'formatDate' },
        { field: 'time', title: '转日期格式', width: 140, formatter: ['formatDate', 'yyyy-MM-dd'] },
        { field: 'amount', title: '格式化金额', formatter: 'formatAmount', footerFormatter: 'formatAmount' },
        { field: 'bankCard', title: '银行卡', width: 180, formatter: 'formatBankcard' },
        { field: 'num7', title: '数值' },
        { field: 'num8', title: '截取2位数', formatter: 'formatCutNumber', footerFormatter: 'formatCutNumber' },
        { field: 'num9', title: '四舍五入2位数', formatter: 'formatFixedNumber', footerFormatter: 'formatFixedNumber' },
        { field: 'sex', title: '格式化性别', formatter: 'formatSex' }
      ],
      data: [
        { id: 10001, name: 'Test1', bankCard: '6222525678789432', sex: '0', time: 1599320111520, date: '2020-11-14T07:14:41.000Z', amount: 998.3, num: 863.345, num7: 863.345, num8: 863.345, num9: 863.345 },
        { id: 10002, name: 'Test2', bankCard: '6222525675674564', sex: '1', time: 1590820967410, date: '2022-10-24T08:14:18.000Z', amount: 777776536.3, num: 854.7789, num7: 854.7789, num8: 854.7789, num9: 854.7789 },
        { id: 10003, name: 'Test3', bankCard: '6222525477686963', sex: '0', time: 1599390785410, date: '2020-09-04T06:08:25.000Z', amount: 253.486, num: 963.1456, num7: 963.1456, num8: 963.1456, num9: 963.1456 },
        { id: 10004, name: 'Test4', bankCard: '6222525678678946', sex: '1', time: 1597385230710, date: '2019-10-20T20:40:20.000Z', amount: 9990000.66, num: 963.9856, num7: 963.9856, num8: 963.9856, num9: 963.9856 }
      ],
      footerData: [
        { seq: '合计', amount: 965.38469, num8: 98100.368, num9: 10003.6 }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
