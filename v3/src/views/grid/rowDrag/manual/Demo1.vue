<template>
  <div>
    <vxe-button status="primary" @click="modeRow(gridOptions.data[0], gridOptions.data[2])">Test1 移动到 Test3</vxe-button>
    <vxe-button status="primary" @click="modeRow(gridOptions.data[1], gridOptions.data[5])">Test2 移动到 Test6</vxe-button>
    <vxe-button status="success" @click="resultEvent">获取数据</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row, rowIndex }">
        <vxe-button mode="text" status="primary" :disabled="rowIndex <= 0" @click="modePrevRow(row)">上移</vxe-button>
        <vxe-button mode="text" status="primary" :disabled="rowIndex >= gridOptions.data.length - 1" @click="modeNextRow(row)">下移</vxe-button>
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
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      rowConfig: {
        drag: true
      },
      rowDragConfig: {
        showIcon: false
      },
      columnConfig: {
        resizable: true
      },
      columns: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' },
        { field: 'action', title: '操作', slots: { default: 'action' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    modeNextRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.moveRowTo(row, 1)
      }
    },
    modePrevRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.moveRowTo(row, -1)
      }
    },
    modeRow (row: RowVO, targetRow: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.moveRowTo(row, targetRow)
      }
    },
    resultEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const tableData = $grid.getFullData()
        console.log(tableData)
      }
    }
  }
})
</script>
