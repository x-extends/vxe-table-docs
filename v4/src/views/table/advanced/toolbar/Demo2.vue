<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="300"
      :print-config="{}"
      :loading="loading"
      :data="tableData"
      @custom="toolbarCustomEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="app.body.label.name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="app.body.label.sex"></vxe-column>
      <vxe-column field="age" title="app.body.label.age"></vxe-column>
      <vxe-column field="rate" title="Rate"></vxe-column>
    </vxe-table>

    <div>
      <p>工具栏位置随意放</p>
      <div>
        <vxe-toolbar
          custom
          print
          ref="toolbarRef"
          :buttons="toolbarButtons"
          :refresh="{query: findList}">
        </vxe-toolbar>
      </div>
      <p>工具栏位置随意放</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VXETable, VxeTableInstance, VxeToolbarInstance, VxeTableEvents, VxeToolbarPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()
const toolbarRef = ref<VxeToolbarInstance>()

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const toolbarButtons = ref<VxeToolbarPropTypes.Buttons>([
  { code: 'btn1', name: 'app.body.button.insert' },
  {
    name: '下拉按钮',
    dropdowns: [
      { name: '按钮111', code: 'btn2' },
      { name: '按钮222', code: 'btn3' }
    ]
  }
])

const findList = () => {
  loading.value = true
  return new Promise(resolve => {
    setTimeout(() => {
      tableData.value = [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ]
      loading.value = false
      resolve([])
    }, 300)
  })
}

const toolbarCustomEvent: VxeTableEvents.Custom<RowVO> = (params) => {
  const $table = tableRef.value
  if ($table) {
    const visibleColumn = $table.getColumns()
    switch (params.type) {
      case 'confirm': {
        VXETable.modal.message({ content: `点击了确认，显示为 ${visibleColumn.length} 列`, status: 'info' })
        break
      }
      case 'reset': {
        VXETable.modal.message({ content: `点击了重置，显示为 ${visibleColumn.length} 列`, status: 'info' })
        break
      }
      case 'close': {
        VXETable.modal.message({ content: `关闭了面板，显示为 ${visibleColumn.length} 列`, status: 'info' })
        break
      }
    }
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

findList()
</script>
