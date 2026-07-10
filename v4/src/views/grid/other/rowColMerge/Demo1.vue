<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  sku: string
  productName: string
  categoryLevel1: string
  categoryLevel2: string
  categoryLevel3: string
  currency: string
  price: number
  color: string
  size: string
  quantity : number
  createDate: string
  updateDate: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 800,
  border: true,
  columnConfig: {
    resizable: true
  },
  columns: [
    {
      title: '分类',
      children: [
        { field: 'categoryLevel1', title: '一级分类', width: 120 },
        { field: 'categoryLevel2', title: '二级分类', width: 120 },
        { field: 'categoryLevel3', title: '三级分类', width: 120 }
      ]
    },
    {
      title: '商品信息',
      children: [
        { field: 'productName', title: '名称', minWidth: 200 },
        { field: 'sku', title: 'SKU', width: 160 },
        { field: 'price', title: '价格', width: 120 },
        { field: 'quantity', title: '数量', width: 120 },
        { field: 'currency', title: '货币', width: 120 },
        {
          title: '款式',
          children: [
            { field: 'color', title: '颜色', width: 120 },
            { field: 'size', title: '尺寸编码', width: 120 }
          ]
        }
      ]
    },
    { field: 'updateDate', title: '更新时间', width: 120 },
    { field: 'createDate', title: '创建时间', width: 120 }
  ],
  data: [
    { id: 10001, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: 'T恤', productName: '纯棉T恤M894', sku: '2345346546', price: 998, quantity: 32, color: '黑色', size: 'XL', currency: 'rmb', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10002, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: 'T恤', productName: '印花T恤J78', sku: '5676575677567', price: 1203, quantity: 42, color: '红色', size: 'M', currency: 'rmb', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10003, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: 'T恤', productName: '圆领T恤V56', sku: '768768678686', price: 123, quantity: 12, color: '白色', size: 'L', currency: 'rmb', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10004, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: '羽绒服', productName: '薄款羽绒服E1243', sku: '4234324324324', price: 300, quantity: 78, color: '灰色', size: 'XXXL', currency: 'usd', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10005, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: '羽绒服', productName: '厚款羽绒服T56435', sku: '435438797', price: 200, quantity: 60, color: '白色', size: 'XXL', currency: 'usd', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10006, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: '短袖', productName: '印花短袖O76', sku: '1232138908900', price: 425, quantity: 86, color: '蓝色', size: 'L', currency: 'rmb', updateDate: '2026-03-05', createDate: '2026-03-20' },
    { id: 10007, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: '短袖', productName: '运动短袖R45', sku: '23454654356889', price: 125, quantity: 77, color: '紫色', size: 'XXXXL', currency: 'usd', updateDate: '2026-11-05', createDate: '2026-11-20' },
    { id: 10008, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: '短袖', productName: '速干短袖R45', sku: '7802354345568', price: 255, quantity: 66, color: '橙色', size: 'L', currency: 'rmb', updateDate: '2026-10-05', createDate: '2026-10-20' },
    { id: 10009, categoryLevel1: '服装', categoryLevel2: '男装', categoryLevel3: '长袖', productName: '纯棉长袖Y7f', sku: '23434665787097', price: 236, quantity: 85, color: '白色', size: 'XXXL', currency: 'usd', updateDate: '2026-02-03', createDate: '2026-02-03' },
    { id: 10010, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: 'T恤', productName: '纯棉T恤C583', sku: '43543556797234', price: 758, quantity: 12, color: '灰色', size: 'L', currency: 'rmb', updateDate: '2026-09-05', createDate: '2026-09-20' },
    { id: 10011, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: 'T恤', productName: '超短T恤K847', sku: '54367567809081243', price: 468, quantity: 14, color: '红色', size: 'XXXL', currency: 'usd', updateDate: '2026-11-02', createDate: '2026-11-02' },
    { id: 10012, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: '长袖', productName: '纯棉长袖V7854', sku: '34565779800867', price: 568, quantity: 25, color: '白色', size: 'L', currency: 'rmb', updateDate: '2026-12-05', createDate: '2026-12-20' },
    { id: 10013, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: '长袖', productName: '运动款长袖J834', sku: '32443216578090534', price: 369, quantity: 24, color: '紫色', size: 'M', currency: 'rmb', updateDate: '2026-08-05', createDate: '2026-08-20' },
    { id: 10014, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: '长袖', productName: '印花长袖C674', sku: '657897124535400', price: 147, quantity: 65, color: '橙色', size: 'XXXXL', currency: 'rmb', updateDate: '2026-06-07', createDate: '2026-05-27' },
    { id: 10015, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: '羽绒服', productName: '超薄羽绒服C743', sku: '2342344567659345', price: 258, quantity: 34, color: '蓝色', size: 'XXXL', currency: 'usd', updateDate: '2027-06-05', createDate: '2027-05-20' },
    { id: 10016, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: '羽绒服', productName: '特厚羽绒服Z746', sku: '122459800980965', price: 80, quantity: 44, color: '黑色', size: 'XXL', currency: 'rmb', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10017, categoryLevel1: '服装', categoryLevel2: '女装', categoryLevel3: '羽绒服', productName: '超轻羽绒服K847', sku: '324324890435356', price: 60, quantity: 55, color: '灰色', size: 'L', currency: 'rmb', updateDate: '2026-07-05', createDate: '2026-07-20' },
    { id: 10018, categoryLevel1: '家电', categoryLevel2: '冰箱', categoryLevel3: '160升', productName: '160升大冰箱H8764', sku: '34657687934256457', price: 2354, quantity: 77, color: '橙色', size: 'XXL', currency: 'usd', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10019, categoryLevel1: '家电', categoryLevel2: '冰箱', categoryLevel3: '160升', productName: '160升省电冰箱D768', sku: '32454366540901', price: 3250, quantity: 81, color: '白色', size: 'M', currency: 'usd', updateDate: '2026-06-01', createDate: '2026-05-05' },
    { id: 10020, categoryLevel1: '家电', categoryLevel2: '冰箱', categoryLevel3: '90升', productName: '90升小冰箱F456', sku: '1214355460980', price: 1000, quantity: 99, color: '黑色', size: 'XXXXL', currency: 'rmb', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10021, categoryLevel1: '家电', categoryLevel2: '冰箱', categoryLevel3: '90升', productName: '90升便捷冰箱H6754', sku: '948239017423743472', price: 3520, quantity: 97, color: '红色', size: 'XXL', currency: 'usd', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10022, categoryLevel1: '家电', categoryLevel2: '洗衣机', categoryLevel3: '滚筒', productName: '高端滚筒洗衣机H847', sku: '1045671345436577', price: 5060, quantity: 10, color: '橙色', size: 'L', currency: 'rmb', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10023, categoryLevel1: '家电', categoryLevel2: '洗衣机', categoryLevel3: '滚筒', productName: '普通滚筒洗衣机B8743', sku: '12000234645456', price: 3250, quantity: 9, color: '紫色', size: 'XXXXL', currency: 'rmb', updateDate: '2026-09-11', createDate: '2026-09-15' },
    { id: 10024, categoryLevel1: '家电', categoryLevel2: '洗衣机', categoryLevel3: '波轮', productName: '家用波轮洗衣机J984', sku: '3804354351435243', price: 5000, quantity: 19, color: '白色', size: 'XXL', currency: 'usd', updateDate: '2026-08-10', createDate: '2026-08-11' },
    { id: 10025, categoryLevel1: '家电', categoryLevel2: '洗衣机', categoryLevel3: '波轮', productName: '高端波轮洗衣机X8734', sku: '948246547367867802', price: 4000, quantity: 29, color: '红色', size: 'M', currency: 'rmb', updateDate: '2026-10-05', createDate: '2026-10-20' },
    { id: 10026, categoryLevel1: '家电', categoryLevel2: '电视', categoryLevel3: '85寸', productName: '85寸超级电视机G456', sku: '32345450039083456', price: 9000, quantity: 5, color: '紫色', size: 'XXXL', currency: 'usd', updateDate: '2026-06-05', createDate: '2026-05-20' },
    { id: 10027, categoryLevel1: '家电', categoryLevel2: '电视', categoryLevel3: '85寸', productName: '85寸标准电视H874', sku: '890345081232340009', price: 7000, quantity: 37, color: '红色', size: 'M', currency: 'usd', updateDate: '2026-11-10', createDate: '2026-11-22' },
    { id: 10028, categoryLevel1: '家电', categoryLevel2: '电视', categoryLevel3: '80寸', productName: '80寸纳米电视机H763', sku: '213042456456798034', price: 6000, quantity: 3, color: '灰色', size: 'XXL', currency: 'rmb', updateDate: '2026-02-19', createDate: '2026-02-22' },
    { id: 10029, categoryLevel1: '家电', categoryLevel2: '电视', categoryLevel3: '80寸', productName: '80寸超级音质电视机B704', sku: '235768765876584304', price: 5000, quantity: 2, color: '白色', size: 'L', currency: 'rmb', updateDate: '2026-01-05', createDate: '2026-01-20' },
    { id: 10030, categoryLevel1: '家电', categoryLevel2: '电视', categoryLevel3: '65寸', productName: '65寸小电视机V650', sku: '561231234345600', price: 4500, quantity: 14, color: '蓝色', size: 'L', currency: 'rmb', updateDate: '2026-06-20', createDate: '2026-05-28' }
  ]
})
</script>
