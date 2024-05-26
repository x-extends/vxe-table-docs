<template>
  <div>
    <vxe-table
      border
      height="400"
      :row-config="{isHover: true}"
      :column-config="{resizable: true}"
      :tooltip-config="{}"
      :menu-config="{}"
      :data="tableData"
      @header-cell-click="headerCellClickEvent"
      @header-cell-dblclick="headerCellDblclickEvent"
      @header-cell-menu="headerCellContextMenuEvent"
      @cell-click="cellClickEvent"
      @cell-dblclick="cellDBLClickEvent"
      @cell-mouseenter="cellMouseenterEvent"
      @cell-mouseleave="cellMouseleaveEvent"
      @cell-menu="cellContextMenuEvent"
      @footer-cell-click="footerCellClickEvent"
      @footer-cell-dblclick="footerCellDblclickEvent"
      @footer-cell-menu="footerCellContextMenuEvent"
      @scroll="scrollEvent">
      <vxe-column type="seq" title="序号" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-colgroup title="Role" width="300">
        <vxe-column field="role" title="Role" width="300"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="date" title="Date" width="300"></vxe-column>
      <vxe-column field="address" title="Address" fixed="right" width="300"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])

const headerCellClickEvent: VxeTableEvents.HeaderCellClick<RowVO> = ({ column }) => {
  console.log(`表头单元格点击${column.title}`)
}

const headerCellDblclickEvent: VxeTableEvents.HeaderCellDblclick<RowVO> = ({ column }) => {
  console.log(`表头单元格双击${column.title}`)
}

const headerCellContextMenuEvent: VxeTableEvents.HeaderCellMenu<RowVO> = ({ column }) => {
  console.log(`表头单元格右键 ${column.title}`)
}

const cellClickEvent: VxeTableEvents.CellClick<RowVO> = ({ column }) => {
  console.log(`单元格点击${column.title}`)
}

const cellDBLClickEvent: VxeTableEvents.CellDblclick<RowVO> = ({ column }) => {
  console.log(`单元格双击${column.title}`)
}

const cellMouseenterEvent: VxeTableEvents.CellMouseenter<RowVO> = ({ column }) => {
  console.log(`单元格鼠标进入${column.title}`)
}

const cellMouseleaveEvent: VxeTableEvents.CellMouseleave<RowVO> = ({ column }) => {
  console.log(`单元格鼠标离开${column.title}`)
}

const cellContextMenuEvent: VxeTableEvents.CellMenu<RowVO> = ({ row }) => {
  console.log(`单元格右键行 ${row.name}`)
}

const footerCellClickEvent: VxeTableEvents.FooterCellClick<RowVO> = ({ column }) => {
  console.log(`表尾单元格点击${column.title}`)
}

const footerCellDblclickEvent: VxeTableEvents.FooterCellDblclick<RowVO> = ({ column }) => {
  console.log(`表尾单元格双击${column.title}`)
}

const footerCellContextMenuEvent: VxeTableEvents.FooterCellMenu<RowVO> = ({ column }) => {
  console.log(`表尾单元格右键 ${column.title}`)
}

const scrollEvent: VxeTableEvents.Scroll<RowVO> = ({ scrollTop, scrollLeft, scrollWidth, scrollHeight, bodyWidth, bodyHeight }) => {
  let xStatus = ''
  if (scrollLeft <= 0) {
    xStatus = '左侧'
  } else if (scrollLeft + bodyWidth >= scrollWidth) {
    xStatus = '右侧'
  }
  let yStatus = ''
  if (scrollTop <= 0) {
    yStatus = '顶部'
  } else if (scrollTop + bodyHeight >= scrollHeight) {
    yStatus = '底部'
  }
  console.log(`滚动事件：scrollTop=${scrollTop} scrollLeft=${scrollLeft} 横向状态：${xStatus} 纵向状态：${yStatus}`)
}
</script>
