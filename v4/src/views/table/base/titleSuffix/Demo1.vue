<template>
  <div>
    <vxe-table
      border
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :title-suffix="nameTitleSuffix"></vxe-column>
      <vxe-column field="sex" title="Sex" :title-suffix="sexTitleSuffix"></vxe-column>
      <vxe-column field="age" title="Age" :title-prefix="ageTitleSuffix"></vxe-column>
      <vxe-column field="address" title="Address" :title-prefix="addressTitleSuffix"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const nameTitleSuffix = reactive<VxeColumnPropTypes.TitleSuffix>({
  content: '提示内容'
})

const sexTitleSuffix = reactive<VxeColumnPropTypes.TitleSuffix>({
  icon: 'vxe-icon-user-fill',
  useHTML: true,
  content: '点击链接：<a href="https://vxeui.com" target="_blank" style="color:#95c7fb;">vxe-ui 官网</a>'
})

const ageTitleSuffix = reactive<VxeColumnPropTypes.TitleSuffix>({
  icon: 'vxe-icon-warning-circle-fill',
  iconStatus: 'warning',
  content: '警告提示'
})

const addressTitleSuffix = reactive<VxeColumnPropTypes.TitleSuffix>({
  icon: 'vxe-icon-warning-triangle-fill',
  iconStatus: 'error',
  content: '错误提示'
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
</script>
