<template>
  <div>
    显示图标按钮：<vxe-switch v-model="filterConfig.showIcon"></vxe-switch>

    <vxe-table
      border
      height="400"
      :filter-config="filterConfig"
      :floating-filter-config="floatingFilterConfig"
      :data="tableData">
      <vxe-column field="name" title="Name" :filter-render="nameFilterRender"></vxe-column>
      <vxe-column field="sex" title="Sex" :filter-render="sexFilterRender"></vxe-column>
      <vxe-column field="age" title="Age" :filter-render="ageFilterRender"></vxe-column>
      <vxe-column field="date" title="Date" :filter-render="dateFilterRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
}

const filterConfig = reactive<VxeTablePropTypes.FilterConfig<RowVO>>({
  showIcon: true
})

const floatingFilterConfig = reactive<VxeTablePropTypes.FloatingFilterConfig<RowVO>>({
  enabled: true
})

const nameFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'VxeInput',
  props: {
    clearable: true
  }
})

const sexFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'VxeSelect',
  props: {
    clearable: true
  },
  options: [
    { label: 'Man', value: 'Man' },
    { label: 'Woman', value: 'Woman' }
  ]
})

const ageFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'VxeNumberInput',
  props: {
    clearable: true
  }
})

const dateFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'VxeDatePicker',
  props: {
    clearable: true
  }
})

const tableData = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Woman', age: 28, date: '2025-10-01' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', age: 22, date: '2025-10-02' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Woman', age: 32, date: '2025-10-05' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Man', age: 54, date: '2025-10-14' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 44, date: '2025-09-01' },
  { id: 10006, name: 'Test6', role: 'Develop', sex: 'Woman', age: 24, date: '2025-08-15' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 52, date: '2025-11-12' },
  { id: 10008, name: 'Test8', role: 'PM', sex: 'Woman', age: 34, date: '2025-11-27' },
  { id: 10009, name: 'Test9', role: 'PM', sex: 'Man', age: 24, date: '2025-10-18' },
  { id: 100010, name: 'Test10', role: 'Develop', sex: 'Woman', age: 24, date: '2025-10-25' }
])
</script>
