<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const sexEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'select',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const typeEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'select',
  optionGroups: [
    {
      label: '分类1',
      options: [
        { label: '苹果', value: '1-1' },
        { label: '雪梨', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      options: [
        { label: '香蕉', value: '2-1' },
        { label: '茄子', value: '2-2' }
      ]
    }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'input' } },
    { field: 'sex', title: '下拉框', editRender: sexEditRender },
    { field: 'type', title: '下拉框分组', editRender: typeEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
  ]
})
</script>
