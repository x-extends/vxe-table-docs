<template>
  <div>
    <p class="tip">
      使用 <a class="link" href="https://www.npmjs.com/package/xlsx" target="_blank">xlsx</a> 自行实现导入数据<br>
      <a class="link" href="https://www.npmjs.com/package/vxe-table" target="_blank">vxe-table</a> 作为表格组件，可以很容易跟其他优秀的组件库互相集成，以下为简单示例可供参考。<br>
      <span class="red">（注：该示例仅供参考，具体逻辑请自行实现）</span>
    </p>

    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="impotEvent">选择文件</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-grid
      border
      ref="xGrid1"
      height="300"
      :columns="tableColumn"
      :data="tableData1"></vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">
      使用 <a class="link" href="https://www.npmjs.com/package/xlsx" target="_blank">xlsx</a> 实现导出 xlsx 文件<br>
      <span class="red">（注：该示例仅供参考，具体逻辑请自行实现）</span>
    </p>

    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="exportEvent">导出.xlsx</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-grid
      border
      ref="xGrid2"
      height="300"
      :span-method="rowspanMethod"
      :columns="tableColumn"
      :data="tableData2"></vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  data () {
    return {
      tableColumn: [
        { type: 'checkbox', width: 60 },
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex', formatter: this.formatterSex },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      tableData1: [],
      tableData2: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', age: 21, address: 'Shenzhen' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', age: 29, address: 'Guangzhou' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', age: 35, address: 'Shenzhen' },
        { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', age: 24, address: 'Shenzhen' },
        { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 20, address: 'Guangzhou' }
      ],
      demoCodes: [
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="impotEvent">选择文件</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-grid
          border
          ref="xGrid1"
          height="300"
          :columns="tableColumn"
          :data="tableData1"></vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              tableColumn: [
                { type: 'checkbox', width: 60 },
                { field: 'name', title: 'Name' },
                { field: 'role', title: 'Role' },
                { field: 'sex', title: 'Sex', formatter: this.formatterSex },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
              ],
              tableData1: []
            }
          },
          methods: {
            formatterSex ({ cellValue }) {
              if (cellValue === '1') {
                return '男'
              } else if (cellValue === '0') {
                return '女'
              }
              return ''
            },
            impotEvent () {
              this.$refs.xGrid1.readFile({
                types: ['xls', 'xlsx']
              }).then(params => {
                const { files } = params
                const fileReader = new FileReader()
                fileReader.onload = (ev) => {
                  const data = ev.target.result
                  const workbook = XLSX.read(data, { type: 'binary' })
                  const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)
                  const tableData = []
                  // 解析数据
                  csvData.split('\\n').forEach((vRow) => {
                    if (vRow) {
                      const vCols = vRow.split(',')
                      const item = {}
                      vCols.forEach((val, cIndex) => {
                        const column = this.tableColumn[cIndex]
                        if (column.field) {
                          item[column.field] = val
                        }
                      })
                      tableData.push(item)
                    }
                  })
                  this.tableData1 = tableData
                }
                fileReader.readAsBinaryString(files[0])
              })
            }
          }
        }
        `,
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="exportEvent">导出.xlsx</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-grid
          border
          ref="xGrid2"
          height="300"
          :span-method="rowspanMethod"
          :columns="tableColumn"
          :data="tableData2"></vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              tableColumn: [
                { type: 'checkbox', width: 60 },
                { field: 'name', title: 'Name' },
                { field: 'role', title: 'Role' },
                { field: 'sex', title: 'Sex', formatter: this.formatterSex },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
              ],
              tableData2: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', age: 21, address: 'Shenzhen' },
                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', age: 29, address: 'Guangzhou' },
                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', age: 35, address: 'Shenzhen' },
                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', age: 24, address: 'Shenzhen' },
                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 20, address: 'Guangzhou' }
              ]
            }
          },
          methods: {
            formatterSex ({ cellValue }) {
              if (cellValue === '1') {
                return '男'
              } else if (cellValue === '0') {
                return '女'
              }
              return ''
            },
            async impotEvent () {
              const { files } = await this.$refs.xGrid1.readFile({
                types: ['xls', 'xlsx']
              })
              const fileReader = new FileReader()
              fileReader.onload = (ev) => {
                const data = ev.target.result
                const workbook = XLSX.read(data, { type: 'binary' })
                const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)
                const tableData = []
                // 解析数据
                csvData.split('\\n').forEach((vRow) => {
                  if (vRow) {
                    const vCols = vRow.split(',')
                    const item = {}
                    vCols.forEach((val, cIndex) => {
                      const column = this.tableColumn[cIndex]
                      if (column.field) {
                        item[column.field] = val
                      }
                    })
                    tableData.push(item)
                  }
                })
                this.tableData1 = tableData
              }
              fileReader.readAsBinaryString(files[0])
            },
            // 通用行合并函数（将相同多列数据合并为一行）
            rowspanMethod ({ row, _rowIndex, column, visibleData }) {
              const fields = ['sex']
              const cellValue = row[column.property]
              if (cellValue && fields.includes(column.property)) {
                const prevRow = visibleData[_rowIndex - 1]
                let nextRow = visibleData[_rowIndex + 1]
                if (prevRow && prevRow[column.property] === cellValue) {
                  return { rowspan: 0, colspan: 0 }
                } else {
                  let countRowspan = 1
                  while (nextRow && nextRow[column.property] === cellValue) {
                    nextRow = visibleData[++countRowspan + _rowIndex]
                  }
                  if (countRowspan > 1) {
                    return { rowspan: countRowspan, colspan: 1 }
                  }
                }
              }
            },
            exportEvent () {
              const workBook = XLSX.utils.table_to_book(this.$refs.xGrid2.$el.querySelector('.body--wrapper>.vxe-table--body'))
              XLSX.writeFile(workBook, '数据导出.xlsx')
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    formatterSex ({ cellValue }) {
      if (cellValue === '1') {
        return '男'
      } else if (cellValue === '0') {
        return '女'
      }
      return ''
    },
    async impotEvent () {
      const { files } = await this.$refs.xGrid1.readFile({
        types: ['xls', 'xlsx']
      })
      const fileReader = new FileReader()
      fileReader.onload = (ev) => {
        const data = ev.target.result
        const workbook = XLSX.read(data, { type: 'binary' })
        const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)
        const tableData = []
        // 解析数据
        csvData.split('\n').forEach((vRow) => {
          if (vRow) {
            const vCols = vRow.split(',')
            const item = {}
            vCols.forEach((val, cIndex) => {
              const column = this.tableColumn[cIndex]
              if (column.field) {
                item[column.field] = val
              }
            })
            tableData.push(item)
          }
        })
        this.tableData1 = tableData
      }
      fileReader.readAsBinaryString(files[0])
    },
    // 通用行合并函数（将相同多列数据合并为一行）
    rowspanMethod ({ row, _rowIndex, column, visibleData }) {
      const fields = ['sex']
      const cellValue = row[column.property]
      if (cellValue && fields.includes(column.property)) {
        const prevRow = visibleData[_rowIndex - 1]
        let nextRow = visibleData[_rowIndex + 1]
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = visibleData[++countRowspan + _rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    },
    exportEvent () {
      const workBook = XLSX.utils.table_to_book(this.$refs.xGrid2.$el.querySelector('.body--wrapper>.vxe-table--body'))
      XLSX.writeFile(workBook, '数据导出.xlsx')
    }
  }
}
</script>
