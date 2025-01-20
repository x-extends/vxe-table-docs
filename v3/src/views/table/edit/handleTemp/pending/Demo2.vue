<template>
  <div>
    <vxe-button status="error" @click="pendingSelectEvent(true)">批量标记除</vxe-button>
    <vxe-button status="info" @click="pendingSelectEvent(false)">批量取消标记</vxe-button>
    <vxe-button status="success" @click="getPendingEvent">获取已标记数据</vxe-button>
    <vxe-table
      border
      show-overflow
      keep-source
      height="400"
      ref="tableRef"
      :row-config="rowConfig"
      :tree-config="treeConfig"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="checkbox" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-midth="300" tree-node :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="size" title="Size" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="type" title="Type" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="action" title="操作" width="140">
        <template #default="{ row }">
          <vxe-button mode="text" status="error" @click="pendingRow(row, true)">标记</vxe-button>
          <vxe-button mode="text" @click="pendingRow(row, false)">取消</vxe-button>
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
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
      { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
      { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
      { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
      { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: 0, date: '2021-04-01' },
      { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },
      { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },
      { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },
      { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23672, parentId: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23688, parentId: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23682, parentId: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },
      { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }
    ]

    const rowConfig: VxeTablePropTypes.RowConfig = {
      keyField: 'id'
    }

    const treeConfig: VxeTablePropTypes.TreeConfig = {
      transform: true,
      rowField: 'id',
      parentField: 'parentId'
    }

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell',
      showStatus: true
    }

    return {
      tableData,
      rowConfig,
      treeConfig,
      editConfig
    }
  },
  methods: {
    async pendingRow (row: RowVO, status: boolean) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.setPendingRow(row, status)
      }
    },
    async pendingSelectEvent (status: boolean) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const selectRecords = $table.getCheckboxRecords()
        if (selectRecords.length > 0) {
          await $table.setPendingRow(selectRecords, status)
          await $table.clearCheckboxRow()
        } else {
          VxeUI.modal.message({
            content: '未选择数据',
            status: 'info'
          })
        }
      }
    },
    getPendingEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const pendingRecords = $table.getPendingRecords()
        VxeUI.modal.alert(`标记：${pendingRecords.length} 行`)
      }
    }
  }
})
</script>
