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
    { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
    { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
  ]
})
</script>
