<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
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
      <vxe-column field="role" title="大数据量选项" min-width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.role" :options="roleOptions" filterable></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatRoleLabel(row.role) }}</span>
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

    const typeOptions = [
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

    const roleOptions: any[] = []

    return {
      tableData,
      sexOptions,
      typeOptions,
      roleOptions
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
    },
    formatTypeLabel (typeList: string[]) {
      if (typeList) {
        return typeList.map(type => {
          for (let i = 0; i < this.typeOptions.length; i++) {
            const group = this.typeOptions[i]
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
    },
    formatRoleLabel (role: string) {
      const item = this.roleOptions.find(item => item.value === role)
      return item ? item.label : role
    }
  },
  created () {
    // 模拟后端接口
    setTimeout(() => {
      const list: any[] = []
      for (let i = 0; i < 10000; i++) {
        list.push({
          value: `role${i}`,
          label: `角色${i}`
        })
      }
      this.roleOptions = list
    }, 100)
  }
})
</script>
