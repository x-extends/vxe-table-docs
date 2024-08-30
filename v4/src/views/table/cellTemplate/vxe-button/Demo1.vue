<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="active" title="按钮" width="200">
        <template #default>
        <vxe-button mode="text" @click="viewEvent">查看</vxe-button>
        <vxe-button mode="text" status="error" @click="delEvent">删除</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop' },
  { id: 10002, name: 'Test2', role: 'Test' },
  { id: 10003, name: 'Test3', role: 'PM' }
])

const viewEvent = () => {
  VxeUI.modal.message({
    content: '点击了查看',
    status: 'success'
  })
}

const delEvent = () => {
  VxeUI.modal.confirm({
    title: '操作提示',
    content: '请您确认是否删除？'
  })
}
</script>
