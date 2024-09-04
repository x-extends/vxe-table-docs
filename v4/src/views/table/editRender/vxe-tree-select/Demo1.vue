<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="region" title="下拉树单选" width="200" :edit-render="regionEditRender"></vxe-column>
      <vxe-column field="regionList" title="下拉树多选" width="200" :edit-render="regionListEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  region: string
  regionList: string[]
}

const regionEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'VxeTreeSelect',
  options: [
    {
      label: '广东省',
      children: [
        { label: '深圳市', value: '1-1' },
        { label: '广州市', value: '1-2' }
      ]
    },
    {
      label: '北京',
      children: [
        { label: '东城区', value: '2-1' },
        { label: '西城区', value: '2-2' }
      ]
    }
  ]
})

const regionListEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'VxeTreeSelect',
  props: {
    multiple: true
  },
  options: [
    {
      label: '广东省',
      children: [
        { label: '深圳市', value: '1-1' },
        { label: '广州市', value: '1-2' }
      ]
    },
    {
      label: '北京',
      children: [
        { label: '东城区', value: '2-1' },
        { label: '西城区', value: '2-2' }
      ]
    }
  ]
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', region: '', regionList: [] },
  { id: 10002, name: 'Test2', role: 'Test', region: '2-1', regionList: ['1-2', '2-1'] },
  { id: 10003, name: 'Test3', role: 'PM', region: '', regionList: [] }
])
</script>
