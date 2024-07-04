<template>
  <div>
    <vxe-button @click="printEvent">打印每页26条</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  sex: string
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 300,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: []
})

const printEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    // 分割每页26条
    Promise.all(
      XEUtils.chunk(gridOptions.data, 26).map(pageData => {
        return $grid.getPrintHtml({
          data: pageData
        }).then(({ html }) => {
          return {
            bodyHtml: html
          }
        })
      })
    ).then(pageBreaks => {
      VxeUI.print({
        title: '分页打印表格',
        showPageNumber: true,
        pageBreaks
      })
    })
  }
}

const list: RowVO[] = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: 10001 + i,
    name: 'Test1',
    role: 'Develop',
    age: 66,
    sex: 'Man',
    address: 'test abc'
  })
}
gridOptions.data = list
</script>
