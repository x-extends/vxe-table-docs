<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="300"
      :filter-config="{showIcon: false}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="名字">
        <vxe-column field="name" :filters="nameOptions" :filter-method="nameFilterMethod">
          <template #header="{ column }">
            <vxe-input type="text" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @keydown.enter="confirmFilterEvent(option)" placeholder="按回车筛选"></vxe-input>
          </template>
        </vxe-column>
      </vxe-colgroup>
      <vxe-column field="date" title="时间"></vxe-column>
      <vxe-column field="sex" title="性别"></vxe-column>
      <vxe-column field="address" title="地址"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
  amount: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const nameOptions = ref<VxeColumnPropTypes.Filters>([
  { data: '' }
])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test10', role: 'Develop', sex: '0', date: '2021-11-14', age: 28, amount: 888, address: 'test abc' },
  { id: 10002, name: 'Test12', role: 'Test', sex: '1', date: '2021-01-20', age: 22, amount: 666, address: 'Guangzhou' },
  { id: 10003, name: 'Test34', role: 'PM', sex: '1', date: '2020-09-17', age: 32, amount: 89, address: 'Shanghai' },
  { id: 10004, name: 'Test24', role: 'Designer', sex: '0', date: '2020-10-25', age: 23, amount: 1000, address: 'test abc' },
  { id: 10005, name: 'Test15', role: 'Develop', sex: '0', date: '2020-12-12', age: 30, amount: 999, address: 'Shanghai' },
  { id: 10006, name: 'Test36', role: 'Designer', sex: '0', date: '2020-08-21', age: 21, amount: 998, address: 'test abc' },
  { id: 10007, name: 'Test27', role: 'Test', sex: '1', date: '2021-01-01', age: 29, amount: 2000, address: 'test abc' },
  { id: 10008, name: 'Test48', role: 'Develop', sex: '1', date: '2021-02-06', age: 35, amount: 999, address: 'test abc' }
])

const nameFilterMethod: VxeColumnPropTypes.FilterMethod<RowVO> = ({ option, row, column }) => {
  if (option.data) {
    return XEUtils.toValueString(row[column.field]).toLowerCase().indexOf(option.data) > -1
  }
  return true
}

const confirmFilterEvent = (option) => {
  const $table = tableRef.value
  if ($table) {
    // 设置为选中状态
    option.checked = true
    // 修改条件之后，需要手动调用 updateData 处理表格数据
    $table.updateData()
  }
}
</script>
