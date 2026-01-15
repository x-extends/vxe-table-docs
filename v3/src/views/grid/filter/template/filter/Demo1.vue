<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #name_filter="{ column }">
        <vxe-input v-model="option.data" v-for="(option, index) in column.filters" :key="index" @change="changeNameFilterEvent(option)"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string,
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      columns: [
        { type: 'checkbox', width: 60 },
        {
          field: 'name',
          title: 'Name',
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, cellValue }) {
            return `${cellValue}`.toLowerCase().indexOf(`${option.data || ''}`.toLowerCase()) > -1
          },
          slots: {
            filter: 'name_filter'
          }
        },
        { field: 'sex', title: 'Sex' },
        { field: 'num', title: 'Number' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    changeNameFilterEvent (option: any) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.updateFilterOptionStatus(option, !!option.data)
      }
    }
  }
})
</script>
