<template>
  <div>
    <vxe-table
      border
      show-footer
      show-overflow
      show-header-overflow
      show-footer-overflow
      height="500"
      :row-config="{useKey: true, isHover: true}"
      :column-config="{useKey: true}"
      :tooltip-config="tooltipConfig"
      :header-tooltip-config="headerTooltipConfig"
      :footer-tooltip-config="footerTooltipConfig"
      :footer-data="footerData"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="名称"></vxe-column>
      <vxe-column field="role" title="长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
      <vxe-colgroup title="基本信息">
        <vxe-colgroup field="age">
          <template #header>
            <span>ffffffffffffffffffffffffffffffffffffffffffffffffffff</span>
          </template>
        </vxe-colgroup>
        <vxe-colgroup title="详细信息">
          <vxe-column type="html" field="address" title="详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息" width="160"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
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
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'GuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'ShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
    ]

    const headerTooltipConfig: VxeTablePropTypes.HeaderTooltipConfig<RowVO> = {
      enterable: false
    }

    const tooltipConfig: VxeTablePropTypes.TooltipConfig<RowVO> = {
      enterable: false
    }

    const footerTooltipConfig: VxeTablePropTypes.FooterTooltipConfig<RowVO> = {
      enterable: false
    }

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', role: '长文本长文本长文本长文本长文本长文本', sex: '11111111111111111111111111111111111111111111111111111111' }
    ]

    return {
      tableData,
      tooltipConfig,
      headerTooltipConfig,
      footerTooltipConfig,
      footerData
    }
  }
})
</script>
