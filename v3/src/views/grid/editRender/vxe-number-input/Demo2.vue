<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import type { VxeNumberInputProps } from 'vxe-pc-ui'
import { amountToChinese } from './demo2.util'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  num: number | null
  float: number | null
  integer: number | null
  money: number | null
}

export default Vue.extend({
  data () {
    const moneyEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeNumberInputProps> = {
      name: 'VxeNumberInput',
      props: {
        type: 'amount',
        showCurrency: true,
        showTooltip: true,
        tooltipConfig: {
          contentMethod ({ value, label }) {
            return value ? `${label}\n${amountToChinese(value)}` : ''
          }
        }
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput' } },
        { field: 'float', title: '显示浮动标签', width: 180, editRender: { name: 'VxeNumberInput', props: { type: 'amount', floatContent: '万', showCurrency: true } } },
        { field: 'money', title: '显示中文金额', width: 180, editRender: moneyEditRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: null, integer: null, float: null, money: 10000 },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: 22, integer: 23, float: 22.35, money: null },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: 32, integer: null, float: null, money: null }
      ]
    }

    return {
      gridOptions,
      moneyEditRender
    }
  }
})
</script>
