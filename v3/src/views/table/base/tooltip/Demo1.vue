<template>
  <div>
    <vxe-table
      show-footer
      :row-config="{useKey: true}"
      :column-config="{useKey: true}"
      :footer-method="footerMethod"
      :tooltip-config="tooltipConfig"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="名称" :title-help="{message: '自定义帮助提示信息'}"></vxe-column>
      <vxe-column field="role" title="角色" :title-help="{message: '自定义图标', icon: 'vxe-icon-question-circle-fill'}"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
      <vxe-column field="rate" title="Rate">
        <template #header>
          <span>自定义标题</span>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" width="160"></vxe-column>
      <vxe-column type="html" field="content" title="Content" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { name: 'Test1', role: '前端', date: '2020-02-28', rate: 5, address: 'address1', content: 'xxxxx1<br>换行换行11111111111' },
        { name: 'Test2', role: '后端', date: '2020-02-22', rate: 2, address: 'address2\ntooltip文本换行\n换行xx', content: 'xxxxx1<br>换行换行2' },
        { name: 'Test3', role: '前端', date: '2020-01-01', rate: 0, address: 'address3\ntooltip文本换行\n换行xx', content: 'xxxxx1<br>换行换行<br>3333' },
        { name: 'Test4', role: '设计师', date: '2020-02-23', rate: 1, address: 'address4', content: 'xxxxx1<br>换行换行4' },
        { name: 'Test5', role: '前端', date: '2020-01-20', rate: 3, address: 'address5\ntooltip文本换行\n换行xx', content: 'xxxxx1<br>换行换行55' }
      ],
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
      }
    }
  },
  methods: {
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
    }
  }
}
</script>
