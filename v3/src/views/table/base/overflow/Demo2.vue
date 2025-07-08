<template>
  <div>
    <vxe-table
      border
      show-footer
      show-header-overflow
      height="500"
      :row-config="{useKey: true, isHover: true}"
      :column-config="{useKey: true}"
      :footer-data="footerData"
      :data="tableData"
      :tooltip-config="tooltipConfig">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="名称"></vxe-column>
      <vxe-column field="role" title="标题溢出直接隐藏 xxxxxxxxxxxxxxxxxxxxxxxxxxx" show-header-overflow="ellipsis"></vxe-column>
      <vxe-column field="date" title="Date" show-header-overflow show-overflow show-footer-overflow></vxe-column>
      <vxe-colgroup title="基本信息">
        <vxe-colgroup field="rate" show-header-overflow="title">
          <template #header>
            <span>标题溢出显示原生 title xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          </template>
        </vxe-colgroup>
        <vxe-colgroup title="详细信息">
          <vxe-column type="html" field="address" title="标题溢出显示tooltip内容内容内容内容内容内容" width="160" show-header-overflow show-overflow></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
    ]

    const tooltipConfig: VxeTablePropTypes.TooltipConfig<RowVO> = {
      contentMethod: ({ type, column, row, items, _columnIndex }) => {
        // 重写默认的提示内容
        if (column.field === 'date') {
          if (type === 'header') {
            return '自定义标题提示内容：' + column.title
          } else if (type === 'footer') {
            return '自定义表尾提示内容：' + items[_columnIndex]
          }
          return '自定义提示内容：' + row[column.field]
        }
      },
      enterable: true
    }

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', date: '说明 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx长文本内容长文本内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', rate: '不想换行不想换行不想换行不想换行不想换行不想换行不想换行不想换行' }
    ]

    return {
      tableData,
      tooltipConfig,
      footerData
    }
  }
})
</script>
