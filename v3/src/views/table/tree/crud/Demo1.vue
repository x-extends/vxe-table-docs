<template>
  <div>
    <vxe-toolbar ref="toolbarRef" :refresh="{queryMethod: searchMethod}" export print custom>
      <template #buttons>
        <vxe-button @click="insertEvent">新增</vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      show-overflow
      keep-source
      ref="tableRef"
      :row-config="{keyField: 'id'}"
      :column-config="{resizable: true}"
      :print-config="{}"
      :export-config="{}"
      :loading="loading"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="size" title="Size" width="100" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.size" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date" type="date" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="640">
        <template #default="{ row }">
          <vxe-button type="text" status="primary" @click="insertRow(row, 'current')">当前位置插入节点</vxe-button>
          <vxe-button type="text" status="primary" @click="insertNextRow(row, 'current')">下一行位置插入新节点</vxe-button>
          <vxe-button type="text" status="primary" @click="insertRow(row, 'top')">顶部插入子节点</vxe-button>
          <vxe-button type="text" status="primary" @click="insertRow(row, 'bottom')">尾部插入子节点</vxe-button>
          <vxe-button type="text" status="danger" @click="removeRow(row)">删除节点</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'

export default {
  data () {
    return {
      loading: false,
      tableData: []
    }
  },
  created () {
    this.$nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = this.$refs.tableRef
      const $toolbar = this.$refs.toolbarRef
      if ($table && $toolbar) {
        $table.connect($toolbar)
      }
    })
    this.findList()
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          this.tableData = [
            { id: 10000, parentId: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
            { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
            { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
            { id: 20045, parentId: 24300, name: 'vxe-table test abc4', type: 'html', size: 600, date: '2021-04-01' },
            { id: 10053, parentId: 24300, name: 'vxe-table test abc96', type: 'avi', size: 0, date: '2021-04-01' },
            { id: 24330, parentId: 10053, name: 'vxe-table test abc5', type: 'txt', size: 25, date: '2021-10-01' },
            { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
            { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
            { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 24555, parentId: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-01' },
            { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
          ]
          this.loading = false
          resolve()
        }, 300)
      })
    },
    searchMethod () {
      const $table = this.$refs.tableRef
      if ($table) {
        // 清除所有状态
        $table.clearAll()
        return this.findList()
      }
      return Promise.resolve()
    },
    insertEvent () {
      const $table = this.$refs.tableRef
      const rid = Date.now()
      const record = {
        name: `新数据${rid}`,
        id: rid,
        date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
      }
      $table.insert(record).then(({ row }) => $table.setActiveRow(row))
    },
    async insertRow (currRow, locat) {
      const $table = this.$refs.tableRef
      // 如果 null 则插入到目标节点顶部
      // 如果 -1 则插入到目标节点底部
      // 如果 row 则有插入到效的目标节点该行的位置
      const rid = Date.now()
      if (locat === 'current') {
        const record = {
          name: `新数据${rid}`,
          id: rid,
          parentId: currRow.parentId, // 父节点必须与当前行一致
          date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
        const { row: newRow } = await $table.insertAt(record, currRow)
        await $table.setActiveRow(newRow) // 插入子节点
      } else if (locat === 'top') {
        const record = {
          name: `新数据${rid}`,
          id: rid,
          parentId: currRow.id, // 需要指定父节点，自动插入该节点中
          date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
        const { row: newRow } = await $table.insert(record)
        await $table.setTreeExpand(currRow, true) // 将父节点展开
        await $table.setActiveRow(newRow) // 插入子节点
      } else if (locat === 'bottom') {
        const record = {
          name: `新数据${rid}`,
          id: rid,
          parentId: currRow.id, // 需要指定父节点，自动插入该节点中
          date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
        const { row: newRow } = await $table.insertAt(record, -1)
        await $table.setTreeExpand(currRow, true) // 将父节点展开
        await $table.setActiveRow(newRow) // 插入子节点
      }
    },
    async insertNextRow (currRow, locat) {
      const $table = this.$refs.tableRef
      // 如果 null 则插入到目标节点顶部
      // 如果 -1 则插入到目标节点底部
      // 如果 row 则有插入到效的目标节点该行的位置
      const rid = Date.now()
      if (locat === 'current') {
        const record = {
          name: `新数据${rid}`,
          id: rid,
          parentId: currRow.parentId, // 父节点必须与当前行一致
          date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
        }
        const { row: newRow } = await $table.insertAt(record, currRow)
        await $table.setActiveRow(newRow) // 插入子节点
      }
    },
    async removeRow (row) {
      const $table = this.$refs.tableRef
      await $table.remove(row)
    },
    getInsertEvent () {
      const $table = this.$refs.tableRef
      const insertRecords = $table.getInsertRecords()
      VXETable.modal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      const $table = this.$refs.tableRef
      const removeRecords = $table.getRemoveRecords()
      VXETable.modal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      const $table = this.$refs.tableRef
      const updateRecords = $table.getUpdateRecords()
      VXETable.modal.alert(updateRecords.length)
    }
  }
}
</script>
