<template>
  <div>
    <vxe-button status="success" @click="getUpdateEvent">获取已修改数据</vxe-button>
    <vxe-button status="success" @click="saveAllRowEvent">全部保存</vxe-button>
    <vxe-table
      border
      show-overflow
      keep-source
      height="400"
      ref="tableRef"
      :edit-config="editConfig"
      :edit-dirty-config="editDirtyConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="action" title="操作" width="200">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" @click="updateRow1(row)">修改1</vxe-button>
          <vxe-button mode="text" status="primary" @click="updateRow2(row)">修改2</vxe-button>
          <vxe-button mode="text" status="success" @click="saveRow(row)">保存</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

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
    const loading = false
    const tableData: RowVO[] = []

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell',
      showStatus: true
    }

    const editDirtyConfig: VxeTablePropTypes.EditDirtyConfig = {
      includeFields: [
        'name'
      ]
    }

    return {
      loading,
      tableData,
      editConfig,
      editDirtyConfig
    }
  },
  methods: {
    loadList () {
      // 模拟后端接口
      this.loading = true
      setTimeout(() => {
        this.tableData = [
          { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ]
        this.loading = false
      }, 200)
    },
    updateRow1 (row: RowVO) {
      row.name = `Name_${new Date().getTime()}`
    },
    updateRow2 (row: RowVO) {
      row.age++
    },
    saveRow (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        if ($table.isUpdateByRow(row)) {
          console.log('保存数据', [row])
          $table.reloadRow(row, {})
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
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const updateRecords = $table.getUpdateRecords()
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
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const updateRecords = $table.getUpdateRecords()
        VxeUI.modal.alert(`修改：${updateRecords.length} 行`)
      }
    }
  },
  created () {
    this.loadList()
  }
})
</script>
