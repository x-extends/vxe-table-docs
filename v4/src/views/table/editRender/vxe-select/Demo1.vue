<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="sex" title="下拉框单选" width="200" :edit-render="sexEditRender"></vxe-column>
      <vxe-column field="sexList" title="下拉多选" width="200" :edit-render="sexListEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'
import type { VxeSelectProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const sexEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const sexListEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  props: {
    multiple: true,
    filterable: true
  },
  options: [],
  optionProps: {
    label: 'name',
    value: 'code'
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
  { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
  { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
])

// 模拟后端接口
setTimeout(() => {
  sexListEditRender.options = [
    { name: '女', code: 'Women' },
    { name: '男', code: 'Man' }
  ]
}, 300)
</script>
