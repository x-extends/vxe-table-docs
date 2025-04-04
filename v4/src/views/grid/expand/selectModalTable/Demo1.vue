<template>
  <div>
    <vxe-grid ref="mainGridRef" v-bind="gridOptions">
      <template #expand_content="{ row }">
        <div class="expand-wrapper">
          <vxe-grid v-bind="childGridOptions" :data="row.childList"></vxe-grid>
        </div>
      </template>

      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="selectSubList(row)">选择（{{ row.childList ? row.childList.length : 0 }}）</vxe-button>
      </template>
    </vxe-grid>

    <vxe-modal
      resize
      show-footer
      show-confirm-button
      show-cancel-button
      v-model="showPopup"
      title="请选择"
      height="400"
      width="800"
      @confirm="confirmSubEvent">
      <vxe-grid ref="subGridRef" v-bind="modalGridOptions"></vxe-grid>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  childList?: RowVO[]
}

const mainGridRef = ref<VxeGridInstance<RowVO>>()
const subGridRef = ref<VxeGridInstance<RowVO>>()

const showPopup = ref(false)
const selectRow = ref<RowVO | null>(null)

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 70 },
    { type: 'expand', width: 60, slots: { content: 'expand_content' } },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'action', title: '操作', width: 100, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', childList: [] },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', childList: [] },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', childList: [] },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', childList: [] }
  ]
})

const childGridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 200,
  columns: [
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ]
})

const modalGridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: '100%',
  columns: [
    { type: 'checkbox', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', childList: [] },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 46, address: 'Shanghai', childList: [] },
    { id: 10006, name: 'Test6', role: 'PM', sex: 'Man', age: 36, address: 'Shanghai', childList: [] }
  ]
})

const selectSubList = (row: RowVO) => {
  showPopup.value = true
  selectRow.value = row
}

const confirmSubEvent = () => {
  const row = selectRow.value
  if (row) {
    const $subGrid = subGridRef.value
    if ($subGrid) {
      const selectRecords = $subGrid.getCheckboxRecords()
      row.childList = selectRecords
      VxeUI.modal.message({
        content: `已选择 ${selectRecords.length} 条`,
        status: 'success'
      })
      $subGrid.clearCheckboxRow()
    }
    // 选择后自动展开子表
    const $mainGrid = mainGridRef.value
    if ($mainGrid) {
      $mainGrid.setRowExpand(row, true)
    }
  }
}
</script>

<style lang="scss" scoped>
.expand-wrapper {
  padding: 16px;
}
</style>
