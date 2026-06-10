<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #status_default="{ row }">
        <vxe-tag v-if="row.status === 'complete'" status="success" content="已完成"></vxe-tag>
        <vxe-tag v-else-if="row.status === 'cancel'" status="warning" content="已取消"></vxe-tag>
        <vxe-tag v-else-if="row.status === 'pending'" status="error" content="待付款"></vxe-tag>
        <vxe-tag v-else status="info" content="未提交"></vxe-tag>
      </template>

      <template #expand_default="{ row }">
        <div>{{ row.productName }}</div>
        <div>编码：<vxe-text :content="row.productNO" click-to-copy></vxe-text></div>
        <div>品牌：{{ row.brand }}</div>
      </template>

      <template #sku_default="{ row }">
        <div>SKU：<vxe-text :content="row.sku" click-to-copy></vxe-text></div>
        <div>颜色：{{ row.color }}</div>
      </template>

      <template #quantity_default="{ row }">
        <div>库存：{{ row.inventory }}</div>
        <div>数量：{{ row.quantity }}</div>
      </template>

      <template #user_default="{ row }">
        <div>负责人：{{ row.createBy }}</div>
        <div>提交时间：{{ row.createDate }}</div>
        <div>审批人：{{ row.createBy }}</div>
        <div>审批时间：{{ row.createDate }}</div>
      </template>

      <template #expand_content="{ row }">
        <vxe-grid v-bind="subGridOptions" :data="row.detailedList">
          <template #order_name_default="{ row: subRow }">
            <div>{{ subRow.orderName }}</div>
            <div>编码：<vxe-text :content="subRow.orderNO" click-to-copy></vxe-text></div>
            <div>型号：<vxe-text :content="subRow.orderCode" click-to-copy></vxe-text></div>
            <div>品牌：{{ subRow.orderType }}</div>
          </template>

          <template #amount_default="{ row: subRow }">
            <div>价格：￥{{ formatAmount(subRow.amount) }}</div>
            <div>数量：{{ subRow.quantity }}</div>
          </template>

          <template #user_default="{ row: subRow }">
            <div>提交人：{{ subRow.createBy }}</div>
            <div>提交时间：{{ subRow.createDate }}</div>
            <div>修改人：{{ subRow.createBy }}</div>
            <div>修改时间：{{ subRow.createDate }}</div>
          </template>
        </vxe-grid>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface DetailVO {
  orderImg: string
  orderName: string
  orderNO: string
  orderCode: string
  orderType: string
  amount: number
  quantity: number
  updateBy: string
  updateDate: string
  createBy: string
  createDate: string
}

