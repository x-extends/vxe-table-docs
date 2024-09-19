<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  describe: string
  describeHtml: string
  role: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      rowConfig: {
        useKey: true
      },
      columnConfig: {
        useKey: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', sortable: true },
        {
          field: 'describeHtml',
          title: '<span class=red>HTML 标签与筛选</span>',
          type: 'html',
          sortBy: 'describe',
          filters: [
            { label: '包含 aa', value: 'aa' },
            { label: '包含 bb', value: 'bb' }
          ],
          filterMethod  ({ value, row }) {
            return row.describeHtml.indexOf(value) > -1
          }
        },
        { field: 'role', title: '<span class=green>HTML 标签与格式化</span>', type: 'html', showOverflow: true }
      ],
      data: [
        { name: 'xx1', describe: '字母 aa -1', describeHtml: '<span style="color: red">字母 <span style="color: blue">aa</span> -1</span>', role: 'oo1' },
        { name: 'xx2', describe: '字母 bb -2', describeHtml: '<span style="color: blue">字母 <span style="color: green">bb</span> -2</span>', role: 'oo2' },
        { name: 'xx3', describe: '字母 cc -3', describeHtml: '<span style="color: green">字母 <span style="color: red">cc</span> -3</span>', role: 'oo3' },
        { name: 'xx4', describe: '字母 dd -4', describeHtml: '<span style="color: blue">字母 <span style="color: green">dd</span> -4</span>', role: 'oo4' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
