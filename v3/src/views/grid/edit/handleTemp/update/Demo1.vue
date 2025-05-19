<template>
  <div>
    <vxe-button status="success" @click="getUpdateEvent">获取已修改数据</vxe-button>
    <vxe-button status="success" @click="saveAllRowEvent">全部保存</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="updateRow1(row)">修改1</vxe-button>
        <vxe-button mode="text" status="primary" @click="updateRow2(row)">修改2</vxe-button>
        <vxe-button mode="text" status="success" @click="saveRow(row)">保存</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      height: 400,
      editConfig: {
        trigger: 'click',
        mode: 'cell',
        showStatus: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
        { field: 'age', title: 'Age', editRender: { name: 'input' } },
        { field: 'action', title: '操作', width: 200, slots: { default: 'action' } }
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
    loadList () {
      // 模拟后端接口
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.data = [
          { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ]
        this.gridOptions.loading = false
      }, 200)
    },
    updateRow1 (row: RowVO) {
      row.name = `Name_${new Date().getTime()}`
    },
    updateRow2 (row: RowVO) {
      row.age++
    },
    saveRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        if ($grid.isUpdateByRow(row)) {
          console.log('保存数据', [row])
          $grid.reloadRow(row, {})
          VxeUI.modal.message({
            content: '保存成功',
            status: 'success'
          })
        } else {
          VxeUI.modal.message({
            content: '数据未改动',
            status: 'warning'
          })
        }
      }
    },
    saveAllRowEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const updateRecords = $grid.getUpdateRecords()
        if (updateRecords.length > 0) {
          console.log('保存数据', updateRecords)
          this.loadList()
          VxeUI.modal.message({
            content: '保存成功',
            status: 'success'
          })
        } else {
          VxeUI.modal.message({
            content: '数据未改动',
            status: 'warning'
          })
        }
      }
    },
    getUpdateEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const updateRecords = $grid.getUpdateRecords()
        VxeUI.modal.alert(`修改：${updateRecords.length} 行`)
      }
    }
  },
  created () {
    this.loadList()
  }
})
</script>
