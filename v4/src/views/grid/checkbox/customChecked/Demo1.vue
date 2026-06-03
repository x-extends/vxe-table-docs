<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #checked1_header>
        <vxe-checkbox v-model="isAllChecked1" :indeterminate="isIndeterminate1" @change="changeAll1Event"></vxe-checkbox>
      </template>
      <template #checked1_default="{ row }">
        <vxe-checkbox v-model="row.checked1" @change="updateChecked1State"></vxe-checkbox>
      </template>

      <template #checked2_header>
        <vxe-checkbox v-model="isAllChecked2" :indeterminate="isIndeterminate2" @change="changeAll2Event"></vxe-checkbox>
      </template>
      <template #checked2_default="{ row }">
        <vxe-checkbox v-model="row.checked2" @change="updateChecked2State"></vxe-checkbox>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  checked1: boolean
  checked2: boolean
}

// 全选状态（true: 全选, false: 全不选）
const isAllChecked1 = ref(false)
const isAllChecked2 = ref(false)

// 半选状态（true: 部分选中, false: 非部分选中）
const isIndeterminate1 = ref(false)
const isIndeterminate2 = ref(false)

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 500,
  rowConfig: {
    keyField: 'id',
    isHover: true
  },
  columns: [
    { field: 'checked1', title: '', width: 60, slots: { header: 'checked1_header', default: 'checked1_default' } },
    { field: 'name', title: 'Name' },
    { field: 'checked2', title: '', width: 60, slots: { header: 'checked2_header', default: 'checked2_default' } },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', checked1: false, checked2: false },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', checked1: false, checked2: false },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', checked1: false, checked2: false },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', checked1: false, checked2: false },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', checked1: false, checked2: false },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', checked1: false, checked2: false },
    { id: 10007, name: 'Test7', role: 'PM', sex: 'Women', age: 38, address: 'Shanghai', checked1: false, checked2: false },
    { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 24, address: 'test abc', checked1: false, checked2: false },
    { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 35, address: 'Shanghai', checked1: false, checked2: false },
    { id: 10010, name: 'Test10', role: 'Develop', sex: 'Women', age: 31, address: 'Shanghai', checked1: false, checked2: false },
    { id: 10011, name: 'Test11', role: 'PM', sex: 'Women', age: 45, address: 'Shanghai', checked1: false, checked2: false },
    { id: 10012, name: 'Test12', role: 'Test', sex: 'Man', age: 39, address: 'Guangzhou', checked1: false, checked2: false },
    { id: 10013, name: 'Test13', role: 'Develop', sex: 'Women', age: 38, address: 'Shanghai', checked1: false, checked2: false }
  ]
})

// 更新第一列复选框的全选和半选状态
const updateChecked1State = () => {
  const { data = [] } = gridOptions
  const total = data.length
  if (total === 0) {
    isAllChecked1.value = false
    isIndeterminate1.value = false
    return
  }

  const checkedCount = data.filter(row => row.checked1).length
  isAllChecked1.value = checkedCount === total
  isIndeterminate1.value = checkedCount > 0 && checkedCount < total
}

// 更新第二列复选框的全选和半选状态
const updateChecked2State = () => {
  const { data = [] } = gridOptions
  const total = data.length
  if (total === 0) {
    isAllChecked2.value = false
    isIndeterminate2.value = false
    return
  }

  const checkedCount = data.filter(row => row.checked2).length
  isAllChecked2.value = checkedCount === total
  isIndeterminate2.value = checkedCount > 0 && checkedCount < total
}

// 全选/取消全选第一列
const changeAll1Event = () => {
  const { data = [] } = gridOptions
  const newValue = isAllChecked1.value
  data.forEach(row => {
    row.checked1 = newValue
  })
  // 批量更新后手动更新一次状态（避免循环中频繁触发，直接最后同步状态）
  updateChecked1State()
}

// 全选/取消全选第二列
const changeAll2Event = () => {
  const { data = [] } = gridOptions
  const newValue = isAllChecked2.value
  data.forEach(row => {
    row.checked2 = newValue
  })
  updateChecked2State()
}

updateChecked1State()
updateChecked2State()
</script>
