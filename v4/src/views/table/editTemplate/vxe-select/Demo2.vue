<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" clearable></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="type" title="下拉框分组" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.type" :optionGroups="typeOptions"></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatTypeLabel([row.type]) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="typeList" title="下拉框分组多选" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.typeList" :optionGroups="typeOptions" multiple></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatTypeLabel(row.typeList) }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
  { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
  { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
])

const typeOptions = ref([
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
])

const formatTypeLabel = (typeList: string[]) => {
  if (typeList) {
    return typeList.map(type => {
      for (let i = 0; i < typeOptions.value.length; i++) {
        const group = typeOptions.value[i]
        for (let j = 0; j < group.options.length; j++) {
          const item = group.options[j]
          if (item.value === type) {
            return item.label
          }
        }
      }
      return type
    }).join(',')
  }
  return ''
}
</script>
