<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="num" title="数字" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-number-input v-model="row.num"></vxe-number-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.num }}</span>
        </template>
      </vxe-column>
      <vxe-column field="integer" title="整数" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-number-input v-model="row.integer" type="integer"></vxe-number-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.integer }}</span>
        </template>
      </vxe-column>
      <vxe-column field="float" title="小数" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-number-input v-model="row.float" type="float"></vxe-number-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.float }}</span>
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
  role: string
  sex: string
  num: string
  float: string
  integer: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: '', integer: '', float: '' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: '22', integer: '23', float: '22.35' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: '32', integer: '', float: '' }
    ]

    return {
      tableData
    }
  }
})
</script>
