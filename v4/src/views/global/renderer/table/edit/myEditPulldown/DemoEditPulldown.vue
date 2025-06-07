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
import { VxeTableDefines, VxeTableEvents, VxeGridProps, VxeGrid, VxeGridPropTypes } from 'vxe-table'

const props = defineProps({
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableEditParams>,
    default: () => ({})
  }
})

const currColumn = ref<VxeTableDefines.ColumnInfo>()
const currRow = ref()

const allList = [
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
  { id: 100011, name: 'Test11', nickname: 'T11', role: 'Develop', sex: 'Man', age: 49, address: 'Guangzhou' },
  { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Women', age: 45, address: 'Shanghai' },
  { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100014, name: 'Test14', nickname: 'T14', role: 'Test', sex: 'Man', age: 29, address: 'Shanghai' },
  { id: 100015, name: 'Test15', nickname: 'T15', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 100016, name: 'Test16', nickname: 'T16', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100017, name: 'Test17', nickname: 'T17', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { id: 100018, name: 'Test18', nickname: 'T18', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' },
  { id: 100019, name: 'Test19', nickname: 'T19', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 100020, name: 'Test20', nickname: 'T20', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100021, name: 'Test21', nickname: 'T21', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { id: 100022, name: 'Test22', nickname: 'T22', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' }
]

const showPopup = ref(false)

const gridOptions = reactive<VxeGridProps & { pagerConfig: VxeGridPropTypes.PagerConfig }>({
  autoResize: true,
  height: '100%',
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

// 模拟后端接口
const getData = (searchName?: string) => {
  return new Promise<{
    total: number
    list: any[]
  }>(resolve => {
    setTimeout(() => {
      const { currentPage = 1, pageSize = 10 } = gridOptions.pagerConfig
      const result = searchName ? allList.filter((row) => row.name.indexOf(searchName) > -1) : allList
      resolve({
        total: result.length,
        list: result.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      })
    }, 100)
  })
}

const load = () => {
  const { renderParams } = props
  const { row, column } = renderParams
  currRow.value = row
  currColumn.value = column
  gridOptions.loading = true
  getData().then((rest) => {
    gridOptions.loading = false
    gridOptions.data = rest.list
    gridOptions.pagerConfig.total = rest.total
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
    getData(cellValue).then((rest) => {
      gridOptions.loading = false
      gridOptions.data = rest.list
      gridOptions.pagerConfig.total = rest.total
    })
  }
}

const suffixClick = () => {
  showPopup.value = !showPopup.value
}

const pageChangeEvent: VxePagerEvents.PageChange = ({ currentPage, pageSize }) => {
  gridOptions.pagerConfig.currentPage = currentPage
  gridOptions.pagerConfig.pageSize = pageSize
  gridOptions.loading = true
  getData().then((rest) => {
    gridOptions.loading = false
    gridOptions.data = rest.list
    gridOptions.pagerConfig.total = rest.total
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
