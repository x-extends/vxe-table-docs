<template>
  <div>
    <vxe-button status="primary" @click="addColumn()">增加列</vxe-button>

    <vxe-grid v-bind="gridOptions">
      <template #attrHeader="{ column }">
        <span>{{ column.title }}</span>
        <vxe-button mode="text" status="error" @click="removeColumn(column.field)">删除</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
}

const gridOptions = reactive<VxeGridProps<RowVO> & {
  columns: VxeGridPropTypes.Columns
}>({
  border: true,
  loading: false,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', attr1: '', attr2: '', attr3: '', attr4: '', attr5: '' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', attr1: '', attr2: '', attr3: '', attr4: '', attr5: '' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', attr1: '', attr2: '', attr3: '', attr4: '', attr5: '' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', attr1: '', attr2: '', attr3: '', attr4: '', attr5: '' }
  ]
})

let keyFlag = 1

const addColumn = () => {
  gridOptions.columns.push({
    field: `attr_${keyFlag}`,
    title: `列_${keyFlag}`,
    width: 140,
    slots: {
      header: 'attrHeader'
    }
  })
  keyFlag++
}

const removeColumn = (field: string) => {
  gridOptions.columns = gridOptions.columns.filter(item => item.field !== field)
}
</script>
