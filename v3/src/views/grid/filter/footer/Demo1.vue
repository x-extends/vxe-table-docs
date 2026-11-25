<template>
  <div>
    <vxe-grid
      ref="gridRef"
      v-bind="gridOptions"
      v-on="gridEvents"
    >
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const sumMethod = (list: RowVO[], field: string) => {
  let num = 0
  list.forEach(row => {
    num += Number(row[field])
  })
  return `${num}`
}

const meanMethod = (list: RowVO[], field: string) => {
  let num = 0
  list.forEach(row => {
    num += Number(row[field])
  })
  return (num / list.length).toFixed(2)
}

export default Vue.extend({
  data () {
    const sumRow: any = {
      id: '合计',
      name: '-',
      sex: '-',
      age: '-',
      address: '-'
    }

    const meanRow: any = {
      id: '平均',
      name: '-',
      sex: '-',
      age: '-',
      address: '-'
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 400,
      showFooter: true,
      columns: [
        { field: 'id', title: 'ID' },
        {
          field: 'name',
          title: 'Name',
          filters: [
            { label: 'Test1', value: 'Test1' },
            { label: 'Test2', value: 'Test2' },
            { label: 'Test3', value: 'Test3' },
            { label: 'Test4', value: 'Test4' },
            { label: 'Test5', value: 'Test5' }
          ]
        },
        {
          field: 'sex',
          title: 'Sex',
          filterMultiple: false,
          filters: [
            { label: 'Man', value: 'Man' },
            { label: 'Woman', value: 'Woman' }
          ]
        },
        {
          field: 'age',
          title: 'Age',
          filters: [
            { label: '28', value: 28 },
            { label: '22', value: 22 },
            { label: '38', value: 38 }
          ]
        },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Woman', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Woman', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Man', age: 54, address: 'Shanghai' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' },
        { id: 10006, name: 'Test6', role: 'Develop', sex: 'Woman', age: 24, address: 'Shanghai' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 52, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'PM', sex: 'Woman', age: 34, address: 'Guangzhou' },
        { id: 10009, name: 'Test9', role: 'PM', sex: 'Man', age: 24, address: 'test abc' },
        { id: 100010, name: 'Test10', role: 'Develop', sex: 'Woman', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        sumRow,
        meanRow
      ]
    }

    const gridEvents: VxeGridListeners = {}

    return {
      sumRow,
      meanRow,
      gridOptions,
      gridEvents
    }
  },
  created () {
    this.gridEvents = {
      filterChange: this.handleFilterChange
    }
  },
  mounted () {
    this.updateFooter()
  },
  methods: {
    handleFilterChange () {
      this.updateFooter()
    },
    updateFooter () {
      const $grid = this.$refs.gridRef as VxeGridInstance
      if (!$grid) {
        return
      }
      const { visibleData } = $grid.getTableData()
      this.sumRow.age = sumMethod(visibleData as RowVO[], 'age')
      this.meanRow.age = meanMethod(visibleData as RowVO[], 'age')
    }
  }
})
</script>
