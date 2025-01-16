<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #rateAddress>
        <span>标题溢出显示原生 title xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      showHeaderOverflow: true,
      height: 500,
      rowConfig: {
        useKey: true,
        isHover: true
      },
      columnConfig: {
        useKey: true
      },
      tooltipConfig: {
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
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: '名称' },
        { field: 'role', title: '标题溢出直接隐藏 xxxxxxxxxxxxxxxxxxxxxxxxxxx', showHeaderOverflow: 'ellipsis' },
        { field: 'date', title: 'Date', showHeaderOverflow: true, showOverflow: true, showFooterOverflow: true },
        {
          title: '基本信息',
          children: [
            { field: 'rate', slots: { header: 'rateAddress' } },
            {
              title: '详细信息',
              children: [
                { type: 'html', field: 'address', title: '不换行不换行不换行不换行不换行不换行不换行不换行不换行', width: 160, showHeaderOverflow: true, showOverflow: true }
              ]
            }
          ]
        }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ],
      footerMethod ({ columns }) {
        const footerData = [
          columns.map((column, columnIndex) => {
            if (columnIndex === 0) {
              return '合计'
            }
            if (['date'].includes(column.field)) {
              return '说明 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            }
            if (['rate'].includes(column.field)) {
              return '不想换行不想换行不想换行不想换行不想换行不想换行不想换行不想换行'
            }
            return null
          })
        ]
        return footerData
      }
    }

    return {
      gridOptions
    }
  }
})
</script>
