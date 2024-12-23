<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="icon1" title="图标1" width="100" :edit-render="{name: 'VxeIconPicker'}"></vxe-column>
      <vxe-column field="icon2" title="图标2" width="100" :edit-render="icon2EditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  icon1: string
  icon2: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', icon1: '', icon2: 'vxe-icon-home' },
  { id: 10002, name: 'Test2', icon1: 'vxe-icon-home', icon2: '' }
])

const icon2EditRender = reactive<VxeColumnPropTypes.EditRender<RowVO>>({
  name: 'VxeIconPicker',
  options: [
    'home', 'company', 'comment', 'setting', 'send', 'envelope', 'envelope-open', 'bell', 'search', 'print', 'pc', 'goods', 'chart-line', 'edit', 'delete', 'save', 'sunny', 'rmb', 'usd', 'user'
  ]
})
</script>
