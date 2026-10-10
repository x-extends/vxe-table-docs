<template>
  <div>
    文件名：<vxe-switch v-model="exportConfig.settingOptions.showFileName" />
    标题：<vxe-switch v-model="exportConfig.settingOptions.showSheet" />
    保存类型：<vxe-switch v-model="exportConfig.settingOptions.showType" />
    选择数据：<vxe-switch v-model="exportConfig.settingOptions.showMode" />
    参数设置：<vxe-switch v-model="exportConfig.settingOptions.showParameter" />

    <vxe-button
      status="primary"
      @click="openEvent"
    >
      高级导出
    </vxe-button>
    <vxe-grid
      ref="gridRef"
      v-bind="gridOptions"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeTablePropTypes, VxeGridProps, VxeWithRequired } from 'vxe-table'

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
    const exportConfig: VxeWithRequired<VxeTablePropTypes.ExportConfig<RowVO>, 'settingOptions'> = {
      isTreeAllExpanded: true, // 默认勾选
      settingOptions: {
        showFileName: true,
        showSheet: false,
        showType: false,
        showMode: true,
        showParameter: false
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      treeConfig: {
        transform: true,
        rowField: 'id',
        parentField: 'parentId'
      },
      showFooter: true,
      mergeCells: [
        { row: 1, col: 2, colspan: 2, rowspan: 1 }
      ],
      mergeFooterCells: [
        { row: 0, col: 2, colspan: 2, rowspan: 1 }
      ],
      exportConfig,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'checkbox', type: 'checkbox', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300, treeNode: true },
        {
          title: '分组1',
          children: [
            { field: 'size', title: 'Size' }
          ]
        },
        {
          title: '分组2',
          children: [
            { field: 'type', title: 'Type' },
            { field: 'date', title: 'Date' }
          ]
        }
      ],
      data: [
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
      ],
      footerData: [
        { seq: '合计', name: '45', sex: '666', age: '999' },
        { seq: '平均', name: '98', sex: '888', age: '333' }
      ]
    }

    return {
      gridOptions,
      exportConfig
    }
  },
  methods: {
    openEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openExport()
      }
    }
  }
})
</script>
