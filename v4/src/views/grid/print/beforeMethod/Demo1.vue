<template>
  <div>
    <vxe-button @click="printEvent">设置顶部和底部</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const printEvent = () => {
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

  const $grid = gridRef.value
  if ($grid) {
    $grid.print({
      sheetName: '打印出货单据',
      style: printStyle,
      beforePrintMethod ({ html }) {
        return topHtml + html + bottomHtml
      }
    })
  }
}
</script>
