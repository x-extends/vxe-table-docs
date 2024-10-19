<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="hobby1" title="只读" width="300">
        <template #default="{ row }">
          <vxe-radio-group v-model="row.hobby1" :options="hobbyOptions" disabled></vxe-radio-group>
        </template>
      </vxe-column>
      <vxe-column field="hobby2" title="编辑" width="300">
        <template #default="{ row }">
          <vxe-radio-group v-model="row.hobby2" :options="hobbyOptions"></vxe-radio-group>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  hobby1: string
  hobby2: string
}

const hobbyOptions = ref([
  { label: '爬山', value: '1' },
  { label: '游泳', value: '2' },
  { label: '干饭', value: '3' }
])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', hobby1: '', hobby2: '3' },
  { id: 10002, name: 'Test2', role: 'Test', hobby1: '2', hobby2: '1' },
  { id: 10003, name: 'Test3', role: 'PM', hobby1: '1', hobby2: '' }
])
</script>
