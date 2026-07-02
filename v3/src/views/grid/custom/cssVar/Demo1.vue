<template>
  <div>
    <vxe-radio-group v-model="customConfig.mode">
      <vxe-radio-button checked-value="" content="默认"></vxe-radio-button>
      <vxe-radio-button checked-value="modal" content="弹窗"></vxe-radio-button>
      <vxe-radio-button checked-value="drawer" content="抽屉"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid class="my-table-custom-colvar" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

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
    const customConfig: VxeTablePropTypes.CustomConfig<RowVO> = {
      mode: 'modal',
      allowVisible: true,
      allowFixed: true,
      allowResizable: true,
      allowSort: true,
      allowAlign: true,
      allowHeaderAlign: true,
      allowFooterAlign: true,
      showSortMoveButton: true,
      showSortPutButton: true,
      popupOptions: {
        minWidth: 400,
        maxWidth: 600
      },
      modalOptions: {
        width: 1400
      },
      drawerOptions: {
        width: 1400
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      rowConfig: {
        keyField: 'id'
      },
      columnConfig: {
        resizable: true
      },
      toolbarConfig: {
        custom: true
      },
      customConfig,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', name: 23, sex: 565, age: 99 }
      ]
    }

    return {
      gridOptions,
      customConfig
    }
  }
})
</script>

<style lang="scss" scoped>
.my-table-custom-colvar {
  --vxe-ui-vxe-table-custom-column-checkbox-width: 120px;
  --vxe-ui-vxe-table-custom-column-sort-width: 120px;
  --vxe-ui-vxe-table-custom-column-title-min-width: 300px;
  --vxe-ui-vxe-table-custom-column-width-width: 200px;
  --vxe-ui-vxe-table-custom-column-fixed-width: 180px;
  --vxe-ui-vxe-table-custom-column-align-width: 240px;
  --vxe-ui-vxe-table-custom-column-header-align-width: 240px;
  --vxe-ui-vxe-table-custom-column-footer-align-width: 240px;
}
</style>
