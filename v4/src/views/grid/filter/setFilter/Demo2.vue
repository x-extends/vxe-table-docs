<template>
  <div>
    <vxe-button @click="changeFilters()">只修改 role 条件</vxe-button>
    <vxe-button @click="handleFilters">修改并触发 role 筛选</vxe-button>
    <vxe-button @click="handleClearEvent">清除筛选</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableDefines, VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'
import { VxeButtonEvents } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: string
  num2: string
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  height: 300,
  filterConfig: {
    remote: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    {
      field: 'role',
      title: 'Role',
      filters: [
        { label: 'Develop', value: 'Develop' },
        { label: 'Test', value: 'Test' },
        { label: 'PM', value: 'PM' },
        { label: 'Designer', value: 'Designer' }
      ]
    },
    {
      field: 'sex',
      title: 'Sex',
      filters: [
        { label: 'Man', value: 'Man' },
        { label: 'Women', value: 'Women' }
      ]
    },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: []
})

const findList = (filterList?: VxeTableDefines.FilterCheckedParams<RowVO>[]) => {
  gridOptions.loading = true
  // 模拟接口
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      gridOptions.loading = false
      const mockList = [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' }
      ]
      if (filterList && filterList.length) {
        const queryFilerMaps = {
          role: [] as string[],
          sex: [] as string[]
        }
        filterList.forEach(item => {
          if (queryFilerMaps[item.field]) {
            queryFilerMaps[item.field] = item.values
          }
        })
        const rest = mockList.filter(item => {
          const { role: roleValues, sex: sexValues } = queryFilerMaps
          return roleValues.includes(item.role) && (!sexValues.length || sexValues.includes(item.sex))
        })
        gridOptions.data = rest
        resolve(rest)
      } else {
        gridOptions.data = mockList
        resolve(mockList)
      }
    }, 300)
  })
}

const gridEvents: VxeGridListeners = {
  filterChange ({ filterList }) {
    findList(filterList)
  },
  clearAllFilter ({ filterList }) {
    findList(filterList)
  }
}

const changeFilters = () => {
  const $grid = gridRef.value
  if ($grid) {
    // 修改筛选选项，调用该方法不会触发任何事件
    $grid.setFilter('role', [
      { label: 'Develop', value: 'Develop', checked: false },
      { label: 'Test', value: 'Test', checked: true },
      { label: 'PM', value: 'PM', checked: false },
      { label: 'Designer', value: 'Designer', checked: false }
    ])
  }
}

const handleFilters: VxeButtonEvents.Click = ({ $event }) => {
  const $grid = gridRef.value
  if ($grid) {
    // 修改筛选选项，传 true 则自动触发远程筛选 filter-change 事件
    $grid.setFilterByEvent($event, 'role', [
      { label: 'Develop', value: 'Develop', checked: false },
      { label: 'Test', value: 'Test', checked: true },
      { label: 'PM', value: 'PM', checked: false },
      { label: 'Designer', value: 'Designer', checked: false }
    ])
  }
}

const handleClearEvent: VxeButtonEvents.Click = ({ $event }) => {
  const $grid = gridRef.value
  if ($grid) {
    // 多列筛选模式，清除筛选，调用该方法会自动触发 clear-all-filter 事件
    $grid.clearFilterByEvent($event)
  }
}

findList()
</script>
