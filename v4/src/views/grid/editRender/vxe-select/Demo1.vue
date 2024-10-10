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
  ]
})

const sexListEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  props: {
    multiple: true
  },
  options: [
    { name: '女', code: 'Women' },
    { name: '男', code: 'Man' }
  ],
  optionProps: {
    label: 'name',
    value: 'code'
  }
})

const typeEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
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
      options: [
        { label: '苹果', value: '1-1' },
        { label: '雪梨', value: '1-2' }
      ]
    },
    {
      label: '分类2',
      options: [
        { label: '草莓', value: '2-1' },
        { label: '猕猴桃', value: '2-2' }
      ]
    }
  ]
})

const roleEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  props: {
    filterable: true
  },
  options: []
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'VxeInput' } },
    { field: 'sex', title: '下拉单选', width: 200, editRender: sexEditRender },
    { field: 'sexList', title: '下拉多选', width: 200, editRender: sexListEditRender },
    { field: 'type', title: '下拉分组单选', width: 200, editRender: typeEditRender },
    { field: 'typeList', title: '下拉分组多选', width: 200, editRender: typeListEditRender },
    { field: 'role', title: '大数据量选项', width: 200, editRender: roleEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
    { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
  ]
})

// 模拟后端接口
setTimeout(() => {
  const list: any[] = []
  for (let i = 0; i < 10000; i++) {
    list.push({
      value: `role${i}`,
      label: `角色${i}`
    })
  }
  roleEditRender.options = list
}, 100)
</script>
