<template>
  <div>
    <vxe-table
      border
      height="300"
      :loading="loading"
      :empty-render="emptyRender"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

const tableData = ref<RowVO[]>([])
const loading = ref(false)

const emptyRender = reactive<VxeTablePropTypes.EmptyRender>({
  name: 'MyTableEmptyText'
})

loading.value = true
setTimeout(() => {
  loading.value = false
}, 500)
</script>
