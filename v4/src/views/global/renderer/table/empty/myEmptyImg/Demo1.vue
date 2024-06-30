<template>
  <div>
    <vxe-table
      border
      height="300"
      :loading="loading"
      :empty-render="{name: 'MyTableEmptyImg'}"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

const tableData = ref<RowVO[]>([])
const loading = ref(false)

loading.value = true
setTimeout(() => {
  loading.value = false
}, 500)
</script>
