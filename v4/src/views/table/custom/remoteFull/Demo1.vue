<template>
  <div>
    <vxe-notice-bar loop content="温馨提示：当使用服务端保存和恢复时，只要确保数据结构式正确的，就可以实现多种方式数据保存，比如：调用后端接口、使用 localStorage、使用 indexedDB 等任意方式"></vxe-notice-bar>
    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>
    <vxe-table
      id="myCustomUpdate1"
      ref="tableRef"
      :custom-config="customConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeTablePropTypes, VxeTableDefines, VxeToolbarInstance, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const toolbarRef = ref<VxeToolbarInstance>()
const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

// 模拟查询接口
const findCustomSetting = (id: string) => {
  return new Promise<VxeTableDefines.CustomStoreData>(resolve => {
    setTimeout(() => {
      try {
        if (sessionStorage.getItem(id)) {
          resolve(JSON.parse(sessionStorage.getItem(id) || '') as VxeTableDefines.CustomStoreData)
          VxeUI.modal.message({
            status: 'success',
            content: '异步还原用户个性化数据成功'
          })
        } else {
          resolve({})
        }
      } catch (e) {
        resolve({})
      }
    }, 500)
  })
}

// 模拟保存接口
const saveCustomSetting = (id: string, storeData: VxeTableDefines.CustomStoreData) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log(storeData)
      sessionStorage.setItem(id, JSON.stringify(storeData))
      VxeUI.modal.message({
        status: 'success',
        content: '保存用户个性化数据成功'
      })
      resolve()
    }, 200)
  })
}

const customConfig = reactive<VxeTablePropTypes.CustomConfig>({
  storage: true,
  restoreStore ({ id }) {
    return findCustomSetting(id)
  },
  updateStore ({ id, storeData }) {
    // 模拟异步，实现服务端保存
    return saveCustomSetting(id, storeData)
  }
})

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
