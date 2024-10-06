<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="600"
      :scroll-y="{enabled: true, gt: 0}"
      :edit-config="editConfig"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="nickname" title="Nickname" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{name: 'input'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: string
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = []

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell'
    }

    return {
      loading: false,
      tableData,
      editConfig
    }
  },
  methods: {
    mockList (size: number) {
      const list: RowVO[] = []
      for (let i = 0; i < size; i++) {
        list.push({
          id: i,
          name: `名称${i}`,
          nickname: '',
          role: `角色${i}`,
          age: '18',
          sex: '',
          address: ''
        })
      }
      return list
    },
    findList () {
      this.loading = true
      // 模拟后台接口
      setTimeout(() => {
        const data = this.mockList(600)
        this.loading = false
        this.tableData = data
      }, 350)
    }
  },
  created () {
    this.findList()
  }
})
</script>
