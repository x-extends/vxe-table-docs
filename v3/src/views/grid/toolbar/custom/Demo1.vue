<template>
  <div>
    <vxe-grid
      ref="gridRef"
      v-bind="gridOptions"
      @custom="customEvent"
      @toolbar-button-click="toolbarButtonClickEvent"
      @toolbar-tool-click="toolbarToolClickEvent">
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      keepSource: true,
      showOverflow: true,
      id: 'toolbar_demo_1',
      height: 500,
      printConfig: {},
      importConfig: {},
      exportConfig: {},
      columnConfig: {
        resizable: true
      },
      customConfig: {
        storage: true
      },
      toolbarConfig: {
        // 方式1
        custom: true,
        buttons: [
          // 方式2
          { name: '自定义个性化列按钮', code: 'custom', round: true, status: 'primary' }
        ],
        tools: [
          // 方式3
          { name: '自定义个性化列按钮', code: 'custom', status: 'success' }
        ]
      },
      columns: [
        { type: 'checkbox', width: 50 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        {
          title: '分类',
          field: 'group1',
          children: [
            { field: 'nickname', title: 'Nickname' },
            { field: 'role', title: 'Role' }
          ]
        },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    customEvent ({ type }) {
      console.log(type)
    },
    toolbarButtonClickEvent ({ code }) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        switch (code) {
          case 'myInsert': {
            $grid.insert({
              name: 'xxx'
            })
            break
          }
          case 'mySave': {
            const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
            VxeUI.modal.message({ content: `新增 ${insertRecords.length} 条，删除 ${removeRecords.length} 条，更新 ${updateRecords.length} 条`, status: 'success' })
            break
          }
          case 'myExport': {
            $grid.exportData({
              type: 'csv'
            })
            break
          }
        }
      }
    },
    toolbarToolClickEvent ({ code }) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        switch (code) {
          case 'myPrint': {
            $grid.print()
            break
          }
        }
      }
    }
  }
})
</script>
