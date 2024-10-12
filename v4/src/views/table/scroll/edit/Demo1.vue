<template>
  <div>
    <p>
      <vxe-button @click="loadData(500)">加载500行</vxe-button>
      <vxe-button @click="loadData(1000)">加载1k行</vxe-button>
      <vxe-button @click="loadData(5000)">加载5k行</vxe-button>
      <vxe-button @click="loadData(10000)">加载1w行</vxe-button>
      <vxe-button @click="loadData(30000)">加载3w行</vxe-button>
    </p>
    <vxe-table
      border
      show-overflow
      ref="tableRef"
      height="800"
      :scroll-y="{enabled: true, gt: 0}"
      :edit-config="editConfig"
      :loading="loading">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="nickname" title="Nickname" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{name: 'input'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: string
  sex: string
  address: string
}

const tableRef = ref<VxeTableInstance>()

const loading = ref(false)

const editConfig = ref<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell'
})

// 模拟行数据
const loadData = (size = 200) => {
  loading.value = true
  setTimeout(() => {
    const $table = tableRef.value
    const data: RowVO[] = []
    for (let i = 0; i < size; i++) {
      data.push({
        id: i,
        name: `名称${i}`,
        nickname: '',
        role: `角色${i}`,
        age: '18',
        sex: '',
        address: ''
      })
    }
    loading.value = false
    if ($table) {
      const startTime = Date.now()
      $table.loadData(data).then(() => {
        VxeUI.modal.message({
          content: `加载时间 ${Date.now() - startTime} 毫秒`,
          status: 'success'
        })
      })
    }
  }, 350)
}

loadData(500)
</script>
