<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #filter_sex="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-select v-model="option.data" :options="sexOptions" @change="changeSexFilter(option)"></vxe-select>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const sexOptions = [
      { label: 'Women', value: 'Women' },
      { label: 'Man', value: 'Man' }
    ]

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 400,
      columns: [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        {
          field: 'sex',
          title: 'Sex',
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return row[column.field] === option.data
            }
            return true
          },
          slots: {
            filter: 'filter_sex'
          }
        },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions,
      sexOptions
    }
  },
  methods: {
    changeSexFilter (option: any) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.updateFilterOptionStatus(option, !!option.data)
      }
    }
  }
})
</script>
