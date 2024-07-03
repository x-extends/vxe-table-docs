<template>
  <div>
    <vxe-table
      border
      height="300"
      :sort-config="sortConfig"
      :data="tableData"
      @sort-change="sortChangeEvent">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role" sortable></vxe-column>
      <vxe-column field="num" title="Num" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  num: number
}

const sortConfig = ref<VxeTablePropTypes.SortConfig<RowVO>>({
  multiple: true,
  chronological: true
})

const tableData = ref<RowVO[]>([
  { name: '小红', role: '前端', num: 7 },
  { name: '老王', role: '后端', num: 6 },
  { name: '小红', role: '后端', num: 1 },
  { name: '小明', role: '前端', num: 2 },
  { name: '老徐', role: '测试', num: 3 },
  { name: '老王', role: '前端', num: 3 },
  { name: '老徐', role: '测试', num: 4 },
  { name: '小明', role: '前端', num: 4 },
  { name: '小明', role: '前端', num: 8 },
  { name: '小明', role: '测试', num: 6 },
  { name: '小红', role: '后端', num: 9 },
  { name: '老徐', role: '前端', num: 5 },
  { name: '老徐', role: '测试', num: 1 },
  { name: '小红', role: '前端', num: 4 },
  { name: '小红', role: '前端', num: 2 },
  { name: '小明', role: '测试', num: 3 },
  { name: '老王', role: '前端', num: 6 },
  { name: '老王', role: '后端', num: 4 },
  { name: '老徐', role: '前端', num: 8 },
  { name: '小明', role: '测试', num: 7 }
])

const sortChangeEvent: VxeTableEvents.SortChange<RowVO> = ({ sortList }) => {
  console.info(sortList.map((item) => `${item.field},${item.order}`).join('; '))
}
</script>
