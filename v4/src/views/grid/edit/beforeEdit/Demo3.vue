<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents">
      <template #name_edit="{ row, column }">
        <vxe-input v-model="row[column.field]" :disabled="disabledName"></vxe-input>
      </template>

      <template #sex_edit="{ row, column }">
        <vxe-input v-model="row[column.field]" :disabled="disabledName"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridListeners, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const disabledName = ref(false)

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  loading: false,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' }, slots: { edit: 'name_edit' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' }, slots: { edit: 'sex_edit' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners = {
  cellClick ({ row, column }) {
    const $grid = gridRef.value
    if ($grid) {
      const editInfo = $grid.getEditCell()
      // 如果是已经是编辑状态
      if (editInfo && editInfo.row === row && editInfo.column.field === column.field) {
        return
      }
    }
    // 模拟异步判断
    gridOptions.loading = true
    disabledName.value = true
    setTimeout(() => {
      disabledName.value = row.name === 'Test2'
      gridOptions.loading = false
    }, 300)
  }
}
</script>
