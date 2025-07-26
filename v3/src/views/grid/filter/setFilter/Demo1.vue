<template>
  <div>
    <vxe-button @click="changeFilters()">只修改 role 条件</vxe-button>
    <vxe-button @click="handleFilters">修改并触发 role 筛选</vxe-button>
    <vxe-button @click="clearFilterEvent">清除筛选</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 300,
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
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    changeFilters () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 修改筛选选项，调用该方法不会触发任何事件
        $grid.setFilter('role', [
          { label: 'Develop', value: 'Develop', checked: false },
          { label: 'Test', value: 'Test', checked: true },
          { label: 'PM', value: 'PM', checked: false },
          { label: 'Designer', value: 'Designer', checked: false }
        ])
      }
    },
    handleFilters () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 修改筛选选项，如果传 true，则自动更新本地筛选，调用该方法不会触发任何事件
        $grid.setFilter('role', [
          { label: 'Develop', value: 'Develop', checked: false },
          { label: 'Test', value: 'Test', checked: true },
          { label: 'PM', value: 'PM', checked: false },
          { label: 'Designer', value: 'Designer', checked: false }
        ], true)
      }
    },
    clearFilterEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 清除筛选状态，调用该方法不会触发任何事件，如果是本地筛选，会自动更新数据
        $grid.clearFilter()
      }
    }
  }
})
</script>
