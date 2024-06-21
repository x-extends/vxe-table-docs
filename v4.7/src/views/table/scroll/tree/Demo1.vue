<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="expandAllEvent">展开所有</vxe-button>
        <vxe-button @click="claseExpandEvent">收起所有</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      show-overflow
      height="600"
      ref="tableRef"
      :loading="loading"
      :tree-config="{transform: true}"
      :scroll-y="{enabled: true, gt: 0}"
      :data="tableData">
      <vxe-column type="seq" width="200" tree-node></vxe-column>
      <vxe-column field="id" title="Id"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const loadList = () => {
  loading.value = true
  fetch('/resource/json/provinces_list.json').then(res => res.json()).then((data: RowVO[]) => {
    tableData.value = data
    loading.value = false
  })
}

const expandAllEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllTreeExpand(true)
  }
}

const claseExpandEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearTreeExpand()
  }
}

loadList()
</script>
