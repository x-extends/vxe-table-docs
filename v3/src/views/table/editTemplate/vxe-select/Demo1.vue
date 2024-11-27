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
          <vxe-input v-model="row.name"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="下拉框" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" :options="sexOptions"></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSexLabel([row.sex]) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="sexList" title="下拉框多选" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.sexList" :options="sexOptions" multiple></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSexLabel(row.sexList) }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
      { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
      { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
    ]

    const sexOptions = [
      { label: '女', value: 'Women' },
      { label: '男', value: 'Man' }
    ]

    return {
      tableData,
      sexOptions
    }
  },
  methods: {
    formatSexLabel (sexList: string[]) {
      if (sexList) {
        return sexList.map(sex => {
          const item = this.sexOptions.find(item => item.value === sex)
          return item ? item.label : sex
        }).join(',')
      }
      return ''
    }
  }
})
</script>
