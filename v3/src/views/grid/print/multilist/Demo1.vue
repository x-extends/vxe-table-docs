<template>
  <div>
    <vxe-button @click="printEvent">同时打印2张表</vxe-button>

    <vxe-grid ref="grid1Ref" v-bind="grid1Options"></vxe-grid>
    <vxe-grid ref="grid2Ref" v-bind="grid2Options"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const grid1Options: VxeGridProps<RowVO> = {
      border: true,
      height: 300,
      columns: [
        { field: 'id', title: 'ID', width: 60 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    const grid2Options: VxeGridProps<RowVO> = {
      border: true,
      height: 300,
      columns: [
        { field: 'id', title: 'ID', width: 60 },
        { field: 'role', title: 'Role' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10005, name: 'Test5', role: 'PM', sex: 'Man', age: 29, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 38, address: 'Shanghai' }
      ]
    }

    return {
      grid1Options,
      grid2Options
    }
  },
  methods: {
    printEvent () {
      const $grid1 = this.$refs.grid1Ref as VxeGridInstance<RowVO>
      const $grid2 = this.$refs.grid2Ref as VxeGridInstance<RowVO>
      if ($grid1 && $grid2) {
        Promise.all(
          [
            $grid1.getPrintHtml().then(({ html }) => {
              return {
                headerHtml: '<div style="text-align: center;font-size: 28px;">第一张表</div>',
                bodyHtml: html
              }
            }),
            $grid2.getPrintHtml().then(({ html }) => {
              return {
                headerHtml: '<div style="text-align: center;font-size: 28px;">第二张表</div>',
                bodyHtml: html
              }
            })
          ]
        ).then(pageBreaks => {
          VxeUI.print({
            title: '打印多张表',
            showPageNumber: true,
            pageBreaks
          })
        })
      }
    }
  }
})
</script>
