<template>
  <div>
    <vxe-table
      border
      show-overflow
      :padding="false"
      :cell-config="{verticalAlign: 'top'}"
      :row-config="{height: 100}"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column field="name" title="Name" :edit-render="{autoFocus: 'textarea'}">
        <template #default="{ row }">
          <div class="full-cell-wrapper">
            <span>{{ row.name }}</span>
          </div>
        </template>
        <template #edit="{ row }">
          <div class="full-edit-wrapper">
            <vxe-textarea v-model="row.name" class="full-edit-component"></vxe-textarea>
          </div>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{autoFocus: 'textarea'}">
        <template #default="{ row }">
          <div class="full-cell-wrapper">
            <span>{{ row.address }}</span>
          </div>
        </template>
        <template #edit="{ row }">
          <div class="full-edit-wrapper">
            <vxe-textarea v-model="row.address" class="full-edit-component"></vxe-textarea>
          </div>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const editConfig = ref<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell'
})
</script>

<style lang="scss" scoped>
.full-cell-wrapper,
.full-edit-wrapper,
.full-edit-component {
  height: 100%;
  width: 100%;
}
.full-cell-wrapper {
  padding: 8px;
}
.full-edit-wrapper {
  padding: 1px;
}
</style>
