<template>
  <div>
    <p>
      <vxe-button @click="tableWidth = '600px'">宽600px</vxe-button>
      <vxe-button @click="tableWidth = '700px'">宽700px</vxe-button>
      <vxe-button @click="tableWidth = '800px'">宽800px</vxe-button>
      <vxe-button @click="tableHeight = '300px'">高300px</vxe-button>
      <vxe-button @click="tableHeight = '500px'">高500px</vxe-button>
      <vxe-button @click="tableHeight = '800px'">高800px</vxe-button>
    </p>

    <div style="overflow: hidden;" :style="{width: tableWidth, height: tableHeight}">
      <vxe-table
        border
        auto-resize
        show-footer
        height="auto"
        :footer-method="footerMethod"
        :data="tableData">
        <vxe-column type="seq" width="60" fixed="left"></vxe-column>
        <vxe-column field="name" title="Name" width="300"></vxe-column>
        <vxe-column field="sex" title="Sex" width="300"></vxe-column>
        <vxe-column field="age" title="Age" width="300"></vxe-column>
        <vxe-column field="date13" title="Date" width="300"></vxe-column>
        <vxe-column field="address" title="Address" width="200" fixed="right" show-overflow></vxe-column>
      </vxe-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 30, address: 'Guangzhou' },
        { id: 10009, name: 'Test9', role: 'Test', sex: 'Women', age: 28, address: 'test abc' },
        { id: 100010, name: 'Test10', role: 'Test', sex: 'Man', age: 24, address: 'Shanghai' }
      ],
      tableWidth: '',
      tableHeight: '300px'
    }
  },
  methods: {
    meanNum  (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count / list.length
    },
    sumNum (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count
    },
    footerMethod ({ columns, data }) {
      const means = []
      const sums = []
      columns.forEach((column, columnIndex) => {
        if (columnIndex === 0) {
          means.push('平均')
          sums.push('和值')
        } else {
          let meanCell = null
          let sumCell = null
          switch (column.field) {
            case 'age':
            case 'rate':
              meanCell = this.meanNum(data, column.field)
              sumCell = this.sumNum(data, column.field)
              break
          }
          means.push(meanCell)
          sums.push(sumCell)
        }
      })

      // 返回一个二维数组的表尾合计
      return [means, sums]
    }
  }
}
</script>
