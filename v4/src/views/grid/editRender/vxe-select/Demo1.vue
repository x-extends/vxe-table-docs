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

const sexEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ],
  events: {
    change (cellParams, eventParams) {
      const { row, column } = cellParams
      console.log('change', row, column.field, eventParams.value)
    }
  }
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
    { field: 'sex', title: '下拉单选', width: 200, editRender: sexEditRender },
    { field: 'sexList', title: '下拉多选', width: 200, editRender: sexListEditRender }
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

// 模拟后端接口
const loadSexList = () => {
  setTimeout(() => {
    sexListEditRender.options = [
      { label: '女', value: 'Women' },
      { label: '男', value: 'Man' }
    ]
  }, 300)
}

loadSexList()
</script>
