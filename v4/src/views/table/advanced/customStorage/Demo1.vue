<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom>
      <template #buttons>
        <vxe-button @click="fixedColNameEvent">设置第一列固定</vxe-button>
        <vxe-button @click="clearFixedColNameEvent">取消第一列固定</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      ref="tableRef"
      height="400"
      id="toolbar_demo3"
      :custom-config="{storage: true}"
      :data="tableData">
      <vxe-column field="name" title="Name" width="180"></vxe-column>
      <vxe-column field="nickname" title="Sex" width="240"></vxe-column>
      <vxe-column field="role" title="Role" width="200"></vxe-column>
      <vxe-column field="sex" title="Sex" width="120"></vxe-column>
      <vxe-column field="age" title="Age" width="180"></vxe-column>
      <vxe-column field="num" title="Num1" width="160"></vxe-column>
      <vxe-column field="num2" title="Num2" width="120"></vxe-column>
      <vxe-column field="num3" title="Num3" width="120"></vxe-column>
      <vxe-column field="describe" title="Describe" width="260"></vxe-column>
      <vxe-column field="address" title="Address" width="300"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTableInstance, VxeToolbarInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  num: number
  num2: number
  num3: number
  address: string
  describe: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()
const toolbarRef = ref<VxeToolbarInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'werfdg', role: 'Develop', sex: 'Man', age: 81, num: 43, num2: 35, num3: 39, address: 'test abc', describe: 'test 76' },
  { id: 10002, name: 'Test2', nickname: '6576', role: 'Test', sex: 'Women', age: 22, num: 41, num2: 87, num3: 41, address: 'Guangzhou', describe: '456 abc' },
  { id: 10003, name: 'Test3', nickname: '436', role: 'PM', sex: 'Man', age: 32, num: 47, num2: 66, num3: 57, address: 'Shanghai', describe: 'hj 45' },
  { id: 10004, name: 'Test4', nickname: '657', role: 'Designer', sex: 'Women', age: 23, num: 48, num2: 12, num3: 72, address: 'test abc', describe: '456 234' },
  { id: 10005, name: 'Test5', nickname: '324', role: 'Develop', sex: 'Women', age: 30, num: 51, num2: 67, num3: 55, address: 'Shanghai', describe: '435 abc' },
  { id: 10006, name: 'Test6', nickname: '7687', role: 'Designer', sex: 'Women', age: 21, num: 38, num2: 16, num3: 28, address: 'test abc', describe: 'tes435t 56' },
  { id: 10007, name: 'Test7', nickname: '21343', role: 'Test', sex: 'Man', age: 29, num: 28, num2: 69, num3: 89, address: 'test abc', describe: '435 abc' },
  { id: 10008, name: 'Test8', nickname: 'gfhi', role: 'Develop', sex: 'Man', age: 35, num: 45, num2: 22, num3: 90, address: 'test abc', describe: 'te435st 435' }
])

const fixedColNameEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setColumnFixed('name', 'left')
  }
}

const clearFixedColNameEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearColumnFixed('name')
  }
}

nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
