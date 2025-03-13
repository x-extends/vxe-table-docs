<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>
    <vxe-table
      id="myCustomUpdate"
      ref="tableRef"
      :column-config="columnConfig"
      :custom-config="customConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeTablePropTypes, VxeTableDefines, VxeToolbarInstance, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const toolbarRef = ref<VxeToolbarInstance>()
const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

// 模拟保存接口
const saveCustomSetting = (storeData: VxeTableDefines.CustomStoreData) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log(storeData)
      VxeUI.modal.message({
        status: 'success',
        content: '保存成功'
      })
      resolve()
    }, 200)
  })
}

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  resizable: true
})

const customConfig = reactive<VxeTablePropTypes.CustomConfig>({
  storage: true,
  updateStore ({ storeData }) {
    // 模拟异步，实现服务端保存
    return saveCustomSetting(storeData)
  }
})

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
