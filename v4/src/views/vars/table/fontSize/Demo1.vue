<template>
  <div>
    <vxe-radio-group v-model="gridOptions.size">
      <vxe-radio-button label="" content="默认"></vxe-radio-button>
      <vxe-radio-button label="medium" content="中"></vxe-radio-button>
      <vxe-radio-button label="small" content="小"></vxe-radio-button>
      <vxe-radio-button label="mini" content="迷你"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid class="my-table-font-size" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  size: '',
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
    { seq: '合计', name: '777', sex: '333', age: '111' }
  ]
})
</script>

<style lang="scss" scoped>
.my-table-font-size {
  --vxe-ui-font-size-default: 18px;
  --vxe-ui-font-size-medium: 16px;
  --vxe-ui-font-size-small: 14px;
  --vxe-ui-font-size-mini: 12px;
}
</style>
