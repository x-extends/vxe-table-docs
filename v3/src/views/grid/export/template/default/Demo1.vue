<template>
  <div>
    <vxe-button @click="openEvent">高级导出</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #exportDefault>
        <vxe-notice-bar content="自定义默认区域，可以灵活的定制自定义功能" style="background: palegreen;"></vxe-notice-bar>
      </template>
      <template #exportFooter="{ options }">
        <vxe-button @click="cancelEvent">取消</vxe-button>
        <vxe-button status="primary" @click="customExport(options)">自定义导出</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showFooter: true,
      exportConfig: {
        slots: {
          default: 'exportDefault',
          footer: 'exportFooter'
        }
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', sex: '666', age: '999' },
        { seq: '平均', sex: '888', age: '333' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    openEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openExport()
      }
    },
    cancelEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.closeExport()
      }
    },
    customExport (options: VxeTablePropTypes.ExportConfig) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.exportData(options)
      }
    }
  }
})
</script>
