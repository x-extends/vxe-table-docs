<template>
  <div>
    <vxe-button @click="loadList(5)">加载5条</vxe-button>
    <vxe-button @click="loadList(1000)">加载1k条</vxe-button>
    <vxe-button @click="loadList(10000)">加载1w条</vxe-button>
    <vxe-button @click="loadList(50000)">加载5w条</vxe-button>
    <vxe-button @click="loadList(100000)">加载10w条</vxe-button>
    <vxe-button @click="loadList(300000)">加载30w条</vxe-button>
    <vxe-table
      border
      show-overflow
      ref="tableRef"
      height="800"
      :scroll-y="{enabled: true, gt: 0}"
      :loading="loading">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" title="序号" width="100"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180"></vxe-column>
      <vxe-column field="role" title="Role" width="200"></vxe-column>
      <vxe-column field="num" title="Num" width="200"></vxe-column>
      <vxe-column field="address" title="Address" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  num: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)

// 模拟行数据
const loadList = (size = 200) => {
  loading.value = true
  setTimeout(() => {
    const dataList: RowVO[] = []
    for (let i = 0; i < size; i++) {
      dataList.push({
        id: i,
        name: `名称${i} 名称名称 称`,
        role: `role ${i}`,
        num: 20,
        address: 'shenzhen shen'
      })
    }

    const $table = tableRef.value
    if ($table) {
      const startTime = Date.now()
      $table.loadData(dataList).then(() => {
        VxeUI.modal.message({
          content: `加载时间 ${Date.now() - startTime} 毫秒`,
          status: 'success'
        })
        loading.value = false
      })
    }
  }, 350)
}

loadList(500)
</script>
