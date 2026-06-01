<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="500"
      :loading="loading"
      :data="tableData"
      :virtual-y-config="{enabled: true}">
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
      <vxe-column field="age" title="Age" width="140">
        <template #default="{ row }">
          <vxe-number-input v-model="row.age"></vxe-number-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" width="140">
        <template #default="{ row }">
          <vxe-input v-model="row.sex"></vxe-input>
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
    const tableData: RowVO[] = []
    const loading = false

    return {
      tableData,
      loading
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      this.loading = true
      setTimeout(() => {
        const list: RowVO[] = []
        for (let i = 0; i < 1000; i++) {
          list.push(
            { id: 10000 + i, name: 'Test' + i, nickname: 'Nickname' + i, role: i % 3 ? 'Test' : 'Develop', age: i % 2 ? 18 : null }
          )
        }
        this.tableData = list
        this.loading = false
      }, 200)
    }
  }
})
</script>
