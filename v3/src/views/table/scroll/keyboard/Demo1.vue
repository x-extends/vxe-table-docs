<template>
  <div>
    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      height="500"
      :column-config="{resizable: true}"
      :loading="loading"
      :mouse-config="{selected: true}"
      :edit-config="{trigger: 'dblclick', mode: 'cell', showStatus: true}"
      :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"
      :scroll-y="{enabled: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable width="200" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" width="200" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" width="200" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="rate" title="Rate" width="200" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="region" title="Region" width="200" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="time" title="Time" width="200" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>
      <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>
      <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance } from 'vxe-table'

export default Vue.extend({
  data () {
    return {
      loading: false
    }
  },
  methods: {
    mockList (size: number) {
      const list: any[] = []
      for (let index = 0; index < size; index++) {
        list.push({
          checked: false,
          name: `名称${index}`,
          sex: '0',
          num: 123,
          age: 18,
          num2: 234,
          rate: 3,
          address: 'shenzhen'
        })
      }
      return list
    },
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          const tableData = this.mockList(600)
          // 阻断 vue 对大数组的监听，避免 vue 绑定大数据造成短暂的卡顿
          const $table = this.$refs.tableRef as VxeTableInstance
          if ($table) {
            $table.loadData(tableData)
          }
          resolve(null)
          this.loading = false
        }, 300)
      })
    }
  },
  created () {
    this.findList()
  }
})
</script>
