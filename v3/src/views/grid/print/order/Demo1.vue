<template>
  <div>
    <vxe-button @click="printEvent">点击打印</vxe-button>

    <div style="border: 1px solid #409eff; padding: 16px">
      <div ref="topElRef">
        <div style="margin-bottom: 8px;">
          <div style="display: inline-block;width: 100%;">
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">商品名称：Vxe 企业授权</div>
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">发货单号：X2665847132654</div>
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">发货日期：2024-12-01</div>
          </div>
          <div style="display: inline-block;width: 100%;">
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">收货姓名：小徐</div>
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">收货地址：火星第七区18号001</div>
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">联系电话：10086</div>
          </div>
        </div>
      </div>

      <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>

      <div ref="bottomElRef">
        <div style="margin-top: 30px;text-align: right;">
          <div style="display: inline-block;width: 100%;">
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;"></div>
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">创建人：小徐</div>
            <div style="float: left; width: 33.33%;height: 28px;line-height: 28px;">创建日期：2024-12-01</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  code: string
  price: number
  taxRate: string
  num: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      columns: [
        { type: 'seq', width: 60 },
        { field: 'name', title: '名称' },
        { field: 'code', title: '编码' },
        { field: 'num', title: '数量' },
        { field: 'price', title: '价格' },
        { field: 'taxRate', title: '税率' }
      ],
      data: [
        { id: 10001, name: '筛选插件', code: 'T1', price: 1200, num: 1, taxRate: '3%' },
        { id: 10002, name: '区域选取插件', code: 'T2', price: 16840, num: 3, taxRate: '3%' },
        { id: 10003, name: '单元格选取插件', code: 'T3', price: 8460, num: 3, taxRate: '3%' },
        { id: 10004, name: 'Excel 筛选插件', code: 'T4', price: 980, num: 2, taxRate: '3%' },
        { id: 10005, name: '零代码平台模板', code: 'T5', price: 23199, num: 5, taxRate: '3%' },
        { id: 10006, name: '后台管理系统模板', code: 'T6', price: 899, num: 7, taxRate: '3%' },
        { id: 10007, name: '低代码设计器插件', code: 'T7', price: 1688, num: 4, taxRate: '3%' },
        { id: 10008, name: '可视化拖拽插件', code: 'T8', price: 1299, num: 4, taxRate: '3%' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    async printEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const printRest = await $grid.getPrintHtml()
        const topEl = this.$refs.topElRef as HTMLDivElement
        const bottomEl = this.$refs.bottomElRef as HTMLDivElement
        const topHtml = topEl ? topEl.innerHTML : ''
        const bottomHtml = bottomEl ? bottomEl.innerHTML : ''
        VxeUI.print({
          title: '出货单据',
          pageBreaks: [
            // 第一页
            {
              bodyHtml: topHtml + printRest.html + bottomHtml
            }
          ]
        })
      }
    }
  }
})
</script>
