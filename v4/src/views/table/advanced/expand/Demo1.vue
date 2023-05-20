<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="toggleSeqFixed">切换第一固定列</vxe-button>
        <vxe-button @click="toggleExpandFixed">切换第二固定列</vxe-button>
        <vxe-button @click="toggleAgeFixed">切换第五固定列</vxe-button>
        <vxe-button @click="expandEvent1">切换第二行展开</vxe-button>
        <vxe-button @click="expandEvent2">设置第三、四行展开</vxe-button>
        <vxe-button @click="expandAllEvent">设置所有行展开</vxe-button>
        <vxe-button @click="clearExpandEvent">关闭所有行展开</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      ref="xTable1"
      border
      auto-resize
      :data="tableData"
      @toggle-row-expand="toggleExpandChangeEvent">
      <vxe-column type="seq" width="60" :fixed="seqFixed"></vxe-column>
      <vxe-column type="expand" width="80" :fixed="expandFixed">
        <template #content="{ row, rowIndex }">
          <div v-if="rowIndex === 1" class="expand-wrapper">
            <vxe-table
              border
              :data="otherList">
              <vxe-column field="role" title="Role"></vxe-column>
              <vxe-column field="address" title="Address"></vxe-column>
            </vxe-table>
          </div>
          <div v-else class="expand-wrapper">
            <ul>
              <li>
                <span>ID：</span>
                <span>{{ row.id }}</span>
              </li>
              <li>
                <span>Name：</span>
                <span>{{ row.name }}</span>
              </li>
              <li>
                <span>UpdateTime：</span>
                <span>{{ row.age }}</span>
              </li>
              <li>
                <span>CreateTime：</span>
                <span>{{ row.address }}</span>
              </li>
            </ul>
          </div>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name" width="400"></vxe-column>
      <vxe-column field="sex" title="Sex" width="400"></vxe-column>
      <vxe-column field="age" title="Age" width="400" :fixed="ageFixed"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTableInstance, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const xTable1 = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc test abc test abc test abc test abc test abc test abc test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou test abc test abc test abc test abc test abc test abc test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' }
])

const otherList = ref([
  { id: 50001, name: 'Test5001', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 50002, name: 'Test5002', role: 'Test', sex: 'Women', age: 22, address: 'test abc test abc test abc test abc test abc' }
])

const seqFixed = ref<VxeColumnPropTypes.Fixed>()
const expandFixed = ref<VxeColumnPropTypes.Fixed>()
const ageFixed = ref<VxeColumnPropTypes.Fixed>()

const toggleSeqFixed = () => {
  seqFixed.value = seqFixed.value ? null : 'left'
  nextTick(() => {
    const $table = xTable1.value
    if ($table) {
      $table.refreshColumn()
    }
  })
}

const toggleExpandFixed = () => {
  expandFixed.value = expandFixed.value ? null : 'left'
  nextTick(() => {
    const $table = xTable1.value
    if ($table) {
      $table.refreshColumn()
    }
  })
}

const toggleAgeFixed = () => {
  ageFixed.value = ageFixed.value ? null : 'right'
  nextTick(() => {
    const $table = xTable1.value
    if ($table) {
      $table.refreshColumn()
    }
  })
}

const expandEvent1 = () => {
  const $table = xTable1.value
  if ($table) {
    $table.toggleRowExpand(tableData.value[1])
  }
}

const expandEvent2 = () => {
  const $table = xTable1.value
  if ($table) {
    $table.setRowExpand([tableData.value[2], tableData.value[3]], true)
  }
}

const expandAllEvent = () => {
  const $table = xTable1.value
  if ($table) {
    $table.setAllRowExpand(true)
  }
}

const clearExpandEvent = () => {
  const $table = xTable1.value
  if ($table) {
    $table.clearRowExpand()
  }
}

const toggleExpandChangeEvent: VxeTableEvents.ToggleRowExpand<RowVO> = ({ expanded }) => {
  console.log('行展开事件' + expanded)
}
</script>

<style lang="scss" scoped>
.expand-wrapper {
  padding: 20px;
}
</style>
