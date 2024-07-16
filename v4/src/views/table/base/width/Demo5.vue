<template>
  <div>
    <vxe-table
      border
      show-footer
      :data="tableData"
      :footer-data="footerData">
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="auto"></vxe-column>
      <vxe-column field="sex" title="头部宽度 头部宽度 头部" width="auto"></vxe-column>
      <vxe-column field="address" title="Address" width="auto"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop Develop Develop ', sex: 'Man', age: 28, address: '内容宽度' },
  { id: 10002, name: 'Test2', role: 'Test Test Test Test Test Test Test', sex: 'Women', age: 22, address: '内容宽度 内容宽度 内容宽度 内容宽度 内容宽度 内容宽度' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: '内容宽度 内容宽度 内容宽度 内容' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { age: '尾部宽度 尾部宽度 尾部' }
])
</script>
