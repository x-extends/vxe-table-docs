<template>
  <div>
    <div class="my-table-transfer">
      <div class="my-table-transfer-left">
        <vxe-grid ref="gridRef1" v-bind="gridOptions1"></vxe-grid>
      </div>
      <div class="my-table-transfer-handle">
        <vxe-button status="primary" icon="vxe-icon-arrow-double-right" style="width: 100%;" @click="addEvent"></vxe-button>
        <vxe-button status="error" icon="vxe-icon-arrow-double-left" style="width: 100%;" @click="delEvent"></vxe-button>
      </div>
      <div class="my-table-transfer-right">
        <vxe-grid ref="gridRef2" v-bind="gridOptions2"></vxe-grid>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  nickname: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions1: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: '100%',
      rowConfig: {
        keyField: 'id',
        drag: true
      },
      rowDragConfig: {
        isCrossDrag: true,
        isCrossTableDrag: true
      },
      columns: [
        { type: 'checkbox', width: 70 },
        { field: 'name', title: 'Name', dragSort: true },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
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
    }

    const gridOptions2: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: '100%',
      rowConfig: {
        keyField: 'id',
        drag: true
      },
      rowDragConfig: {
        isCrossDrag: true,
        isCrossTableDrag: true
      },
      columns: [
        { type: 'checkbox', width: 70 },
        { field: 'name', title: 'Name', dragSort: true },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: []
    }

    return {
      gridOptions1,
      gridOptions2
    }
  },
  methods: {
    addEvent () {
      const $grid1 = this.$refs.gridRef1 as VxeGridInstance
      const $grid2 = this.$refs.gridRef2 as VxeGridInstance
      if ($grid1 && $grid2) {
        const selectRecords = $grid1.getCheckboxRecords()
        if (selectRecords.length) {
          $grid1.remove(selectRecords)
          $grid2.insertAt(selectRecords, -1)
        } else {
          VxeUI.modal.message({
            content: '请勾选左侧数据',
            status: 'warning'
          })
        }
      }
    },
    delEvent () {
      const $grid1 = this.$refs.gridRef1 as VxeGridInstance
      const $grid2 = this.$refs.gridRef2 as VxeGridInstance
      if ($grid1 && $grid2) {
        const selectRecords = $grid2.getCheckboxRecords()
        if (selectRecords.length) {
          $grid2.remove(selectRecords)
          $grid1.insertAt(selectRecords, -1)
        } else {
          VxeUI.modal.message({
            content: '请勾选右侧数据',
            status: 'warning'
          })
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.my-table-transfer {
  display: flex;
  height: 400px;
  overflow: hidden;
}
.my-table-transfer-handle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
}
.my-table-transfer-left,
.my-table-transfer-right {
  width: 50%;
  overflow: hidden;
}
</style>
