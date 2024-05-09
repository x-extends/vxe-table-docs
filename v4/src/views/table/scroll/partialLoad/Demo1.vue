<template>
  <div>
    <p>
      <vxe-button @click="loadList(20)">+20条</vxe-button>
      <vxe-button @click="loadList(100)">+100条</vxe-button>
      <vxe-button @click="loadList(500)">+500条</vxe-button>
      <vxe-button @click="loadList(1000)">+1000条</vxe-button>
      <vxe-button @click="loadList(2000)">+2000条</vxe-button>
      <vxe-button @click="scrollTo1Event">y=4000</vxe-button>
      <vxe-button @click="clearScrollEvent">清除滚动状态</vxe-button>
    </p>

    <vxe-table
      ref="tableRef"
      border
      show-overflow
      height="500"
      :row-config="{keyField: 'id'}"
      :column-config="{resizable: true}"
      :loading="loading"
      :scroll-y="{enabled: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  date: string
  address: string
  checked: boolean
}

const loading = ref(false)

let allData: RowVO[] = []

const tableRef = ref<VxeTableInstance<RowVO>>()

const mockList = (size: number) => {
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      const list: RowVO[] = []
      for (let index = 0; index < size; index++) {
        list.push({
          checked: false,
          id: 10000 + index,
          name: 'test' + index,
          role: 'developer',
          age: 10,
          date: '2019-05-01',
          address: 'address abc' + index
        })
      }
      resolve(list)
    }, 250)
  })
}

const loadList = (size: number) => {
  loading.value = true
  mockList(size).then(data => {
    const $table = tableRef.value
    allData = allData.concat(data)// 局部追加并保存所有数据
    if ($table) {
      $table.loadData(allData)
    }
    loading.value = false
  })
}

const scrollTo1Event = () => {
  const $table = tableRef.value
  if ($table) {
    $table.scrollTo(null, 4000)
  }
}

const clearScrollEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearScroll()
  }
}

loadList(600)
</script>
