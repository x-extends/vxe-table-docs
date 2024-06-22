<template>
  <div>
    <vxe-table
      border
      class="my-sort"
      ref="tableRef"
      height="300"
      :data="tableData"
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{resizable: true}"
      :sort-config="{showIcon: false}"
      @header-cell-click="headerCellClickEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" sortable :filters="nameOptions" :filter-method="filterNameMethod">
        <template #header="{ column }">
          <span>{{ column.title }}</span>
          <span class="custom-sort" :class="{'is-order': column.order}">
            <i :class="[column.order ? `vxe-icon-sort-alpha-${column.order}` : 'vxe-icon-sort']"></i>
          </span>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="age" title="Age" sortable>
        <template #header="{ column }">
          <span>{{ column.title }}</span>
          <span class="custom-sort" :class="{'is-order': column.order}">
            <i :class="[column.order ? `vxe-icon-sort-numeric-${column.order}` : 'vxe-icon-sort']"></i>
          </span>
        </template>
      </vxe-column>
      <vxe-column field="amount" title="Amount" :formatter="formatAmount" sortable>
        <template #header="{ column }">
          <span>{{ column.title }}</span>
          <span class="custom-sort" :class="{'is-order': column.order}">
            <i :class="[column.order ? `vxe-icon-sort-numeric-${column.order}` : 'vxe-icon-sort']"></i>
          </span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 26, address: 'test abc' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 32, address: 'Shanghai' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Beijing' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shenzhen' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 42, address: 'test abc' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])

const nameOptions = ref([
  { label: 'id大于10', value: 10 },
  { label: 'id大于40', value: 40 }
])

const headerCellClickEvent: VxeTableEvents.HeaderCellClick<RowVO> = ({ column, triggerResizable, triggerSort, triggerFilter }) => {
  const $table = tableRef.value
  if ($table) {
    // 如果触发了列的其他功能按钮
    if (column.sortable && !(triggerResizable || triggerSort || triggerFilter)) {
      if (column.order === 'desc') {
        $table.clearSort()
      } else if (column.order === 'asc') {
        $table.sort(column.field, 'desc')
      } else {
        $table.sort(column.field, 'asc')
      }
    }
  }
}

const formatAmount: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  return XEUtils.commafy(XEUtils.toNumber(cellValue))
}

const filterNameMethod: VxeColumnPropTypes.FilterMethod<RowVO> = ({ value, row }) => {
  return row.id >= value
}
</script>

<style>
.my-sort .custom-sort {
  padding: 0 4px;
}
.my-sort .custom-sort.is-order {
  color: #409eff;
}
</style>
