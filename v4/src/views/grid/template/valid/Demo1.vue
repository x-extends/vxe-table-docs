<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-button status="primary" @click="validEvent">校验</vxe-button>
      </template>

      <template #num_valid="{ content }">
        <span style="color: blue;">
          <vxe-icon name="warning-circle-fill"></vxe-icon>
          <span>错误：{{ content }}</span>
        </span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number | null
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    mode: 'cell',
    trigger: 'click'
  },
  editRules: {
    sex: [
      { required: true, message: '必须填写' }
    ],
    num: [
      { required: true, message: '必须填写' }
    ]
  },
  toolbarConfig: {
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
    { field: 'num', title: 'Number', editRender: { name: 'input' }, slots: { valid: 'num_valid' } },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: null, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, num: 0, address: 'Shanghai' }
  ]
})

const validEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.validate(true)
  }
}
</script>
