<template>
  <div>
    <p>
      <vxe-button @click="toggleSelectRow(gridOptions.data[1])">切换第二行选中</vxe-button>
      <vxe-button @click="setSelectRow([gridOptions.data[2], gridOptions.data[3]], true)">设置第三、四行选中</vxe-button>
      <vxe-button @click="selectAllEvent">设置所有行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">清除所有行选中</vxe-button>
      <vxe-button status="success" @click="getSelectEvent">获取已选</vxe-button>
    </p>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  type: string
  size: number
  date: string,
  isChecked: boolean
  children?: RowVO[]
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & {
      data: RowVO[]
    } = {
      border: true,
      height: 500,
      rowConfig: {
        keyField: 'id',
        isHover: true
      },
      checkboxConfig: {
        checkField: 'isChecked'
      },
      treeConfig: {},
      columns: [
        { type: 'checkbox', width: 60 },
        { field: 'name', title: 'Name', treeNode: true },
        { field: 'type', title: 'Type' },
        { field: 'size', title: 'Size' },
        { field: 'date', title: 'Date' }
      ],
      data: [
        { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01', isChecked: false },
        {
          id: 1005,
          name: 'Test2',
          type: 'mp4',
          size: 0,
          date: '2021-04-01',
          isChecked: false,
          children: [
            { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01', isChecked: false },
            { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01', isChecked: false },
            {
              id: 10053,
              name: 'test abc96',
              type: 'avi',
              size: 0,
              date: '2021-04-01',
              isChecked: false,
              children: [
                { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01', isChecked: false },
                { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01', isChecked: false },
                { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', isChecked: false }
              ]
            }
          ]
        },
        { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01', isChecked: false },
        { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01', isChecked: false }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    toggleSelectRow  (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.toggleCheckboxRow(row)
      }
    },
    setSelectRow  (rows: RowVO[], checked: boolean) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setCheckboxRow(rows, checked)
      }
    },
    selectAllEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setAllCheckboxRow(true)
      }
    },
    clearSelectEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.clearCheckboxRow()
      }
    },
    getSelectEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const selectRecords = $grid.getCheckboxRecords()
        VxeUI.modal.message({
          content: `当前页勾选：${selectRecords.length} 条`,
          status: 'success'
        })
      }
    }
  }
})
</script>
