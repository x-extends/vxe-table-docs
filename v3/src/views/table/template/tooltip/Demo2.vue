<template>
  <div>
    <vxe-table
      height="300"
      showOverflow
      showHeaderOverflow
      showFooterOverflow
      showFooter
      :tooltip-config="tooltipConfig"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="名称"></vxe-column>
      <vxe-column field="role" title="角色"></vxe-column>
      <vxe-column field="date" title="日期日期日期日期日期日期日期日期日期" width="200"></vxe-column>
      <vxe-column field="rate" title="Rate"></vxe-column>
      <vxe-column field="address" title="地址地址地址地址地址地址地址地址地址地址" width="200"></vxe-column>

      <template #header-tooltip="{ column }">
        <div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
          <div style="color: red;">自定义表头：{{ column.title }}</div>
        </div>
      </template>
      <template #tooltip="{ row, column }">
        <div style="width: 800px;">
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
        </div>
      </template>
      <template #footer-tooltip="{ row, column }">
        <div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
          <div style="color: chartreuse">自定义表尾：{{ row[column.field] }}</div>
        </div>
      </template>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  date: string
  rate: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { name: 'Test1', role: '前端', date: '2020-02-14', rate: 5, address: 'address1' },
      { name: 'Test2', role: '后端', date: '2020-02-22', rate: 2, address: 'address1' },
      { name: 'Test3', role: '前端', date: '2020-01-01', rate: 0, address: '深圳市深圳市深圳市深圳市深圳市深圳市' },
      { name: 'Test4', role: '设计师', date: '2020-02-23', rate: 1, address: '上海市上海市上海市上海市上海市上海市' },
      { name: 'Test5', role: '前端', date: '2020-01-20', rate: 3, address: '广州市广州市广州市广州市广州市广州市广州市广州市广州市' }
    ]

    const footerData = [
      { seq: '合计', date: '2020-02-23', rate: '123456789123456789123456789123456789' }
    ]

    const tooltipConfig: VxeTablePropTypes.TooltipConfig<RowVO> = {
      enterable: true,
      maxWidth: 400,
      maxHeight: 300
    }

    return {
      tableData,
      footerData,
      tooltipConfig
    }
  }
})
</script>
