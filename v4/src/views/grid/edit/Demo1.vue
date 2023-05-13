<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions" v-on="gridEvents">
      <template #operate="{ row }">
        <template v-if="hasActiveEditRow(row)">
          <vxe-button content="取消" @click="clearRowEvent"></vxe-button>
          <vxe-button status="primary" content="保存" @click="saveRowEvent(row)"></vxe-button>
        </template>
        <template v-else>
          <vxe-button content="编辑" @click="editRowEvent(row)"></vxe-button>
        </template>
        <vxe-button status="danger" content="删除" @click="removeRowEvent(row)"></vxe-button>
      </template>

      <template #name_edit="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #nickname_edit="{ row }">
        <vxe-input v-model="row.nickname"></vxe-input>
      </template>
      <template #sex_default="{ row }">
        <span>{{ formatSex(row.sex) }}</span>
      </template>
      <template #sex_edit="{ row }">
        <vxe-select v-model="row.sex" transfer>
          <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
        </vxe-select>
      </template>
      <template #role_edit="{ row }">
        <vxe-input v-model="row.role"></vxe-input>
      </template>
      <template #describe_edit="{ row }">
        <vxe-input v-model="row.describe"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VXETable, VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const xGrid = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  keepSource: true,
  showOverflow: true,
  height: 530,
  loading: false,
  columnConfig: {
    resizable: true
  },
  pagerConfig: {
    total: 0,
    currentPage: 1,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100, 200, 500]
  },
  editConfig: {
    trigger: 'manual',
    mode: 'row',
    showStatus: true
  },
  columns: [
    { type: 'seq', width: 60 },
    { type: 'checkbox', width: 50 },
    { field: 'name', title: 'Name', editRender: { autofocus: '.vxe-input--inner' }, slots: { edit: 'name_edit' } },
    { field: 'nickname', title: 'Nickname', editRender: { autofocus: '.vxe-input--inner' }, slots: { edit: 'nickname_edit' } },
    { field: 'sex', title: 'Sex', editRender: {}, slots: { default: 'sex_default', edit: 'sex_edit' } },
    { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },
    { field: 'describe', title: 'Describe', showOverflow: true, editRender: {}, slots: { edit: 'describe_edit' } },
    { title: '操作', width: 300, slots: { default: 'operate' } }
  ],
  data: []
})

const sexList1 = ref([
  { value: '1', label: '男' },
  { value: '0', label: '女' }
])

const findList = () => {
  gridOptions.loading = true
  setTimeout(() => {
    gridOptions.loading = false
    if (gridOptions.pagerConfig) {
      gridOptions.pagerConfig.total = 10
    }
    gridOptions.data = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },
      { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },
      { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },
      { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },
      { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }
    ]
  }, 300)
}

const gridEvents: VxeGridListeners = {
  pageChange ({ currentPage, pageSize }) {
    if (gridOptions.pagerConfig) {
      gridOptions.pagerConfig.currentPage = currentPage
      gridOptions.pagerConfig.pageSize = pageSize
    }
    findList()
  }
}

const formatSex = (value: string) => {
  if (value === '1') {
    return '男'
  }
  if (value === '0') {
    return '女'
  }
  return ''
}

const hasActiveEditRow = (row: RowVO) => {
  const $grid = xGrid.value
  if ($grid) {
    return $grid.isEditByRow(row)
  }
  return false
}

const editRowEvent = (row: RowVO) => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.setEditRow(row)
  }
}

const clearRowEvent = () => {
  const $grid = xGrid.value
  if ($grid) {
    $grid.clearEdit()
  }
}

const saveRowEvent = async (row: RowVO) => {
  const $grid = xGrid.value
  if ($grid) {
    await $grid.clearEdit()
    gridOptions.loading = true
    // 模拟异步保存
    setTimeout(() => {
      gridOptions.loading = false
      VXETable.modal.message({ content: `${JSON.stringify(row)}`, status: 'success' })
    }, 300)
  }
}

const removeRowEvent = async (row: RowVO) => {
  const type = await VXETable.modal.confirm('您确定要删除该数据?')
  const $grid = xGrid.value
  if ($grid) {
    if (type === 'confirm') {
      await $grid.remove(row)
    }
  }
}

findList()
</script>
