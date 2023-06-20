<template>
  <div>
    <vxe-toolbar ref="toolbarRef" print>
      <template #buttons>
        <vxe-button content="打印表格" @click="printEvent"></vxe-button>
        <vxe-button content="打印勾选行" @click="printSelectEvent"></vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      ref="tableRef"
      height="300"
      :print-config="{}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
// 打印样式
const printStyle = `
.title {
  text-align: center;
}
.my-list-row {
  display: inline-block;
  width: 100%;
}
.my-list-col {
  float: left;
  width: 33.33%;
  height: 28px;
  line-height: 28px;
}
.my-top,
.my-bottom {
  font-size: 12px;
}
.my-top {
  margin-bottom: 5px;
}
.my-bottom {
  margin-top: 30px;
  text-align: right;
}
`
// 打印顶部内容模板
const topHtml = `
<h1 class="title">出货单据</h1>
<div class="my-top">
  <div class="my-list-row">
    <div class="my-list-col">商品名称：vxe-table</div>
    <div class="my-list-col">发货单号：X2665847132654</div>
    <div class="my-list-col">发货日期：2020-09-20</div>
  </div>
  <div class="my-list-row">
    <div class="my-list-col">收货姓名：小徐</div>
    <div class="my-list-col">收货地址：火星第七区18号001</div>
    <div class="my-list-col">联系电话：10086</div>
  </div>
</div>
`

// 打印底部内容模板
const bottomHtml = `
<div class="my-bottom">
  <div class="my-list-row">
    <div class="my-list-col"></div>
    <div class="my-list-col">创建人：小徐</div>
    <div class="my-list-col">创建日期：2020-09-20</div>
  </div>
</div>
`

export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Beijing' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shenzhen' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = this.$refs.tableRef
      const $toolbar = this.$refs.toolbarRef
      if ($table && $toolbar) {
        $table.connect($toolbar)
      }
    })
  },
  methods: {
    printEvent () {
      const $table = this.$refs.tableRef
      if ($table) {
        $table.print({
          sheetName: '打印出货单据',
          // 打印样式设置
          style: printStyle,
          // 打印指定列
          columns: [
            { type: 'seq' },
            { field: 'name' },
            { field: 'role' },
            { field: 'address' }
          ],
          // 打印之前拼接自定义模板
          beforePrintMethod: ({ content }) => {
            // 打印之前，返回自定义的 html 内容
            return topHtml + content + bottomHtml
          }
        })
      }
    },
    printSelectEvent () {
      const $table = this.$refs.tableRef
      if ($table) {
        $table.print({
          sheetName: '打印勾选行',
          // 打印样式设置
          style: printStyle,
          mode: 'selected',
          // 打印指定列
          columns: [
            { type: 'seq' },
            { field: 'name' },
            { field: 'role' },
            { field: 'address' }
          ],
          beforePrintMethod: ({ content }) => {
            // 打印之前，返回自定义的 html 内容
            return topHtml + content + bottomHtml
          }
        })
      }
    }
  }
}
</script>
