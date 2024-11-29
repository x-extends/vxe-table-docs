<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="采购人员" min-width="200" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="productName" title="商品名称" min-width="200" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="productPrice" title="商品价格" width="120" :edit-render="{name: 'VxeNumberInput'}"></vxe-column>
      <vxe-column field="action" title="操作" width="200">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" @click="selectEvent(row)">关联订单</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>

    <vxe-drawer
      show-footer
      show-confirm-button
      show-cancel-button
      v-model="showPopup"
      title="关联订单"
      height="400"
      width="800"
      @show="showSubEvent"
      @confirm="confirmSubEvent">
      <vxe-table
        border
        ref="productTableRef"
        height="100%"
        :row-config="{keyField: 'id'}"
        :data="productData">
        <vxe-column type="radio" width="60"></vxe-column>
        <vxe-column field="name" title="名称"></vxe-column>
        <vxe-column field="price" title="价格"></vxe-column>
      </vxe-table>
    </vxe-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableInstance } from 'vxe-table'

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

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, productId: null, name: '张三', productName: '', productPrice: null },
      { id: 10002, productId: 1002, name: '李四', productName: 'Vxe 企业版授权', productPrice: 12499 },
      { id: 10003, productId: null, name: '王五', productName: '', productPrice: null }
    ]

    const productData: ProductVO[] = [
      { id: 1001, name: 'Vxe 企业版授权', price: 12499 },
      { id: 1002, name: 'Vxe 高级筛选扩展', price: 1099 },
      { id: 1003, name: 'Vxe 零代码平台', price: 16888 }
    ]

    return {
      tableData,
      productData,
      showPopup: false,
      selectRow: null as RowVO | null
    }
  },
  methods: {
    selectEvent (row: RowVO) {
      this.showPopup = true
      this.selectRow = row
    },
    showSubEvent () {
      const $productTable = this.$refs.productTableRef as VxeTableInstance<ProductVO>
      if ($productTable) {
        const row = this.selectRow
        if (row && row.productId) {
          const productRow = $productTable.getRowById(row.productId)
          $productTable.setRadioRow(productRow)
        } else {
          $productTable.clearRadioRow()
        }
      }
    },
    confirmSubEvent () {
      const $productTable = this.$refs.productTableRef as VxeTableInstance<ProductVO>
      if ($productTable) {
        const row = this.selectRow
        const selectProduct = $productTable.getRadioRecord()
        if (row && selectProduct) {
          row.productId = selectProduct.id
          row.productName = selectProduct.name
          row.productPrice = selectProduct.price
        }
      }
    }
  }
})
</script>
