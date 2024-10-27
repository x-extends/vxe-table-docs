<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="region" title="下拉树单选" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-tree-select v-model="row.region" :options="regionOptions"></vxe-tree-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatRegionLabel(row.region) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="regionList" title="下拉树多选" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-tree-select v-model="row.regionList" :options="regionListOptions" multiple></vxe-tree-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatRegionListLabel(row.regionList) }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTreeSelectPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  region: string
  regionList: string[]
}

const regionOptions = ref<VxeTreeSelectPropTypes.Options>([
  {
    label: '广东省',
    value: '1',
    children: [
      { label: '深圳市', value: '1-1' },
      { label: '广州市', value: '1-2' }
    ]
  },
  {
    label: '北京',
    value: '2',
    children: [
      { label: '东城区', value: '2-1' },
      { label: '西城区', value: '2-2' }
    ]
  }
])
const formatRegionLabel = (val: string) => {
  const rest = XEUtils.findTree(regionOptions.value, item => item.value === val, { children: 'children' })
  return rest ? rest.item.label : val
}

const regionListOptions = ref<VxeTreeSelectPropTypes.Options>([
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
])
const formatRegionListLabel = (vals: string[]) => {
  if (vals) {
    return vals.map(val => {
      const rest = XEUtils.findTree(regionListOptions.value, item => item.value === val, { children: 'children' })
      return rest ? rest.item.label : val
    }).join(',')
  }
  return ''
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', region: '', regionList: [] },
  { id: 10002, name: 'Test2', role: 'Test', region: '2-1', regionList: ['1-2', '2-1'] },
  { id: 10003, name: 'Test3', role: 'PM', region: '', regionList: [] }
])
</script>
