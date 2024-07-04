<template>
  <div>
    <vxe-button @click="printEvent">直接打印</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

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
  const $grid = gridRef.value
  if ($grid) {
    $grid.getPrintHtml().then(({ html }) => {
      VxeUI.print({
        headerHtml ({ currentPage, pageCount }) {
          return `<div style="font-size: 20px;padding-top: 20px;text-align: center;">
            <span>标题：自定义标题 </span>
            <span>页码：${currentPage}/${pageCount}</span>
          </div>`
        },
        footerHtml: '<div style="font-size: 40px">自定义页尾</div>',
        pageBreaks: [
          {
            bodyHtml: '<img src="https://vxeui.com/resource/img/fj562.png" width="100%">'
          },
          {
            bodyHtml: html
          }
        ]
      })
    })
  }
}
</script>
