<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #checkbox_header="{ checked, indeterminate }">
        <span class="custom-checkbox" @click.stop="toggleAllCheckboxEvent">
          <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
          <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
          <i v-else class="vxe-icon-checkbox-unchecked"></i>
        </span>
      </template>

      <template #checkbox_cell="{ row, checked, indeterminate }">
        <span class="custom-checkbox" @click.stop="toggleCheckboxEvent(row)">
          <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
          <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
          <i v-else class="vxe-icon-checkbox-unchecked"></i>
        </span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const gridRef = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'checkbox', width: 60, slots: { header: 'checkbox_header', checkbox: 'checkbox_cell' } },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})

const toggleAllCheckboxEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.toggleAllCheckboxRow()
  }
}

const toggleCheckboxEvent = (row) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.toggleCheckboxRow(row)
  }
}
</script>
