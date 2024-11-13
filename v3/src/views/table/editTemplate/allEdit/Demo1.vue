<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="400"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200">
        <template #default="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="nickname" title="Nickname" width="300">
        <template #default="{ row }">
          <vxe-input v-model="row.nickname"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" width="300">
        <template #default="{ row }">
          <vxe-input v-model="row.role"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="年龄" width="140">
        <template #default="{ row }">
          <vxe-number-input v-model="row.age"></vxe-number-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: number | null
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: '', role: 'Develop', age: null },
      { id: 10002, name: 'Test2', nickname: '', role: 'Test', age: 41 },
      { id: 10003, name: 'Test3', nickname: '', role: 'PM', age: 58 },
      { id: 10004, name: 'Test4', nickname: '', role: 'Develop', age: 37 },
      { id: 10005, name: 'Test5', nickname: '', role: 'Test', age: 20 },
      { id: 10006, name: 'Test6', nickname: '', role: 'Test', age: 39 },
      { id: 10007, name: 'Test7', nickname: '', role: 'Develop', age: 22 },
      { id: 10008, name: 'Test8', nickname: '', role: 'Develop', age: 29 },
      { id: 10009, name: 'Test9', nickname: '', role: 'Test', age: 22 }
    ]

    return {
      tableData
    }
  }
})
</script>
