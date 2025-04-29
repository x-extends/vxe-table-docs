<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #edit_sex="{ row }">
        <vxe-select v-model="row.sex" :options="sexOptions"></vxe-select>
      </template>
      <template #default_sex="{ row }">
        <span>{{ formatSexLabel([row.sex]) }}</span>
      </template>

      <template #edit_sexList="{ row }">
        <vxe-select v-model="row.sexList" :options="sexOptions" multiple></vxe-select>
      </template>
      <template #default_sexList="{ row }">
        <span>{{ formatSexLabel(row.sexList) }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200, editRender: { }, slots: { edit: 'edit_name', default: 'default_name' } },
        { field: 'sex', title: '下拉框', width: 200, editRender: { }, slots: { edit: 'edit_sex', default: 'default_sex' } },
        { field: 'sexList', title: '下拉框多选', width: 200, editRender: { }, slots: { edit: 'edit_sexList', default: 'default_sexList' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
      ]
    }

    const sexOptions: VxeSelectPropTypes.Options = []

    return {
      gridOptions,
      sexOptions
    }
  },
  created () {
    // 模拟后端接口
    setTimeout(() => {
      this.sexOptions = [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }, 300)
  },
  methods: {
    formatSexLabel  (sexList: string[]) {
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
