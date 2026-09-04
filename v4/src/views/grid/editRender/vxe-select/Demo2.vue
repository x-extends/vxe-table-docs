<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
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
        { label: '跑步', value: '1-1' },
        { label: '游泳', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      value: '2',
      options: [
        { label: '爬山', value: '2-1' },
        { label: '徒步', value: '2-2' }
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
        { label: '跑步', value: '1-1' },
        { label: '游泳', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      value: '2',
      options: [
        { label: '爬山', value: '2-1' },
        { label: '徒步', value: '2-2' }
      ]
    }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 300,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'VxeInput' } },
    { field: 'type', title: '下拉分组单选', width: 200, editRender: typeEditRender },
    { field: 'typeList', title: '下拉分组多选', width: 200, editRender: typeListEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] },
    { id: 10004, name: 'Test4', role: 'Develop', sex: 'Man', sexList: [], type: '', typeList: [] },
    { id: 10005, name: 'Test5', role: 'Test', sex: 'Women', sexList: ['Man'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', sexList: ['Man'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10007, name: 'Test7', role: 'PM', sex: 'Women', sexList: ['Man', 'Women'], type: '', typeList: [] },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Women', sexList: [], type: '', typeList: ['1-2', '2-1'] }
  ]
})
</script>
