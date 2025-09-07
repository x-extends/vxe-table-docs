<template>
  <div>
    <vxe-table
      show-overflow
      show-footer
      height="300"
      :row-config="{useKey: true}"
      :column-config="{useKey: true}"
      :footer-data="footerData"
      :tooltip-config="tooltipConfig"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" width="160"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'GuangzhouGuangzhou Guangzhou GuangzhouGuangzhouGuangzhouGuangzhou Guangzhou GuangzhouGuangzhouGuangzhouGuangzhou Guangzhou GuangzhouGuangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai ShanghaiShanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 57, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai' },
      { id: 10005, name: 'Test5', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai ' },
      { id: 10006, name: 'Test6', role: 'Develop', sex: 'Women', age: 39, address: 'shengzhen shengzhen shengzhen shengzhen shengzhen' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 36, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai ShGuangzhouGuangzhouhai Shanghai Shanghai' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Women', age: 45, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Sghai Shanghai Shanghai Shanghai Shanghai' }
    ]

    const tooltipConfig: VxeTablePropTypes.TooltipConfig<RowVO> = {
      enterable: true,
      maxWidth: 200,
      maxHeight: 100
    }

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', role: 'Develop', age: 3 }
    ]

    return {
      tooltipConfig,
      tableData,
      footerData
    }
  }
})
</script>
