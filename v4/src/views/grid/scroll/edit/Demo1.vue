<template>
  <div>
    <p>
      <vxe-button @click="loadData(500)">加载500行</vxe-button>
      <vxe-button @click="loadData(1000)">加载1k行</vxe-button>
      <vxe-button @click="loadData(5000)">加载5k行</vxe-button>
      <vxe-button @click="loadData(10000)">加载1w行</vxe-button>
      <vxe-button @click="loadData(30000)">加载3w行</vxe-button>
      <vxe-button @click="loadData(50000)">加载5w行</vxe-button>
    </p>
    <p>
      <vxe-button status="primary" @click="addEvent">新增</vxe-button>
    </p>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import { VxeSelectProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: string
  sex: string
  date: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const sexEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 800,
  loading: false,
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'nickname', title: 'Nickname', editRender: { name: 'VxeInput' } },
    { field: 'role', title: 'Role', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', editRender: sexEditRender },
    { field: 'date', title: 'Date', editRender: { name: 'VxeDatePicker' } },
    { field: 'action', title: '操作', width: 100, slots: { default: 'action' } }
  ]
})

// 模拟行数据
const loadData = (size = 200) => {
  gridOptions.loading = true
  setTimeout(() => {
    const $grid = gridRef.value
    const dataList: RowVO[] = []
    for (let i = 0; i < size; i++) {
      dataList.push({
        id: i,
        name: `名称${i}`,
        nickname: '',
        role: `角色${i}`,
        age: '18',
        sex: '',
        date: ''
      })
    }
    gridOptions.loading = false
    if ($grid) {
      const startTime = Date.now()
      $grid.loadData(dataList).then(() => {
        VxeUI.modal.message({
          content: `加载时间 ${Date.now() - startTime} 毫秒`,
          status: 'success'
        })
        gridOptions.loading = false
      })
    }
  }, 350)
}

const addEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {}
    const { row: newRow } = await $grid.insert(record)
    $grid.setEditCell(newRow, 'name')
  }
}

const removeRow = async (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.remove(row)
    VxeUI.modal.message({
      content: '数据已删除',
      status: 'success'
    })
  }
}

loadData(500)
</script>
