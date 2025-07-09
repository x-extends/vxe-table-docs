<template>
  <div>
    <p>
      <vxe-button @click="showOverflow = !showOverflow">单元格是否换行</vxe-button>
      <vxe-button @click="exportDataEvent">默认导出</vxe-button>
      <vxe-button @click="exportSelectEvent">导出选中</vxe-button>
      <vxe-button @click="openExportEvent">高级导出</vxe-button>
    </p>

    <vxe-table
      ref="tableRef"
      height="300"
      :show-overflow="showOverflow"
      :row-config="{isHover: true}"
      :export-config="{}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="name" title="Name"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="Group2">
        <vxe-column field="attr1" title="自动转换"></vxe-column>
        <vxe-column field="amount" title="导出数值" cell-type="number"></vxe-column>
        <vxe-column field="num" title="导出字符串" cell-type="string" sortable></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance } from 'vxe-table'
import { VxeButtonEvents } from 'vxe-pc-ui'

interface RowVO {
  name: string
  attr1: string | number | boolean
  amount: string
  num: string | number
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const showOverflow = ref(false)

const tableData = ref<RowVO[]>([
  { name: 'test1', attr1: 'test1', amount: '12953.6985', num: 1259326 },
  { name: 'tesfg t1', attr1: '154645623546345', amount: '45646464888888654654', num: 4564566456645 },
  { name: 'sdf sgfd fdg', attr1: 1231242, amount: '4564564545646.6985', num: 0 },
  { name: 'test1', attr1: true, amount: '12953.6985', num: 54646646 },
  { name: 'aaa\n换行bb\n换行gg', attr1: '0', amount: '0', num: '645645645665567645234326456' },
  { name: 'te st1', attr1: false, amount: '1231231213123.456', num: '45645645645646456' },
  { name: 'tesf \n换行g t6', attr1: 'test2', amount: '99999.08', num: 9999.88 }
])

const exportDataEvent: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({ type: 'csv' })
  }
}

const exportSelectEvent: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      data: $table.getCheckboxRecords()
    })
  }
}

const openExportEvent: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openExport()
  }
}
</script>
