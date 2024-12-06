<template>
  <div v-if="currRow && currColumn" class="edit-down-table">
    <VxePulldown v-model="showPopup" class="edit-down-pulldown">
      <template #default>
        <VxeInput class="edit-down-input" v-model="currRow[currColumn.field]" @keyup="keyupEvent" @click="clickEvent" @suffix-click="suffixClick"></VxeInput>
      </template>
      <template #dropdown>
        <div class="edit-down-wrapper">
          <VxeGrid v-bind="gridOptions" @cell-click="selectEvent" @page-change="pageChangeEvent"></VxeGrid>
        </div>
      </template>
    </VxePulldown>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines, VxeGridProps } from 'vxe-table'

export default Vue.extend({
  props: {
    params: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderTableEditParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderTableEditParams)
    }
  },
  data () {
    const gridOptions: VxeGridProps = {
      autoResize: true,
      height: 'auto',
      loading: false,
      rowConfig: {
        isHover: true
      },
      pagerConfig: {
        enabled: true,
        total: 0,
        currentPage: 1,
        pageSize: 10
      },
      columns: [
        { type: 'seq' },
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' }
      ],
      data: []
    }

    return {
      currColumn: null as VxeTableDefines.ColumnInfo | null,
      currRow: null as any,
      showPopup: false,
      gridOptions
    }
  },
  methods: {
    getData  () {
      return new Promise<any[]>(resolve => {
        setTimeout(() => {
          const list = [
            { name: 'Test1', role: '前端', sex: '男' },
            { name: 'Test2', role: '后端', sex: '男' },
            { name: 'Test3', role: '测试', sex: '男' },
            { name: 'Test4', role: '设计师', sex: '女' },
            { name: 'Test5', role: '前端', sex: '男' },
            { name: 'Test6', role: '前端', sex: '男' },
            { name: 'Test7', role: '前端', sex: '男' }
          ]
          resolve(list)
        }, 100)
      })
    },
    load () {
      const { params } = this
      const { row, column } = params
      this.currRow = row
      this.currColumn = column
      this.getData().then((data) => {
        this.gridOptions.data = data
      })
    },
    clickEvent () {
      this.showPopup = true
    },
    keyupEvent  () {
      const row = this.currRow
      const column = this.currColumn
      if (column) {
        const cellValue = row[column.field]
        this.gridOptions.loading = true
        this.getData().then((data) => {
          this.gridOptions.loading = false
          if (cellValue) {
            this.gridOptions.data = data.filter((item) => item.name.indexOf(cellValue) > -1)
          } else {
            this.gridOptions.data = data
          }
        })
      }
    },
    suffixClick () {
      this.showPopup = !this.showPopup
    },
    pageChangeEvent ({ currentPage, pageSize }) {
      const { pagerConfig } = this.gridOptions
      if (pagerConfig) {
        pagerConfig.currentPage = currentPage
        pagerConfig.pageSize = pageSize
      }
      this.gridOptions.loading = true
      this.getData().then((data) => {
        this.gridOptions.loading = false
        this.gridOptions.data = data
      })
    },
    selectEvent (params) {
      const row = this.currRow
      const column = this.currColumn
      if (column) {
        row[column.field] = params.row.name
        this.showPopup = false
      }
    }
  },
  created () {
    this.load()
  }
})
</script>

<style lang="scss" scoped>
.edit-down-table,
.edit-down-pulldown,
.edit-down-input {
  width: 100%;
}
.edit-down-wrapper {
  width: 600px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
</style>
