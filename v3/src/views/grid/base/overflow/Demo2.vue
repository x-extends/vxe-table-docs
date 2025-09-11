<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #headerAge>
        <span>ffffffffffffffffffffffffffffffffffffffffffffffffffff</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
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
      tooltipConfig: {
        enterable: true
      },
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
    }

    return {
      gridOptions
    }
  }
})
</script>
