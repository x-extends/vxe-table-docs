<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom export>
      <template #buttons>
        <vxe-button status="primary" @click="exportDataEvent">导出数据</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      ref="tableRef"
      height="400"
      :export-config="exportConfig"
      :data="tableData">
      <vxe-column field="orderNo" title="Order NO"></vxe-column>
      <vxe-column field="productNo" title="Product NO"></vxe-column>
      <vxe-column field="productName" title="Product name"></vxe-column>
      <vxe-column field="realNum" title="Real quantity"></vxe-column>
      <vxe-column field="plannedNum" title="Planned quantity"></vxe-column>
      <vxe-column field="describe" title="Describe"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTableInstance, VxeToolbarInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  orderNo: string
  productNo: string
  productName: string
  realNum: number
  plannedNum: number
  describe: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()
const toolbarRef = ref<VxeToolbarInstance>()

const tableData = ref<RowVO[]>([
  { orderNo: 'X02514645652', productNo: 'SX001', productName: 'XXX', realNum: 34, plannedNum: 20, describe: '' },
  { orderNo: 'X02456765765', productNo: 'Sk001', productName: 'Mouse', realNum: 64, plannedNum: 80, describe: 'Account paid' },
  { orderNo: 'X05672556765', productNo: 'SX002', productName: 'Keyboard', realNum: 127, plannedNum: 88, describe: '' },
  { orderNo: 'X06768905676', productNo: 'SX003', productName: 'Keyboard', realNum: 13, plannedNum: 90, describe: '' },
  { orderNo: 'X05672556765', productNo: 'SX004', productName: 'Mouse', realNum: 89, plannedNum: 12, describe: '' },
  { orderNo: 'X00172556761', productNo: 'SX005', productName: 'Mouse', realNum: 46, plannedNum: 56, describe: '' },
  { orderNo: 'X05672556460', productNo: 'SX006', productName: 'Keyboard', realNum: 146, plannedNum: 3, describe: '' },
  { orderNo: 'X01872556499', productNo: 'SX007', productName: 'Keyboard', realNum: 47, plannedNum: 44, describe: '' },
  { orderNo: 'X77672556431', productNo: 'SX008', productName: 'Mouse', realNum: 126, plannedNum: 61, describe: '' }
])

const exportConfig = ref<VxeTablePropTypes.ExportConfig>({
  // 默认选中类型
  type: 'pdf',
  // 自定义类型
  types: ['pdf', 'csv', 'html', 'xml', 'txt']
})

const exportDataEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      filename: 'Order details',
      sheetName: 'Order details ( X02514645652 )',
      type: 'pdf'
    })
  }
}

nextTick(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
