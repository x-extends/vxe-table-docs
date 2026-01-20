<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="type" title="下拉分组单选" width="200" :edit-render="typeEditRender"> </vxe-column>
      <vxe-column field="typeList" title="下拉分组多选" width="200" :edit-render="typeListEditRender"></vxe-column>
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

const typeEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  optionGroups: [
    {
      label: '分类1',
      value: '1',
      options: [
        { label: '苹果', value: '1-1' },
        { label: '雪梨', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      value: '2',
      options: [
        { label: '草莓', value: '2-1' },
        { label: '猕猴桃', value: '2-2' }
      ]
    }
  ]
})

const typeListEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  props: {
    multiple: true
  },
  optionGroups: [
    {
      label: '分类1',
      value: '1',
      options: [
        { label: '苹果', value: '1-1' },
        { label: '雪梨', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      value: '2',
      options: [
        { label: '草莓', value: '2-1' },
        { label: '猕猴桃', value: '2-2' }
      ]
    }
  ]
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
  { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
  { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
])
</script>
