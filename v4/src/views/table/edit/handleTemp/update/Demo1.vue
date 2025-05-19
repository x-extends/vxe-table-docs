<template>
  <div>
    <vxe-button status="success" @click="getUpdateEvent">获取已修改数据</vxe-button>
    <vxe-button status="success" @click="saveAllRowEvent">全部保存</vxe-button>
    <vxe-table
      border
      show-overflow
      keep-source
      height="400"
      ref="tableRef"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="action" title="操作" width="200">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" @click="updateRow1(row)">修改1</vxe-button>
          <vxe-button mode="text" status="primary" @click="updateRow2(row)">修改2</vxe-button>
          <vxe-button mode="text" status="success" @click="saveRow(row)">保存</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const editConfig = reactive<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell',
  showStatus: true
})

const loadList = () => {
  // 模拟后端接口
  loading.value = true
  setTimeout(() => {
    tableData.value = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]
    loading.value = false
  }, 200)
}

const updateRow1 = (row: RowVO) => {
  row.name = `Name_${new Date().getTime()}`
}

const updateRow2 = (row: RowVO) => {
  row.age++
}

const saveRow = (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    if ($table.isUpdateByRow(row)) {
      console.log('保存数据', [row])
      $table.reloadRow(row, {})
      VxeUI.modal.message({
        content: '保存成功',
        status: 'success'
      })
    } else {
      VxeUI.modal.message({
        content: '数据未改动',
        status: 'warning'
      })
    }
  }
}

const saveAllRowEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    if (updateRecords.length > 0) {
      console.log('保存数据', updateRecords)
      loadList()
      VxeUI.modal.message({
        content: '保存成功',
        status: 'success'
      })
    } else {
      VxeUI.modal.message({
        content: '数据未改动',
        status: 'warning'
      })
    }
  }
}

const getUpdateEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    VxeUI.modal.alert(`修改：${updateRecords.length} 行`)
  }
}

loadList()
</script>
