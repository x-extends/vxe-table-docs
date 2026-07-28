<template>
  <div>
    表头：<vxe-radio-group v-model="headerTooltipConfig.mode">
      <vxe-radio-button checked-value="tooltip" content="tooltip"></vxe-radio-button>
      <vxe-radio-button checked-value="title" content="title"></vxe-radio-button>
      <vxe-radio-button checked-value="ellipsis" content="ellipsis"></vxe-radio-button>
    </vxe-radio-group>
    表体：<vxe-radio-group v-model="tooltipConfig.mode">
      <vxe-radio-button checked-value="tooltip" content="tooltip"></vxe-radio-button>
      <vxe-radio-button checked-value="title" content="title"></vxe-radio-button>
      <vxe-radio-button checked-value="ellipsis" content="ellipsis"></vxe-radio-button>
    </vxe-radio-group>
    表尾：<vxe-radio-group v-model="footerTooltipConfig.mode">
      <vxe-radio-button checked-value="tooltip" content="tooltip"></vxe-radio-button>
      <vxe-radio-button checked-value="title" content="title"></vxe-radio-button>
      <vxe-radio-button checked-value="ellipsis" content="ellipsis"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  date: string
  rate: number
  address: string
}

export default Vue.extend({
  data () {
    const tooltipConfig: VxeTablePropTypes.TooltipConfig<RowVO> = {
      mode: 'tooltip'
    }

    const headerTooltipConfig: VxeTablePropTypes.HeaderTooltipConfig<RowVO> = {
      mode: 'tooltip'
    }

    const footerTooltipConfig: VxeTablePropTypes.FooterTooltipConfig<RowVO> = {
      mode: 'tooltip'
    }

    const gridOptions: VxeGridProps<RowVO> = {
      height: 300,
      showFooter: true,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      tooltipConfig,
      headerTooltipConfig,
      footerTooltipConfig,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: '名称', minWidth: 140 },
        { field: 'role', title: '角色' },
        { field: 'date', title: '日期日期日期日期日期日期日期日期日期日期日期日期日期', width: 200 },
        { field: 'rate', title: 'Rate' },
        { field: 'address', title: '地址', width: 200 }
      ],
      data: [
        { name: 'Test1', role: '前端', date: '2020-02-14', rate: 5, address: '地址 地址 地址地址地址 地址 地址地址' },
        { name: 'Test2', role: '后端', date: '2020-02-22', rate: 2, address: '地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址' },
        { name: 'Test3', role: '前端', date: '2020-01-01', rate: 0, address: '地址 地址 地址' },
        { name: 'Test4', role: '设计师', date: '2020-02-23', rate: 1, address: '地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址' },
        { name: 'Test5', role: '前端', date: '2020-01-20', rate: 3, address: '地址 地址 地址 地址 地址地址' }
      ],
      footerData: [
        { seq: '合计', name: '111111111111', rate: '3333333333333333333333333333333333333333', address: '222222222222222222222222222222222222222222222222222222222222222222222222222222222' }
      ]
    }

    return {
      gridOptions,
      tooltipConfig,
      headerTooltipConfig,
      footerTooltipConfig
    }
  }
})
</script>
