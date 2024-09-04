<template>
  <div>
    <vxe-table border :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" width="160"></vxe-column>
      <vxe-column field="sex" title="Sex" :filters="sexOptions" :filter-method="sexFilterMethod">
        <template #filter="{ $panel, column }">
          <input class="my-filter" type="type" v-model="option.data" v-for="(option, index) in column.filters" :key="index" @input="changeFilterEvent($event, option, $panel)">
        </template>
      </vxe-column>
      <vxe-column field="num" title="Number"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string,
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
])

const sexOptions = ref([
  { data: '' }
])

const sexFilterMethod: VxeColumnPropTypes.FilterMethod = ({ option, cellValue }) => {
  return option.data === cellValue
}

const changeFilterEvent = (event: any, option: any, $panel: any) => {
  $panel.changeOption(event, !!option.data, option)
}
</script>
