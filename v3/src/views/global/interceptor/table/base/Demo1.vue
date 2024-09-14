<template>
  <div>
    <vxe-table
      border
      height="300"
      :edit-config="{trigger: 'click',mode: 'cell'}"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.sex">
            <vxe-option value="Man" label="Man"></vxe-option>
            <vxe-option value="Women" label="Women"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Num"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  sex: string
  num: number
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', sex: 'Man', num: 28 },
      { id: 10002, name: 'Test2', sex: 'Women', num: 22 },
      { id: 10003, name: 'Test3', sex: 'Man', num: 32 },
      { id: 10004, name: 'Test4', sex: 'Women', num: 23 }
    ]

    return {
      tableData
    }
  }
})
</script>
