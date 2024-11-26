<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name" clearable></vxe-input>
      </template>

      <template #edit_productName="{ row }">
        <vxe-input v-model="row.productName" clearable></vxe-input>
      </template>

      <template #edit_productPrice="{ row }">
        <vxe-number-input v-model="row.productPrice" type="integer"></vxe-number-input>
      </template>

      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="selectEvent(row)">关联订单</vxe-button>
      </template>
    </vxe-grid>

    <vxe-modal
      resize
      show-footer
      show-confirm-button
      show-cancel-button
      show-maximize
      v-model="showPopup"
      title="关联订单"
      height="400"
      width="800"
      @show="showSubEvent"
      @confirm="confirmSubEvent">
      <vxe-grid ref="productGridRef" v-bind="productGridOptions"></vxe-grid>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: '采购人员', minWidth: 200, editRender: { }, slots: { edit: 'edit_name' } },
        { field: 'productName', title: '商品名称', minWidth: 200, editRender: { }, slots: { edit: 'edit_productName' } },
        { field: 'productPrice', title: '商品价格', width: 120, editRender: { }, slots: { edit: 'edit_productPrice' } },
        { title: '操作', width: 200, slots: { default: 'action' } }
      ],
      data: [
        { id: 10001, productId: null, name: '张三', productName: '', productPrice: null },
        { id: 10002, productId: 1002, name: '李四', productName: 'Vxe 企业版授权', productPrice: 12499 },
        { id: 10003, productId: null, name: '王五', productName: '', productPrice: null }
      ]
    }

    const productGridOptions: VxeGridProps<ProductVO> = {
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
    }

    return {
      gridOptions,
      productGridOptions,
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
      const $productGrid = this.$refs.productGridRef as VxeGridInstance<ProductVO>
      if ($productGrid) {
        const row = this.selectRow
        if (row && row.productId) {
          const productRow = $productGrid.getRowById(row.productId)
          $productGrid.setRadioRow(productRow)
        } else {
          $productGrid.clearRadioRow()
        }
      }
    },
    confirmSubEvent () {
      const $productGrid = this.$refs.productGridRef as VxeGridInstance<ProductVO>
      if ($productGrid) {
        const row = this.selectRow
        const selectProduct = $productGrid.getRadioRecord()
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
