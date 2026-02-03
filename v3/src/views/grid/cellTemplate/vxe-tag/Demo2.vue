<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  status: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: 300,
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        {
          field: 'status',
          title: '标签',
          width: 300,
          slots: {
            default: () => {
              return <span>
            <vxe-tag status="info">未开始</vxe-tag>
            <vxe-tag status="success">已完成</vxe-tag>
            <vxe-tag status="primary">待处理</vxe-tag>
            <vxe-tag status="error">已驳回</vxe-tag>
          </span>
            }
          }
        }
      ],
      data: [
        { id: 10001, name: 'Test1', status: '1' },
        { id: 10002, name: 'Test2', status: '2' },
        { id: 10003, name: 'Test3', status: '3' },
        { id: 10004, name: 'Test4', status: '2' },
        { id: 10005, name: 'Test5', status: '2' },
        { id: 10006, name: 'Test6', status: '3' },
        { id: 10007, name: 'Test7', status: '1' },
        { id: 10008, name: 'Test8', status: '1' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
