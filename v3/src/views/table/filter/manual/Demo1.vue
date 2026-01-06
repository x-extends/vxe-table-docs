<template>
  <div>
    <vxe-switch v-model="filterConfig.showIcon"></vxe-switch>
    <vxe-button @click="openFilters('name')">弹出 name</vxe-button>
    <vxe-button @click="openFilters('role')">弹出 role</vxe-button>
    <vxe-button @click="closeFilters()">关闭筛选</vxe-button>
    <vxe-table
      border
      height="500"
      ref="tableRef"
      :filter-config="filterConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :filters="nameOptions"></vxe-column>
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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' }
    ]

    const filterConfig: VxeTablePropTypes.FilterConfig<RowVO> = {
      showIcon: true
    }

    const nameOptions = [
      { label: 'Develop', value: 'Test2' },
      { label: 'Test3', value: 'Test3' }
    ]

    const roleOptions = [
      { label: 'Develop', value: 'Develop' },
      { label: 'Test', value: 'Test' },
      { label: 'PM', value: 'PM' },
      { label: 'Designer', value: 'Designer' }
    ]

    return {
      tableData,
      filterConfig,
      nameOptions,
      roleOptions
    }
  },
  methods: {
    openFilters (field: string) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        // 打开筛选
        $table.openFilter(field)
      }
    },
    closeFilters () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        // 关闭筛选
        $table.closeFilter()
      }
    }
  }
})
</script>
