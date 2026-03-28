<template>
  <div>
    鼠标进入：<vxe-switch v-model="tooltipConfig.enterable"></vxe-switch>

    默认方向：<vxe-radio-group v-model="tooltipConfig.defaultPlacement">
      <vxe-radio-button checked-value="top" content="向上"></vxe-radio-button>
      <vxe-radio-button checked-value="bottom" content="向下"></vxe-radio-button>
    </vxe-radio-group>

    最大宽：<vxe-radio-group v-model="tooltipConfig.maxWidth">
      <vxe-radio-button :checked-value="200" content="200"></vxe-radio-button>
      <vxe-radio-button :checked-value="300" content="300"></vxe-radio-button>
      <vxe-radio-button :checked-value="500" content="500"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid v-bind="gridOptions">
      <template #headerAge>
        <span>ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tooltipConfig = reactive<VxeTablePropTypes.TooltipConfig<RowVO>>({
  enterable: true,
  defaultPlacement: 'bottom',
  maxWidth: 300
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 500,
  rowConfig: {
    useKey: true,
    isHover: true
  },
  columnConfig: {
    useKey: true
  },
  headerTooltipConfig: {
    enterable: false
  },
  tooltipConfig,
  footerTooltipConfig: {
    enterable: false
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: '名称' },
    { field: 'role', title: '长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题长标题' },
    { field: 'sex', title: 'Sex' },
    {
      title: '基本信息',
      children: [
        { field: 'age', slots: { header: 'headerAge' } },
        {
          title: '详细信息',
          children: [
            { type: 'html', field: 'address', title: '详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息', width: 160 }
          ]
        }
      ]
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'GuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhouGuangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'ShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghaiShanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
  ],
  footerData: [
    { seq: '合计', role: '长文本长文本长文本长文本长文本长文本', sex: '11111111111111111111111111111111111111111111111111111111' }
  ]
})
</script>
