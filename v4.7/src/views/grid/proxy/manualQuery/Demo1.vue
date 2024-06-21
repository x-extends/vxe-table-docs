<template>
  <div>
    <vxe-button status="primary" @click="reloadEvent">手动刷新</vxe-button>
    <vxe-button status="primary" @click="queryEvent">手动查询</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance>()

// 模拟接口
const findList = () => {
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      const list = [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
        { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
        { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
        { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: 'Man', age: 39, address: 'Shenzhen' },
        { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Women', age: 35, address: 'Guangzhou' }
      ]
      resolve(list)
    }, 100)
  })
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 500,
  proxyConfig: {
    ajax: {
      query: () => {
        return findList()
      }
    }
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'role', title: 'Role' },
    { field: 'address', title: 'Address', showOverflow: true }
  ]
})

const reloadEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.commitProxy('reload')
  }
}

const queryEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.commitProxy('query')
  }
}
</script>
