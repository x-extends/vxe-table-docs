<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="userName" title="下拉列表" width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <DemoUserSelectPulldown v-model="row.userName" />
        </template>
        <template #default="{ row }">
          <vxe-icon name="user"></vxe-icon>
          <span>{{ row.userName }}</span>
        </template>
      </vxe-column>
      <vxe-column field="role" title="下拉表格" width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <DemoRoleSelectPulldown v-model="row.role" />
        </template>
        <template #default="{ row }">
          <vxe-icon name="company"></vxe-icon>
          <span>{{ row.role }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import DemoUserSelectPulldown from './DemoUserSelectPulldown.vue'
// import DemoRoleSelectPulldown from './DemoRoleSelectPulldown.vue'

interface RowVO {
  id: number
  name: string
  role: string
  userName: string
}

export default Vue.extend({
  // components: {
  //   DemoUserSelectPulldown,
  //   DemoRoleSelectPulldown
  // },
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', userName: 'test6' },
      { id: 10002, name: 'Test2', role: 'Test', userName: 'test1' },
      { id: 10003, name: 'Test3', role: 'PM', userName: 'test5' },
      { id: 10004, name: 'Test4', role: 'Test', userName: 'test5' },
      { id: 10005, name: 'Test5', role: 'Develop', userName: 'test2' },
      { id: 10006, name: 'Test6', role: 'Develop', userName: 'test1' },
      { id: 10007, name: 'Test7', role: 'PM', userName: 'test7' },
      { id: 10008, name: 'Test8', role: 'Develop', userName: 'test5' }
    ]

    return {
      tableData
    }
  }
})
</script>