interface RowVO {
  id: number
  productImg: string
  productName: string
  productNO: string
  brand: string
  sku: string
  color: string
  status: string
  quantity: number
  inventory: number
  updateBy: string
  updateDate: string
  createBy: string
  createDate: string
  detailedList: DetailVO[]
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 800,
      rowConfig: {
        keyField: 'id',
        isHover: true,
        isCurrent: true
      },
      expandConfig: {
        padding: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'productNO', title: '产品编号', type: 'expand', minWidth: 320, slots: { default: 'expand_default', content: 'expand_content' } },
        {
          field: 'productImg',
          title: '图片',
          width: 100,
          cellRender: {
            name: 'VxeImage',
            props: {
              width: 80,
              height: 80
            }
          }
        },
        { field: 'sku', title: 'SKU', minWidth: 180, slots: { default: 'sku_default' } },
        { field: 'quantity', title: '数量', width: 120, slots: { default: 'quantity_default' } },
        { field: 'status', title: '状态', width: 100, slots: { default: 'status_default' } },
        { field: 'createBy', title: '负责人', width: 220, slots: { default: 'user_default' } }
      ],
      data: [
        {
          id: 10001,
          productImg: 'https://vxeui.com/resource/productImg/product11.png',
          productName: '笔记本电脑',
          productNO: 'X202365859658869897135854',
          brand: '地球第三品牌',
          status: 'complete',
          sku: '6954872145',
          color: '灰色',
          quantity: 46,
          inventory: 299,
          updateBy: '老徐',
          updateDate: '2026-01-01',
          createBy: '老徐',
          createDate: '2026-01-01',
          detailedList: [
            { orderImg: 'https://vxeui.com/resource/productImg/product3.png', orderName: '火星折叠笔记本', orderNO: 'X30233454565', orderCode: 'DOJ8', orderType: '地球第三品牌', amount: 6900, quantity: 24, updateBy: '老徐', updateDate: '2026-01-05', createBy: '老徐', createDate: '2026-01-05' },
            { orderImg: 'https://vxeui.com/resource/productImg/product2.png', orderName: '月球超级笔记本', orderNO: 'X30233658020', orderCode: 'FRG4', orderType: '', amount: 6900, quantity: 24, updateBy: '老王', updateDate: '2026-01-01', createBy: '老王', createDate: '2026-01-01' },
            { orderImg: 'https://vxeui.com/resource/productImg/product4.png', orderName: '地球意念笔记本', orderNO: 'X30024536568', orderCode: 'SEFD32', orderType: '地球第二品牌', amount: 6900, quantity: 24, updateBy: '小红', updateDate: '2026-01-03', createBy: '小红', createDate: '2026-01-03' }
          ]
        },
        {
          id: 10002,
          productImg: 'https://vxeui.com/resource/productImg/product10.png',
          productName: '手机',
          productNO: 'X2023658596545685633241332',
          brand: '地球第四品牌',
          status: 'cancel',
          sku: '234456567',
          color: '黑色',
          quantity: 15,
          inventory: 186,
          updateBy: '小明',
          updateDate: '2026-01-03',
          createBy: '小明',
          createDate: '2026-01-03',
          detailedList: [
            { orderImg: 'https://vxeui.com/resource/productImg/product7.png', orderName: '火星透视手机', orderNO: 'X30207598632', orderCode: 'JUKI8', orderType: '地球第二品牌', amount: 4900, quantity: 68, updateBy: '小明', updateDate: '2026-01-08', createBy: '小明', createDate: '2026-01-08' },
            { orderImg: 'https://vxeui.com/resource/productImg/product12.png', orderName: '火星意念手机', orderNO: 'X30201254365', orderCode: 'DFGFDSG2', orderType: '地球第二品牌', amount: 4900, quantity: 68, updateBy: '李四', updateDate: '2026-01-01', createBy: '李四', createDate: '2026-01-01' },
            { orderImg: 'https://vxeui.com/resource/productImg/product10.png', orderName: '月球折叠手机', orderNO: 'X01235435454', orderCode: 'SDFSD5', orderType: '地球第三品牌', amount: 4900, quantity: 68, updateBy: '老徐', updateDate: '2026-01-03', createBy: '老徐', createDate: '2026-01-03' },
            { orderImg: 'https://vxeui.com/resource/productImg/product9.png', orderName: '地球触摸手机', orderNO: 'X75000525352', orderCode: 'QSDS3D', orderType: '地球第二品牌', amount: 4900, quantity: 68, updateBy: '老刘', updateDate: '2026-01-04', createBy: '老刘', createDate: '2026-01-04' },
            { orderImg: 'https://vxeui.com/resource/productImg/product8.png', orderName: '地球红外手机', orderNO: 'X20003545425', orderCode: 'BNMO90', orderType: '地球第三品牌', amount: 4900, quantity: 68, updateBy: '老徐', updateDate: '2026-01-02', createBy: '老徐', createDate: '2026-01-02' }
          ]
        },
        {
          id: 10003,
          productImg: 'https://vxeui.com/resource/productImg/product7.png',
          productName: '显示器',
          productNO: 'X2023658596500456378578568',
          brand: '地球第二品牌',
          status: 'pending',
          sku: '5672345',
          color: '蓝色',
          quantity: 86,
          inventory: 386,
          updateBy: '老王',
          updateDate: '2026-01-05',
          createBy: '老王',
          createDate: '2026-01-05',
          detailedList: [
            { orderImg: 'https://vxeui.com/resource/productImg/product1.png', orderName: '火星128k超级显示器', orderNO: 'X96786522455', orderCode: 'DSFG34', orderType: '地球第三品牌', amount: 990, quantity: 43, updateBy: '老徐', updateDate: '2026-01-09', createBy: '老徐', createDate: '2026-01-09' },
            { orderImg: 'https://vxeui.com/resource/productImg/product6.png', orderName: '地球16k显示器', orderNO: 'X3478502552', orderCode: 'SDFG4', orderType: '地球第二品牌', amount: 990, quantity: 43, updateBy: '张三', updateDate: '2026-01-07', createBy: '张三', createDate: '2026-01-07' }
          ]
        }
      ]
    }

    const subGridOptions: VxeGridProps<DetailVO> = {
      border: true,
      cellConfig: {
        height: 100
      },
      rowConfig: {
        isHover: true
      },
      columns: [
        {
          field: 'orderImg',
          title: '图片',
          width: 100,
          cellRender: {
            name: 'VxeImage',
            props: {
              width: 80,
              height: 80
            }
          }
        },
        { field: 'orderName', title: '商品信息', minWidth: 140, slots: { default: 'order_name_default' } },
        { field: 'amount', title: '价格', width: 160, slots: { default: 'amount_default' } },
        { field: 'createBy', title: '提交人', width: 240, slots: { default: 'user_default' } }
      ]
    }

    return {
      gridOptions,
      subGridOptions
    }
  },
  methods: {
    formatAmount (num: number) {
      return XEUtils.commafy(num)
    }
  }
})
</script>
