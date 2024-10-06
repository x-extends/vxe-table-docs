<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="400"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" width="200">
        <template #header>
          <i :class="collapsable1 ? 'vxe-icon-square-minus' : 'vxe-icon-square-plus'" @click="collapsable1Event"></i>
          <span>Name</span>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :visible="false" width="200"></vxe-column>
      <vxe-column field="sex" title="Sex" :visible="false" width="200"></vxe-column>
      <vxe-column field="age" title="Age" width="200">
        <template #header>
          <i :class="collapsable2 ? 'vxe-icon-square-minus' : 'vxe-icon-square-plus'" @click="collapsable2Event"></i>
          <span>Age</span>
        </template>
      </vxe-column>
      <vxe-column field="rate" title="Rate" :visible="false" width="200"></vxe-column>
      <vxe-column field="address" title="Address" :visible="false" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
    ]

    return {
      tableData,
      collapsable1: false,
      collapsable2: false
    }
  },
  methods: {
    collapsable1Event () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const fields = ['role', 'sex']
        this.collapsable1 = !this.collapsable1
        fields.forEach(field => {
          if (this.collapsable1) {
            $table.showColumn(field)
          } else {
            $table.hideColumn(field)
          }
        })
      }
    },
    collapsable2Event () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const fields = ['rate', 'address']
        this.collapsable2 = !this.collapsable2
        fields.forEach(field => {
          if (this.collapsable2) {
            $table.showColumn(field)
          } else {
            $table.hideColumn(field)
          }
        })
      }
    }
  }
})
</script>
