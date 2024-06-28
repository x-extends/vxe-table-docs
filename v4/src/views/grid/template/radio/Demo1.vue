<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #radio_cell="{ row, checked }">
        <span class="custom-radio" @click.stop="setSelectRow(row)">
          <i v-if="checked" class="vxe-icon-success-circle-fill"></i>
          <i v-else class="vxe-icon-success-circle"></i>
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

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'radio', width: 60, slots: { radio: 'radio_cell' } },
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

const setSelectRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setRadioRow(row)
  }
}
</script>
