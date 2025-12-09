<template>
  <div>
    <vxe-table
      border
      show-overflow
      show-header-overflow
      show-footer-overflow
      height="600"
      :virtual-y-config="{enabled: true, gt: 0}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="role" title="Role"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="分组2">
        <vxe-column field="sex" title="Sex"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([])

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = []
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: 'Test' + i,
      role: 'Developer',
      sex: '男',
      age: 40,
      address: 'Address'
    })
  }
  tableData.value = dataList
}

loadList(500)
</script>
