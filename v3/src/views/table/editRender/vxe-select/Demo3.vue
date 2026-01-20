<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="role" title="大数据量选项" min-width="200" :edit-render="roleEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'
import type { VxeSelectProps } from 'vxe-pc-ui'

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

    const roleEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps> = {
      name: 'VxeSelect',
      props: {
        filterable: true
      },
      options: []
    }

    return {
      tableData,
      roleEditRender
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
      this.roleEditRender.options = list
    }, 100)
  }
})
</script>
