<template>
  <div>
    <vxe-grid v-bind="gridOptions" @filter-change="filterChangeEvent"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableDefines, VxeGridProps } from 'vxe-table'

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
      loading: false,
      height: 400,
      columnConfig: {
        resizable: true
      },
      filterConfig: {
        remote: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300 },
        {
          field: 'role',
          title: 'Role',
          width: 240,
          filters: [
            { label: 'Develop', value: 'Develop' },
            { label: 'Test', value: 'Test' },
            { label: 'PM', value: 'PM' },
            { label: 'Designer', value: 'Designer' }
          ]
        },
        { field: 'sex', title: 'Sex', width: 200 },
        { field: 'age', title: 'Age', width: 200 },
        { field: 'address', title: 'Address', width: 300 }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  methods: {
    findList (filterList?: VxeTableDefines.FilterCheckedParams<RowVO>[]) {
      this.gridOptions.loading = true
      // 模拟接口
      return new Promise<RowVO[]>(resolve => {
        setTimeout(() => {
          this.gridOptions.loading = false
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
            const firstItem = filterList[0]
            const values = firstItem.values
            const rest = mockList.filter(item => values.includes(item.role))
            this.gridOptions.data = rest
            resolve(rest)
          } else {
            this.gridOptions.data = mockList
            resolve(mockList)
          }
        }, 300)
      })
    },
    filterChangeEvent ({ filterList }) {
      this.findList(filterList)
    }
  },
  created () {
    this.findList()
  }
})
</script>
