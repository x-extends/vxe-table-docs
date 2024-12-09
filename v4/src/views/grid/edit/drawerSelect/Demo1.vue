<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="selectEvent(row)">关联订单</vxe-button>
      </template>
    </vxe-grid>

    <vxe-drawer
      show-footer
      show-confirm-button
      show-cancel-button
      v-model="showPopup"
      title="关联订单"
      width="800"
      @show="showSubEvent"
      @confirm="confirmSubEvent">
      <vxe-grid ref="productGridRef" v-bind="productGridOptions"></vxe-grid>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  productId: number | null
  productName: string
  productPrice: number| null
}

interface ProductVO {
  id: number
  name: string
  price: number
}

const productGridRef = ref<VxeGridInstance<ProductVO>>()

const showPopup = ref(false)
const selectRow = ref<RowVO | null>(null)

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: '采购人员', minWidth: 200, editRender: { name: 'VxeInput' } },
    { field: 'productName', title: '商品名称', minWidth: 200, editRender: { name: 'VxeInput' } },
    { field: 'productPrice', title: '商品价格', width: 120, editRender: { name: 'VxeNumberInput' } },
    { title: '操作', width: 200, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, productId: null, name: '张三', productName: '', productPrice: null },
    { id: 10002, productId: 1002, name: '李四', productName: 'Vxe 企业版授权', productPrice: 12499 },
    { id: 10003, productId: null, name: '王五', productName: '', productPrice: null }
  ]
})

const productGridOptions = reactive<VxeGridProps<ProductVO>>({
  border: true,
  height: '100%',
  rowConfig: {
    keyField: 'id'
  },
  columns: [
    { type: 'radio', width: 60 },
    { field: 'name', title: '名称' },
    { field: 'price', title: '价格' }
  ],
  data: [
    { id: 1001, name: 'Vxe 企业版授权', price: 12499 },
    { id: 1002, name: 'Vxe 高级筛选扩展', price: 1099 },
    { id: 1003, name: 'Vxe 零代码平台', price: 16888 }
  ]
})

const selectEvent = (row: RowVO) => {
  showPopup.value = true
  selectRow.value = row
}

const showSubEvent = () => {
  const $productGrid = productGridRef.value
  if ($productGrid) {
    const row = selectRow.value
    if (row && row.productId) {
      const productRow = $productGrid.getRowById(row.productId)
      $productGrid.setRadioRow(productRow)
    } else {
      $productGrid.clearRadioRow()
    }
  }
}

const confirmSubEvent = () => {
  const $productGrid = productGridRef.value
  if ($productGrid) {
    const row = selectRow.value
    const selectProduct = $productGrid.getRadioRecord()
    if (row && selectProduct) {
      row.productId = selectProduct.id
      row.productName = selectProduct.name
      row.productPrice = selectProduct.price
    }
  }
}
</script>
