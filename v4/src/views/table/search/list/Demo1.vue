<template>
  <div>
    <p>
      <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" clearable @change="searchEvent"></vxe-input>
    </p>

    <vxe-table
      border
      class="mylist-table"
      height="400"
      :column-config="{useKey: true}"
      :row-config="{useKey: true}"
      :data="list">
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column field="name" title="Name" type="html"></vxe-column>
      <vxe-column field="role" title="Role" type="html"></vxe-column>
      <vxe-column field="age" title="Age" type="html"></vxe-column>
      <vxe-column field="address" title="Address" type="html"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  amount: number
  address: string
}

const filterName = ref('')
const list = ref<RowVO[]>([])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
  { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
  { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
])

const handleSearch = () => {
  const filterVal = String(filterName.value).trim().toLowerCase()
  if (filterVal) {
    const filterRE = new RegExp(filterVal, 'gi')
    const searchProps = ['name', 'role', 'age', 'address']
    const rest = tableData.value.filter(item => searchProps.some(key => String(item[key]).toLowerCase().indexOf(filterVal) > -1))
    list.value = rest.map(row => {
      // 搜索为克隆数据，不会污染源数据
      const item = XEUtils.clone(row)
      searchProps.forEach(key => {
        item[key] = String(item[key]).replace(filterRE, match => `<span class="keyword-highlight">${match}</span>`)
      })
      return item
    })
  } else {
    list.value = tableData.value
  }
}

// 节流函数,间隔500毫秒触发搜索
const searchEvent = XEUtils.throttle(function () {
  handleSearch()
}, 500, { trailing: true, leading: true })

handleSearch()
</script>

<style lang="scss" scoped>
.mylist-table {
  ::v-deep(.keyword-highlight)  {
    background-color: #FFFF00;
  }
}
</style>
