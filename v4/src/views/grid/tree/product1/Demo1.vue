<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #product_default="{ row }">
        <div>{{ row.productName }}</div>
        <div>编码：<vxe-text :content="row.productNO" click-to-copy></vxe-text></div>
        <div>品牌：{{ row.brand }}</div>
      </template>

      <template #sku_default="{ row }">
        <div>SKU：<vxe-text :content="row.sku" click-to-copy></vxe-text></div>
        <div>颜色：{{ row.color }}</div>
      </template>

      <template #quantity_default="{ row }">
        <div>价格：￥{{ formatAmount(row.amount) }}</div>
        <div>库存：{{ row.inventory }}</div>
        <div>数量：{{ row.quantity }}</div>
      </template>

      <template #status_default="{ row }">
        <vxe-tag v-if="row.status === 'complete'" status="success" content="已完成"></vxe-tag>
        <vxe-tag v-else-if="row.status === 'cancel'" status="warning" content="已取消"></vxe-tag>
        <vxe-tag v-else-if="row.status === 'pending'" status="error" content="待付款"></vxe-tag>
        <vxe-tag v-else status="info" content="未提交"></vxe-tag>
      </template>

      <template #user_default="{ row }">
        <div>负责人：{{ row.createBy }}</div>
        <div>提交时间：{{ row.createDate }}</div>
        <div>审批人：{{ row.createBy }}</div>
        <div>审批时间：{{ row.createDate }}</div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  parentId: number | null
  productImg: string
  productName: string
  productNO: string
  producType: string
  category: string
  brand: string
  sku: string
  color: string
  status: string
  amount: number
  quantity: number
  inventory: number
  updateBy: string
  updateDate: string
  createBy: string
  createDate: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 800,
  cellConfig: {
    height: 100
  },
  rowConfig: {
    keyField: 'id',
    isHover: true,
    isCurrent: true
  },
  treeConfig: {
    transform: true,
    rowField: 'id',
    parentField: 'parentId'
  },
  columns: [
    { type: 'seq', width: 70 },
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
    { field: 'productName', title: '产品信息', minWidth: 360, treeNode: true, slots: { default: 'product_default' } },
    { field: 'sku', title: 'SKU', minWidth: 180, slots: { default: 'sku_default' } },
    { field: 'quantity', title: '数量', width: 120, slots: { default: 'quantity_default' } },
    { field: 'status', title: '状态', width: 100, slots: { default: 'status_default' } },
    { field: 'createDate', title: '负责人', width: 160, slots: { default: 'user_default' } }
  ],
  data: [
    { id: 10001, parentId: null, productImg: 'https://vxeui.com/resource/productImg/product8.png', productName: '笔记本电脑', productNO: 'X2023653453464565435854', producType: '', brand: '地球第三品牌', category: '笔记本电脑', status: 'failure', sku: '34534456', color: '蓝色', amount: 5600, quantity: 475, inventory: 745, updateBy: '小明', updateDate: '2026-01-02', createBy: '小明', createDate: '2026-01-02' },
    { id: 10002, parentId: null, productImg: 'https://vxeui.com/resource/productImg/product7.png', productName: '台式机', productNO: 'X20236585965676576867876', producType: '', brand: '地球第三品牌', category: '台式机', status: 'pending', sku: '567575675', color: '黑色', amount: 8933, quantity: 210, inventory: 396, updateBy: '老徐', updateDate: '2026-01-01', createBy: '老徐', createDate: '2026-01-01' },
    { id: 10003, parentId: null, productImg: 'https://vxeui.com/resource/productImg/product3.png', productName: '手机', productNO: 'X202365859650245345435', producType: '', brand: '地球第三品牌', category: '手机', status: 'complete', sku: '123424', color: '粉色', amount: 4200, quantity: 666, inventory: 758, updateBy: '张三', updateDate: '2026-01-03', createBy: '张三', createDate: '2026-01-03' },
    { id: 10004, parentId: 10003, productImg: 'https://vxeui.com/resource/productImg/product2.png', productName: '卫星手机', productNO: 'X2023658597578657432543', producType: '', brand: '地球第三品牌', category: '手机', status: 'cancel', sku: '4564564456', color: '灰色', amount: 3500, quantity: 380, inventory: 482, updateBy: '老王', updateDate: '2026-01-01', createBy: '老王', createDate: '2026-01-01' },
    { id: 10005, parentId: 10001, productImg: 'https://vxeui.com/resource/productImg/product7.png', productName: '触摸屏笔记本', productNO: 'X202365823410205224', producType: '', brand: '地球第三品牌', category: '笔记本电脑', status: 'cancel', sku: '67876876', color: '白色', amount: 5760, quantity: 562, inventory: 1052, updateBy: '老六', updateDate: '2026-01-04', createBy: '老六', createDate: '2026-01-04' },
    { id: 10006, parentId: 10003, productImg: 'https://vxeui.com/resource/productImg/product6.png', productName: '四折叠手机', productNO: 'X202365859657896895354', producType: '', brand: '地球第三品牌', category: '手机', status: 'pending', sku: '234234234', color: '灰色', amount: 6800, quantity: 110, inventory: 140, updateBy: '老徐', updateDate: '2026-01-08', createBy: '老徐', createDate: '2026-01-08' },
    { id: 10007, parentId: 10002, productImg: 'https://vxeui.com/resource/productImg/product11.png', productName: '无显卡主机', productNO: 'X20236585965824535443543', producType: '', brand: '地球第三品牌', category: '台式机', status: 'complete', sku: '45645654646', color: '黑色', amount: 9990, quantity: 200, inventory: 500, updateBy: '老王', updateDate: '2026-01-11', createBy: '老王', createDate: '2026-01-11' },
    { id: 10008, parentId: null, productImg: 'https://vxeui.com/resource/productImg/product7.png', productName: '显示器', productNO: 'X20236554738756876753453', producType: '', brand: '地球第三品牌', category: '显示器', status: 'complete', sku: '678768678678', color: '银色', amount: 1200, quantity: 98, inventory: 132, updateBy: '小红', updateDate: '2026-01-08', createBy: '小红', createDate: '2026-01-08' },
    { id: 10009, parentId: 10003, productImg: 'https://vxeui.com/resource/productImg/product4.png', productName: '折叠手机', productNO: 'X2023652344756876578789', producType: '', brand: '地球第三品牌', category: '手机', status: 'cancel', sku: '32543543', color: '绿色', amount: 2400, quantity: 758, inventory: 820, updateBy: '老徐', updateDate: '2026-01-23', createBy: '老徐', createDate: '2026-01-23' },
    { id: 10010, parentId: 10001, productImg: 'https://vxeui.com/resource/productImg/product5.png', productName: '双折叠笔记本', productNO: 'X20236586789088096547', producType: '', brand: '地球第三品牌', category: '笔记本电脑', status: 'failure', sku: '6575676575', color: '银色', amount: 7200, quantity: 69, inventory: 204, updateBy: '老六', updateDate: '2026-01-10', createBy: '老六', createDate: '2026-01-10' },
    { id: 10011, parentId: 10008, productImg: 'https://vxeui.com/resource/productImg/product1.png', productName: '32寸显示器', productNO: 'X20236585932540987768', producType: '', brand: '地球第三品牌', category: '显示器', status: 'complete', sku: '8768768768', color: '黑色', amount: 860, quantity: 165, inventory: 425, updateBy: '李四', updateDate: '2026-01-22', createBy: '李四', createDate: '2026-01-22' },
    { id: 10012, parentId: 10002, productImg: 'https://vxeui.com/resource/productImg/product11.png', productName: '64G独显主机', productNO: 'X20236585963453654567678', producType: '', brand: '地球第三品牌', category: '台式机', status: 'cancel', sku: '567567756', color: '白色', amount: 13400, quantity: 100, inventory: 436, updateBy: '张三', updateDate: '2026-01-18', createBy: '张三', createDate: '2026-01-18' },
    { id: 10013, parentId: 10008, productImg: 'https://vxeui.com/resource/productImg/product4.png', productName: '24寸显示器', productNO: 'X202365853455677887698790', producType: '', brand: '地球第三品牌', category: '显示器', status: 'pending', sku: '1233123', color: '黑色', amount: 1022, quantity: 39, inventory: 1000, updateBy: '老徐', updateDate: '2026-01-17', createBy: '老徐', createDate: '2026-01-17' },
    { id: 10014, parentId: 10001, productImg: 'https://vxeui.com/resource/productImg/product6.png', productName: '虚拟键盘笔记本', productNO: 'X202365807645670879', producType: '', brand: '地球第三品牌', category: '笔记本电脑', status: 'complete', sku: '4568787', color: '银色', amount: 11000, quantity: 369, inventory: 2000, updateBy: '李四', updateDate: '2026-01-15', createBy: '李四', createDate: '2026-01-15' }
  ]
})

const formatAmount = (num: number) => {
  return XEUtils.commafy(num)
}
</script>
