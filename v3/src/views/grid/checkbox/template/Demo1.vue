<template>
  <div>
    <vxe-button @click="selectRowEvent(gridOptions.data[1], true)">选中第二行</vxe-button>
    <vxe-button @click="selectRowEvent(gridOptions.data[1], false)">取消选中第二行</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #checkbox_header="{ checked, indeterminate }">
        <span class="custom-checkbox" @click.stop="toggleAllCheckboxEvent">
          <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
          <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
          <i v-else class="vxe-icon-checkbox-unchecked"></i>
        </span>
      </template>

      <template #checkbox_cell="{ row, checked, indeterminate }">
        <span class="custom-checkbox" @click.stop="toggleCheckboxEvent(row)">
          <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
          <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
          <i v-else class="vxe-icon-checkbox-unchecked"></i>
        </span>
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
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      columns: [
        { type: 'checkbox', width: 60, slots: { header: 'checkbox_header', checkbox: 'checkbox_cell' } },
        { field: 'name', title: 'Name' },
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
    toggleAllCheckboxEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.toggleAllCheckboxRow()
      }
    },
    toggleCheckboxEvent  (row) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.toggleCheckboxRow(row)
      }
    },
    selectRowEvent  (row: RowVO, checked: boolean) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setCheckboxRow(row, checked)
      }
    }
  }
})
</script>
