<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-table'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      columns: [],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop' },
        { id: 10002, name: 'Test2', role: 'Test' },
        { id: 10003, name: 'Test3', role: 'PM' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    clickEvent  (params) {
      VxeUI.modal.message({
        content: `点击了 ${params.name}`,
        status: 'success'
      })
    }
  },
  created () {
    this.gridOptions.columns = [
      { type: 'seq', width: 70 },
      { field: 'name', title: 'Name', minWidth: 200 },
      {
        title: '按钮组',
        width: 200,
        slots: {
          default: () => {
            return <vxe-button-group mode="text" onClick={this.clickEvent}>
              <vxe-button name="del">查看</vxe-button>
              <vxe-button status="error" name="error">删除</vxe-button>
            </vxe-button-group>
          }
        }
      }
    ]
  }
})
</script>
