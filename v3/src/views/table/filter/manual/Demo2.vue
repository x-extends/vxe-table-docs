<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="200"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age" :filters="ageOptions" :filter-method="filterAgeMethod" :filter-recover-method="filterAgeRecoverMethod">
        <template #filter="{ column }">
          <vxe-input v-for="(option, index) in column.filters" :key="index" v-model="option.data" @change="changeOptionEvent(option)" @keyup="keyupEvent" placeholder="按回车确认筛选" ></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = []

    const ageOptions: VxeColumnPropTypes.Filters = [
      { data: '' }
    ]

    return {
      tableData,
      loading: false,
      ageOptions
    }
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          this.tableData = [
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
            { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
            { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' },
            { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 30, address: 'Guangzhou' },
            { id: 10009, name: 'Test9', role: 'Test', sex: 'Women', age: 28, address: 'test abc' },
            { id: 100010, name: 'Test10', role: 'Test', sex: 'Man', age: 24, address: 'Shanghai' }
          ]
          this.loading = false
          resolve(this.tableData)
        }, 300)
      })
    },
    filterAgeMethod ({ option, row }) {
      return row.age === Number(option.data)
    },
    filterAgeRecoverMethod ({ option }) {
      // 如果是自定义筛选模板，当为点击确认时，该选项将被恢复为默认值
      option.data = ''
    },
    changeOptionEvent (option: any) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.updateFilterOptionStatus(option, !!option.data)
      }
    },
    keyupEvent ({ $event }) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        if ($event.key === 'Enter') {
          $table.saveFilterPanel()
        }
      }
    }
  },
  created () {
    this.findList()
  }
})
</script>
