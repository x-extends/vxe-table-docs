<template>
  <div>
    <vxe-table
      border
      height="300"
      :row-config="{isHover: true}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :sort-by="sortNameMethod" sortable>
        <template #default="{ row }">
          <span style="color: red;">名字：{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Num" sortable></vxe-column>
      <vxe-column field="num1" title="分离格式化与数值字段" sort-by="num1" sortable :formatter="formatterNum"></vxe-column>
      <vxe-column field="num2" title="分离格式化与字符串字段" sort-by="num2" sort-type="number" sortable :formatter="formatterNum"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  name: string
  role: string
  num: number
  num1: number
  num2: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { name: '小红11', role: '前端', num: 7, num1: 1368.7, num2: '1368.7' },
      { name: '老王1', role: '后端', num: 6, num1: 89657, num2: '89657' },
      { name: '小红111111', role: '后端', num: 1, num1: 672, num2: '672' },
      { name: '小明11', role: '前端', num: 2, num1: 482456, num2: '482456' },
      { name: '老徐111', role: '测试', num: 3, num1: 7546.7, num2: '7546.7' },
      { name: '老王11', role: '前端', num: 3, num1: 6897, num2: '6897' },
      { name: '老徐11111111', role: '测试', num: 4, num1: 8957, num2: '8957' },
      { name: '小明111111111', role: '前端', num: 4, num1: 56433.57, num2: '56433.57' },
      { name: '小明1', role: '前端', num: 8, num1: 977, num2: '977' },
      { name: '小明111', role: '测试', num: 6, num1: 98477, num2: '98477' },
      { name: '小红11111', role: '后端', num: 9, num1: 67017, num2: '67017' },
      { name: '老徐11', role: '前端', num: 5, num1: 7364, num2: '7364' },
      { name: '老徐11', role: '测试', num: 1, num1: 1573.7, num2: '1573.7' },
      { name: '小红1111', role: '前端', num: 4, num1: 16807, num2: '16807' },
      { name: '小红111', role: '前端', num: 2, num1: 744345.7, num2: '744345.7' },
      { name: '小明111', role: '测试', num: 3, num1: 10957, num2: '10957' },
      { name: '老王1', role: '前端', num: 6, num1: 6737, num2: '6737' },
      { name: '老王1111', role: '后端', num: 4, num1: 83445.1, num2: '83445.1' },
      { name: '老徐11', role: '前端', num: 8, num1: 4636677, num2: '4636677' },
      { name: '小明111111', role: '测试', num: 7, num1: 5783537, num2: '5783537' }
    ]

    const formatterNum: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
      return XEUtils.commafy(Number(cellValue), { digits: 2 })
    }

    const sortNameMethod: VxeColumnPropTypes.SortBy<RowVO> = ({ row }) => {
      // 按名称长度进行排序
      return row.name.length
    }

    return {
      tableData,
      formatterNum,
      sortNameMethod
    }
  }
})
</script>
