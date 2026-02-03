<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import type { VxeLinkProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const roleCellRender: VxeColumnPropTypes.CellRender<RowVO, VxeLinkProps> = {
      name: 'VxeLink',
      props: {
        href: 'https://vxeui.com?id={row.id}' // href 参数支持字符串模板，可以直接读取 {row,column} 变量
      }
    }

    const addressCellRender: VxeColumnPropTypes.CellRender<RowVO, VxeLinkProps> = {
      name: 'VxeLink',
      props: {
        href: 'https://vxeui.com?id={row.id}&name={row.name}',
        target: '_blank',
        status: 'error'
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'role', title: 'Role', width: 120, cellRender: roleCellRender },
        { field: 'address', title: 'Address', width: 300, cellRender: addressCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions,
      roleCellRender,
      addressCellRender
    }
  }
})
</script>
