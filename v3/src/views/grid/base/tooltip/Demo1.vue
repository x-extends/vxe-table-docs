<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  date: string
  rate: number
  address: string
  content: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showFooter: true,
      rowConfig: {
        useKey: true
      },
      columnConfig: {
        useKey: true
      },
      tooltipConfig: {
        showAll: true,
        enterable: true,
        contentMethod: ({ type, column, row, items, _columnIndex }) => {
          const { field } = column
          // 重写默认的提示内容
          if (field === 'role' || field === 'date') {
            if (type === 'header') {
              return column.title ? '自定义标题提示内容：' + column.title : ''
            } else if (type === 'footer') {
              return items[_columnIndex] ? '自定义表尾提示内容，\n并且自定义换行：\n' + items[_columnIndex] : ''
            }
            return row[field] ? '自定义提示内容：' + row[field] : ''
          } else if (field === 'rate') {
            // 返回空字符串，控制单元格不显示提示内容
            return ''
          }
          // 其余的单元格使用默认行为
          return null
        }
      },
      footerMethod ({ columns }) {
        const footerData = [
          columns.map((column, columnIndex) => {
            if (columnIndex === 0) {
              return '合计'
            }
            if (['date'].includes(column.field)) {
              return '2020-09-05'
            }
            if (['rate'].includes(column.field)) {
              return 999.8
            }
            return null
          })
        ]
        return footerData
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: '名称', titlePrefix: { content: '自定义前缀' } },
        { field: 'role', title: '角色', titlePrefix: { content: '自定义前缀图标', icon: 'vxe-icon-question-circle-fill' } },
        { field: 'date', title: 'Date', titleSuffix: { content: '自定义后缀' } },
        { field: 'rate', title: 'Rate', titleSuffix: { content: '自定义后缀图标', icon: 'vxe-icon-question-circle-fill' } },
        { field: 'address', title: 'Address', width: 160 },
        { type: 'html', field: 'content', title: 'Content', width: 200 }
      ],
      data: [
        { name: 'Test1', role: '前端', date: '2020-02-28', rate: 5, address: 'address1', content: 'xxxxx1<br>换行换行11111111111' },
        { name: 'Test2', role: '后端', date: '2020-02-22', rate: 2, address: 'address2\ntooltip文本换行\n换行xx', content: 'xxxxx1<br>换行换行2' },
        { name: 'Test3', role: '前端', date: '2020-01-01', rate: 0, address: 'address3\ntooltip文本换行\n换行xx', content: 'xxxxx1<br>换行换行<br>3333' },
        { name: 'Test4', role: '设计师', date: '2020-02-23', rate: 1, address: 'address4', content: 'xxxxx1<br>换行换行4' },
        { name: 'Test5', role: '前端', date: '2020-01-20', rate: 3, address: 'address5\ntooltip文本换行\n换行xx', content: 'xxxxx1<br>换行换行55' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
