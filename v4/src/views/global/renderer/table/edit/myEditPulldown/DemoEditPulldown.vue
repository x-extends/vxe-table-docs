<template>
  <div v-if="currRow && currColumn" class="edit-down-table">
    <VxePulldown v-model="showPopup" class="edit-down-pulldown">
      <template #default>
        <VxeInput class="edit-down-input" v-model="currRow[currColumn.field]" @keyup="keyupEvent" @click="clickEvent" @suffix-click="suffixClick"></VxeInput>
      </template>
      <template #dropdown>
        <div class="edit-down-wrapper">
          <VxeGrid v-bind="gridOptions" @cell-click="selectEvent" @page-change="pageChangeEvent"></VxeGrid>
        </div>
      </template>
    </VxePulldown>
  </div>
</template>

<script lang="ts" setup>
import { PropType, reactive, ref } from 'vue'
import { VxeInput, VxePulldown, VxePagerEvents, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines, VxeTableEvents, VxeGridProps, VxeGrid } from 'vxe-table'

const props = defineProps({
  params: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableEditParams>,
    default: () => ({})
  }
})

const currColumn = ref<VxeTableDefines.ColumnInfo>()
const currRow = ref()

const showPopup = ref(false)

const gridOptions = reactive<VxeGridProps>({
  autoResize: true,
  height: 'auto',
  loading: false,
  rowConfig: {
    isHover: true
  },
  pagerConfig: {
    enabled: true,
    total: 0,
    currentPage: 1,
    pageSize: 10
  },
  columns: [
    { type: 'seq' },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' }
  ],
  data: []
})

const getData = () => {
  return new Promise<any[]>(resolve => {
    setTimeout(() => {
      const list = [
        { name: 'Test1', role: '前端', sex: '男' },
        { name: 'Test2', role: '后端', sex: '男' },
        { name: 'Test3', role: '测试', sex: '男' },
        { name: 'Test4', role: '设计师', sex: '女' },
        { name: 'Test5', role: '前端', sex: '男' },
        { name: 'Test6', role: '前端', sex: '男' },
        { name: 'Test7', role: '前端', sex: '男' }
      ]
      resolve(list)
    }, 100)
  })
}

const load = () => {
  const { params } = props
  const { row, column } = params
  currRow.value = row
  currColumn.value = column
  getData().then((data) => {
    gridOptions.data = data
  })
}

const clickEvent = () => {
  showPopup.value = true
}

const keyupEvent = () => {
  const row = currRow.value
  const column = currColumn.value
  if (column) {
    const cellValue = row[column.field]
    gridOptions.loading = true
    getData().then((data) => {
      gridOptions.loading = false
      if (cellValue) {
        gridOptions.data = data.filter((item) => item.name.indexOf(cellValue) > -1)
      } else {
        gridOptions.data = data
      }
    })
  }
}

const suffixClick = () => {
  showPopup.value = !showPopup.value
}

const pageChangeEvent: VxePagerEvents.PageChange = ({ currentPage, pageSize }) => {
  const { pagerConfig } = gridOptions
  if (pagerConfig) {
    pagerConfig.currentPage = currentPage
    pagerConfig.pageSize = pageSize
  }
  gridOptions.loading = true
  getData().then((data) => {
    gridOptions.loading = false
    gridOptions.data = data
  })
}

const selectEvent: VxeTableEvents.CellClick = (params) => {
  const row = currRow.value
  const column = currColumn.value
  if (column) {
    row[column.field] = params.row.name
    showPopup.value = false
  }
}

load()
</script>

<style lang="scss" scoped>
.edit-down-table,
.edit-down-pulldown,
.edit-down-input {
  width: 100%;
}
.edit-down-wrapper {
  width: 600px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
</style>
