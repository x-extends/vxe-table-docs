<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import type { VxeSelectProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

export default Vue.extend({
  data () {
    const roleEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps> = {
      name: 'VxeSelect',
      props: {
        filterable: true
      },
      options: []
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: 300,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'VxeInput' } },
        { field: 'type', title: 'Type', width: 200, editRender: { name: 'VxeInput' } },
        { field: 'role', title: '大数据量选项', width: 200, editRender: roleEditRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] },
        { id: 10004, name: 'Test4', role: 'Develop', sex: 'Man', sexList: [], type: '', typeList: [] },
        { id: 10005, name: 'Test5', role: 'Test', sex: 'Women', sexList: ['Man'], type: '2-1', typeList: ['1-2', '2-1'] },
        { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', sexList: ['Man'], type: '2-1', typeList: ['1-2', '2-1'] },
        { id: 10007, name: 'Test7', role: 'PM', sex: 'Women', sexList: ['Man', 'Women'], type: '', typeList: [] },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Women', sexList: [], type: '', typeList: ['1-2', '2-1'] }
      ]
    }

    return {
      gridOptions,
      roleEditRender
    }
  },
  created () {
    this.loadSexList()
  },
  methods: {
    // 模拟后端接口
    loadSexList () {
      setTimeout(() => {
        const list: any[] = []
        for (let i = 0; i < 10000; i++) {
          list.push({
            value: `role${i}`,
            label: `角色${i}`
          })
        }
        this.roleEditRender.options = list
      }, 100)
    }
  }
})
</script>
