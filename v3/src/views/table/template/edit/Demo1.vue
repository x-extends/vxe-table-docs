<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'cell', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" width="160"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" :options="sexOptions"></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSex(row) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Number">
        <template #edit="{ row }">
          <vxe-input v-model="row.num"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
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
  age: number
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
    ]

    const sexOptions = [
      { label: '男', value: '1' },
      { label: '女', value: '0' }
    ]

    return {
      tableData,
      sexOptions
    }
  },
  methods: {
    formatSex (row: RowVO) {
      return row.sex === '1' ? '男' : '女'
    }
  }
})
</script>
