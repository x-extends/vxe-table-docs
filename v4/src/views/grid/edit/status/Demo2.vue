<template>
  <div>
    <div>
      <vxe-button status="primary" @click="saveAllEvent">保存</vxe-button>
    </div>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button status="primary" mode="text" @click="setOtherField(row)">修改nickname</vxe-button>
        <vxe-button v-if="hasUpdateStatus(row)" status="success" mode="text" @click="saveRowEvent(row)" :loading="row.loading">局部保存</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  sex2: string[]
  num1: number
  age: number
  address: string
  date12: string
  date13: string
  loading: boolean
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  showOverflow: true,
  keepSource: true,
  height: 500,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  editDirtyConfig: {
    extraFields: ['nickname']
  },
  editRules: {
    name: [
      { required: true, message: '必须填写' }
    ],
    role: [
      { required: true, message: '必须填写' }
    ]
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', sortable: true, editRender: { name: 'VxeInput' } },
    { field: 'role', title: 'Role', sortable: true, editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
    { field: 'date', title: 'Date', editRender: { name: 'VxeDatePicker' } },
    { field: 'action', title: '操作', width: 220, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '', loading: false },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20', loading: false },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '', loading: false },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04', loading: false }
  ]
})

const setOtherField = (row: RowVO) => {
  row.nickname = 'xxx' + Date.now()
}

const hasUpdateStatus = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    return $grid.isUpdateByRow(row)
  }
}

const saveRowEvent = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    if ($grid.isUpdateByRow(row)) {
      row.loading = true
      // 模拟异步
      setTimeout(() => {
        row.loading = false
        // 保存完成后将行恢复到初始状态
        $grid.reloadRow(row, {})
        VxeUI.modal.message({ content: '保存成功！', status: 'success' })
      }, 300)
    } else {
      VxeUI.modal.message({ content: '数据未改动！', status: 'info' })
    }
  }
}

const saveAllEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
    VxeUI.modal.alert(`新增：${insertRecords.length} 更新：${updateRecords.length} 删除：${removeRecords.length}`)
    console.log(JSON.stringify(gridOptions.data))
    gridOptions.loading = true
    // 默认异步
    setTimeout(() => {
      gridOptions.loading = false
      // 保存完成后重新刷新数据
      gridOptions.data = [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '', loading: false },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20', loading: false },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '', loading: false },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04', loading: false }
      ]
    }, 300)
  }
}
</script>
