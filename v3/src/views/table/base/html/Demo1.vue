<template>
  <div>
    <vxe-table
      border
      height="400"
      :column-config="{useKey: true}"
      :row-config="{useKey: true}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="describeHtml" title="<span class=red>HTML 标签与筛选</span>" type="html" sort-by="describe" sortable :filters="htmlOptions" :filter-method="filterDescribeMethod"></vxe-column>
      <vxe-column field="role" type="html" title="<span class=green>HTML 标签与格式化</span>" :formatter="formatRole"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  name: string
  describe: string
  describeHtml: string
  role: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { name: 'xx1', describe: '字母 aa -1', describeHtml: '<span style="color: red">字母 <span style="color: blue">aa</span> -1</span>', role: 'oo1' },
      { name: 'xx2', describe: '字母 bb -2', describeHtml: '<span style="color: blue">字母 <span style="color: green">bb</span> -2</span>', role: 'oo2' },
      { name: 'xx3', describe: '字母 cc -3', describeHtml: '<span style="color: green">字母 <span style="color: red">cc</span> -3</span>', role: 'oo3' },
      { name: 'xx4', describe: '字母 dd -4', describeHtml: '<span style="color: blue">字母 <span style="color: green">dd</span> -4</span>', role: 'oo4' }
    ]

    const htmlOptions = [
      { label: '包含 aa', value: 'aa' },
      { label: '包含 bb', value: 'bb' }
    ]

    const formatRole: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
      return `<a href="https://github.com/x-extends/vxe-table" class="link" target="_black" style="color: orange">链接 ${cellValue}</a>`
    }

    const filterDescribeMethod: VxeColumnPropTypes.FilterMethod<RowVO> = ({ value, row }) => {
      return row.describeHtml.indexOf(value) > -1
    }

    return {
      tableData,
      htmlOptions,
      formatRole,
      filterDescribeMethod
    }
  }
})
</script>
