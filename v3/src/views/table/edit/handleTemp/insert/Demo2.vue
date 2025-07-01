<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增（顶部）</vxe-button>
    <vxe-button status="primary" @click="pushEvent">新增（尾部）</vxe-button>
    <vxe-button status="primary" @click="insertEvent">新增（ID:23666位置插入）</vxe-button>
    <vxe-button status="success" @click="getInsertEvent">获取新增的数据</vxe-button>
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
      <vxe-column field="name" title="Name" min-midth="300" tree-node :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="size" title="Size" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="type" title="Type" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="action" title="操作" width="220">
        <template #default="{ row }">
          <vxe-button status="primary" mode="text" @click="insertChild(row)">插入子节点</vxe-button>
          <vxe-button status="primary" mode="text" @click="insertRow(row)">当前位置插入</vxe-button>
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
    async addEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insert(record)
        // 激活不自动聚焦
        $table.setEditRow(newRow)
        // 激活并自动聚焦
        // $table.setEditRow(newRow, 'name')
        // 激活并自动聚焦
        // $table.setEditCell(newRow, 'name')
      }
    },
    async pushEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insertAt(record, -1)
        $table.setEditCell(newRow, 'name')
      }
    },
    async insertEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insertAt(record, 2)
        $table.setEditCell(newRow, 'name')
      }
    },
    async insertRow (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insertAt(record, row)
        $table.setEditCell(newRow, 'name')
      }
    },
    async insertChild (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insertChild(record, row)
        $table.setEditCell(newRow, 'name')
      }
    },
    getInsertEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const insertRecords = $table.getInsertRecords()
        VxeUI.modal.alert(`新增：${insertRecords.length} 行`)
      }
    }
  }
})
</script>
