<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #empty>
        <span style="color: red;">
          <img src="https://vxeui.com/resource/img/546.gif">
          <p>不用再看了，没有更多数据了！</p>
        </span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
  age: number
  date12: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 300,
  loading: false,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', width: 300 },
    { field: 'sex', title: 'Sex', width: 300 },
    { field: 'age', title: 'Age', width: 300 },
    { field: 'date12', title: 'Date', width: 300 },
    { field: 'address', title: 'Address', width: 300, showOverflow: true }
  ],
  data: []
})

gridOptions.loading = true
setTimeout(() => {
  gridOptions.data = []
  gridOptions.loading = false
}, 2000)
</script>
