<template>
  <div>
    <vxe-table
      :expand-config="expandConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column type="expand" width="60">
        <template #content="{ row }">
          <div>Name：{{ row.name }}</div>
          <div>Mobile：{{ row.subInfo ? row.subInfo.mobile : '' }}</div>
          <div>Address：{{ row.subInfo ? row.subInfo.address : '' }}</div>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  subInfo?: {
    mobile: string
    address: string
  }
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28 },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22 },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32 },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24 }
])

// 模拟接口
const findSubInfo = (id: number) => {
  return new Promise<{
    mobile: string
    address: string
  }>(resolve => {
    setTimeout(() => {
      resolve({
        mobile: `${id}111111`,
        address: `${id}xxxxxxx`
      })
    }, 300)
  })
}

const expandConfig = ref<VxeTablePropTypes.ExpandConfig<RowVO>>({
  lazy: true,
  loadMethod ({ row }) {
    // 调用接口
    return findSubInfo(row.id).then(data => {
      row.subInfo = data
    })
  }
})
</script>
