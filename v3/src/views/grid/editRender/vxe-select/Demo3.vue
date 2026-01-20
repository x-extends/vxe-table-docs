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
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
      ]
    }

    return {
      gridOptions,
      roleEditRender
    }
  },
  created () {
    // 模拟后端接口
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
})
</script>
