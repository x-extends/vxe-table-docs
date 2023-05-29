<template>
  <div>
    <vxe-table
      border
      :row-config="{isHover: true}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="基本信息">
        <vxe-column field="name" title="Name" sortable :filters="[{label: 'id大于10003', value: 10002}, {label: 'id大于10003', value: 10003, checked: true},{label: 'id大于10004', value: 10004},{label: 'id大于10005', value: 10005},{label: 'id大于10006', value: 10006},{label: 'id大于10007', value: 10007}]" :filter-method="filterNameMethod"></vxe-column>
        <vxe-column field="sex" title="Sex" sortable :filters="[{label: 'Man', value: '1'}, {label: 'Woman', value: '0'}]"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="其他">
        <vxe-colgroup title="详细信息">
          <vxe-column field="age" title="Age" :filters="[{ data: '30' }]" :filter-method="filterAgeMethod">
            <template #filter="{ $panel, column }">
              <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)">
            </template>
          </vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-column field="time" title="Time" sortable :filters="[{label: '本周', value: '1'}, {label: '上周', value: '2'}]"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 24, address: 'Shanghai' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 32, address: 'Shenzhen' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 28, address: 'Shanghai' }
])

const filterNameMethod: VxeColumnPropTypes.FilterMethod<RowVO> = ({ value, row }) => {
  return row.id >= value
}

const filterAgeMethod: VxeColumnPropTypes.FilterMethod<RowVO> = ({ option, row }) => {
  return row.age === Number(option.data)
}
</script>
