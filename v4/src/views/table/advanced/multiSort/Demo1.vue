<template>
  <div>
    <vxe-table
      border
      height="300"
      :column-config="{isHover: true}"
      :sort-config="{multiple: true, trigger: 'cell'}"
      :data="tableData"
      @sort-change="sortChangeEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role" sortable></vxe-column>
      <vxe-column field="age" title="Age" sortable></vxe-column>
      <vxe-column field="num" title="Num" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableEvents } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  age: number
  num: number
}

const tableData = ref<RowVO[]>([
  { name: '小红', role: '前端', age: 25, num: 7 },
  { name: '老王', role: '后端', age: 30, num: 6 },
  { name: '小红', role: '后端', age: 27, num: 1 },
  { name: '小明', role: '前端', age: 24, num: 2 },
  { name: '老徐', role: '测试', age: 23, num: 3 },
  { name: '老徐', role: '测试', age: 28, num: 3 },
  { name: '老王', role: '前端', age: 29, num: 3 },
  { name: '老王', role: '前端', age: 27, num: 3 },
  { name: '老徐', role: '测试', age: 26, num: 4 },
  { name: '小明', role: '前端', age: 23, num: 4 },
  { name: '小明', role: '前端', age: 28, num: 8 },
  { name: '小明', role: '前端', age: 28, num: 7 },
  { name: '小明', role: '测试', age: 25, num: 6 },
  { name: '小红', role: '后端', age: 22, num: 9 },
  { name: '小红', role: '后端', age: 22, num: 8 },
  { name: '老徐', role: '前端', age: 23, num: 5 },
  { name: '老徐', role: '测试', age: 26, num: 1 },
  { name: '小红', role: '前端', age: 23, num: 4 },
  { name: '小红', role: '前端', age: 29, num: 2 },
  { name: '小明', role: '测试', age: 27, num: 3 },
  { name: '老王', role: '前端', age: 24, num: 6 },
  { name: '老王', role: '后端', age: 22, num: 4 },
  { name: '老徐', role: '前端', age: 24, num: 8 },
  { name: '小明', role: '测试', age: 30, num: 7 },
  { name: '小明', role: '测试', age: 29, num: 7 }
])

const sortChangeEvent: VxeTableEvents.SortChange = ({ sortList }) => {
  console.info(sortList.map((item) => `${item.field},${item.order}`).join('; '))
}
</script>
