<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #action>
        <vxe-button mode="text" @click="viewEvent">查看</vxe-button>
        <vxe-button mode="text" status="error" @click="delEvent">删除</vxe-button>
        <vxe-button mode="text" content="更多">
          <template #dropdowns>
            <vxe-button mode="text" @click="downloadEvent">下载</vxe-button>
            <vxe-button mode="text">导出数据</vxe-button>
            <vxe-button mode="text">导入数据</vxe-button>
          </template>
        </vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
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
      height: 300,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { title: '按钮', width: 200, slots: { default: 'action' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop' },
        { id: 10002, name: 'Test2', role: 'Test' },
        { id: 10003, name: 'Test3', role: 'PM' },
        { id: 10004, name: 'Test4', role: 'PM' },
        { id: 10005, name: 'Test5', role: 'Develop' },
        { id: 10006, name: 'Test6', role: 'Test' },
        { id: 10007, name: 'Test7', role: 'Test' },
        { id: 10008, name: 'Test8', role: 'Develop' },
        { id: 10009, name: 'Test9', role: 'Develop' },
        { id: 100010, name: 'Test10', role: 'PM' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    viewEvent () {
      VxeUI.modal.message({
        content: '点击了查看',
        status: 'success'
      })
    },
    delEvent () {
      VxeUI.modal.confirm({
        title: '操作提示',
        content: '请您确认是否删除？'
      })
    },
    downloadEvent () {
      VxeUI.modal.message({
        content: '点击了下载',
        status: 'success'
      })
    }
  }
})
</script>
