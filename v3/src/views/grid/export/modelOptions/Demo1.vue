<template>
  <div>
    最小化：<vxe-switch v-model="exportConfig.modelOptions.showMinimize"></vxe-switch>
    最大化：<vxe-switch v-model="exportConfig.modelOptions.showMaximize"></vxe-switch>
    拖拽调整：<vxe-switch v-model="exportConfig.modelOptions.resize"></vxe-switch>
    全屏打开：<vxe-switch v-model="exportConfig.modelOptions.fullscreen"></vxe-switch>

    <vxe-button status="primary" @click="openEvent">高级导出</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeTablePropTypes, VxeGridProps, VxeWithRequired } from 'vxe-table'

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
    const exportConfig: VxeWithRequired<VxeTablePropTypes.ExportConfig<RowVO>, 'modelOptions'> = {
      modelOptions: {
        title: '正在导出文件',
        width: 1000,
        height: 600,
        fullscreen: false,
        showMinimize: true,
        showMaximize: true,
        resize: true
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      mergeCells: [
        { row: 1, col: 2, colspan: 2, rowspan: 1 }
      ],
      mergeFooterCells: [
        { row: 0, col: 2, colspan: 2, rowspan: 1 }
      ],
      exportConfig,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'checkbox', type: 'checkbox', width: 70 },
        {
          title: '分组1',
          children: [
            { field: 'name', title: 'Name' }
          ]
        },
        {
          title: '分组2',
          children: [
            { field: 'sex', title: 'Sex' },
            { field: 'age', title: 'Age' }
          ]
        }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', name: '45', sex: '666', age: '999' },
        { seq: '平均', name: '98', sex: '888', age: '333' }
      ]
    }

    return {
      gridOptions,
      exportConfig
    }
  },
  methods: {
    openEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openExport()
      }
    }
  }
})
</script>
