<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <input v-model="row.name" style="width: 100%">
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #edit_sex="{ row }">
        <select v-model="row.sex" style="width: 100%">
          <option v-for="item in sexOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
      </template>
      <template #default_sex="{ row }">
        <span>{{ formatSexLabel([row.sex]) }}</span>
      </template>

      <template #edit_type="{ row }">
        <select v-model="row.type" style="width: 100%">
          <optgroup v-for="item in typeOptions" :key="item.value" :label="item.label">
            <option v-for="child in item.options" :key="child.value" :value="child.value">{{ child.label }}</option>
          </optgroup>
        </select>
      </template>
      <template #default_type="{ row }">
        <span>{{ formatTypeLabel([row.type]) }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const sexOptions = ref<VxeSelectPropTypes.Options>([])

const typeOptions = ref([
  {
    label: '',
    value: '0',
    options: [
      { label: '', value: '' }
    ]
  },
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
])

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200, editRender: { autoFocus: 'input' }, slots: { edit: 'edit_name', default: 'default_name' } },
    { field: 'sex', title: '下拉框', width: 200, editRender: { }, slots: { edit: 'edit_sex', default: 'default_sex' } },
    { field: 'type', title: '下拉框分组', width: 200, editRender: { }, slots: { edit: 'edit_type', default: 'default_type' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
    { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
  ]
})

const formatSexLabel = (sexList: string[]) => {
  if (sexList) {
    return sexList.map(sex => {
      const item = sexOptions.value.find(item => item.value === sex)
      return item ? item.label : sex
    }).join(',')
  }
  return ''
}

const formatTypeLabel = (typeList: string[]) => {
  if (typeList) {
    return typeList.map(type => {
      for (let i = 0; i < typeOptions.value.length; i++) {
        const group = typeOptions.value[i]
        if (group.options) {
          for (let j = 0; j < group.options.length; j++) {
            const item = group.options[j]
            if (item.value === type) {
              return item.label
            }
          }
        }
      }
      return type
    }).join(',')
  }
  return ''
}

// 模拟后端接口
setTimeout(() => {
  sexOptions.value = [
    { label: '', value: '' },
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
}, 300)
</script>
