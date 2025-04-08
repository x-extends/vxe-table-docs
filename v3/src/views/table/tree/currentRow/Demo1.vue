<template>
  <div>
    <p>
      <vxe-button @click="selectRowEvent">设置第二行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">取消选中</vxe-button>
      <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      height="300"
      :row-config="{isCurrent: true, isHover: true}"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :data="tableData"
      @current-row-change="currentRowChangeEvent">
      <vxe-column type="seq" width="280" tree-node></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeTableEvents } from 'vxe-table'

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
      { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
      { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
      { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
      { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
      { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: 0, date: '2021-04-01' },
      { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
      { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
      { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
      { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
      { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
    ]

    return {
      tableData
    }
  },
  methods: {
    currentRowChangeEvent ({ rowIndex }) {
      console.log(`行选中事件 ${rowIndex}`)
    },
    selectRowEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.setCurrentRow(this.tableData[1])
      }
    },
    clearSelectEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.clearCurrentRow()
      }
    },
    getCurrentEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        VxeUI.modal.alert(JSON.stringify($table.getCurrentRecord()))
      }
    }
  }
})
</script>
