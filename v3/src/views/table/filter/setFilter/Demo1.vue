<template>
  <div>
    <vxe-button @click="changeFilters()">只修改 role 条件</vxe-button>
    <vxe-button @click="handleFilters()">修改并触发 role 筛选</vxe-button>
    <vxe-button @click="clearFilters()">清除筛选</vxe-button>
    <vxe-table
      border
      height="500"
      ref="tableRef"
      :data="tableData"
      :filter-config="filterConfig">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role" :filters="roleOptions"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: string
  num2: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = []

    const filterConfig: VxeTablePropTypes.FilterConfig<RowVO> = {
    }

    const roleOptions = [
      { label: 'Develop', value: 'Develop' },
      { label: 'Test', value: 'Test' },
      { label: 'PM', value: 'PM' },
      { label: 'Designer', value: 'Designer' }
    ]

    return {
      tableData,
      filterConfig,
      roleOptions
    }
  },
  methods: {
    changeFilters () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        // 修改条件
        $table.setFilter('role', [
          { label: 'Develop', value: 'Develop', checked: false },
          { label: 'Test', value: 'Test', checked: true },
          { label: 'PM', value: 'PM', checked: false },
          { label: 'Designer', value: 'Designer', checked: false }
        ])
      }
    },
    handleFilters () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        // 修改条件，传 true 则自动更新数据
        $table.setFilter('role', [
          { label: 'Develop', value: 'Develop', checked: false },
          { label: 'Test', value: 'Test', checked: true },
          { label: 'PM', value: 'PM', checked: false },
          { label: 'Designer', value: 'Designer', checked: false }
        ], true)
      }
    },
    clearFilters () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        // 清除排序状态，如果本地筛选，会自动更新数据
        $table.clearFilter()
      }
    }
  }
})
</script>
