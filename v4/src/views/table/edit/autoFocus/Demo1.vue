<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="不会自动聚焦" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="设置true自动聚焦" :edit-render="{autoFocus: true}">
        <template #edit="{ row }">
          <vxe-input v-model="row.role"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="设置css选择器自动聚焦" :edit-render="{autoFocus: '.my-input .vxe-input--inner'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.sex" class="my-input"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="设置css选择器自动聚焦" :edit-render="{autoFocus: '.my-input'}">
        <template #edit="{ row }">
          <input v-model="row.age" class="my-input" type="text" style="width: 100%">
        </template>
      </vxe-column>
      <vxe-column field="address" title="设置css选择器自动聚焦" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <input v-model="row.address" type="text" style="width: 100%">
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
