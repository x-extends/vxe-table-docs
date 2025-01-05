<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents">
      <template #radioHeader>
        <vxe-button mode="text" @click="clearRadioRowEvent" :disabled="!selectRow">取消</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()
const selectRow = ref<RowVO | null>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 300,
  rowConfig: {
    isHover: true
  },
  radioConfig: {
    labelField: 'name',
    highlight: true
  },
  columns: [
    { type: 'radio', title: 'Name', width: 300, slots: { header: 'radioHeader' } },
    { field: 'id', title: 'ID' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners = {
  radioChange ({ row }) {
    selectRow.value = row
    console.log('单选事件')
  }
}

const clearRadioRowEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    selectRow.value = null
    $grid.clearRadioRow()
  }
}
</script>
