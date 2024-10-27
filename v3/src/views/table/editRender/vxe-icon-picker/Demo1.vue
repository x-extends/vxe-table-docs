<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="icon" title="图标" width="100" :edit-render="{name: 'VxeIconPicker'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  icon: string
  iconList: string[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', icon: '', iconList: [] },
      { id: 10002, name: 'Test2', icon: 'vxe-icon-home', iconList: [] }
    ]

    return {
      tableData
    }
  }
})
</script>
