<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
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
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      menuConfig: {
        header: {
          options: [
            [
              { code: 'myExportMenu', name: '导出数据' }
            ]
          ]
        },
        body: {
          options: [
            [
              { code: 'myExportMenu', name: '导出数据' },
              { code: 'myPrintMenu', name: '打印' },
              { code: 'myLinkMenu', name: '打开官网' }
            ]
          ]
        },
        footer: {
          options: [
            [
              { code: 'myLinkMenu', name: '打开官网' }
            ]
          ]
        }
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'num', title: 'Num' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: 2, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: 3, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: 4, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', num: 5, address: 'Guangzhou' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', num: 6, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', num: 1, address: 'test abc' }
      ],
      footerData: [
        { seq: '合计', num: 21 }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
