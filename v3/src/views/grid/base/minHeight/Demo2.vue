<template>
  <div>
    <p>
      <vxe-button @click="loadList">加载数据</vxe-button>
    </p>

    <div style="height: 400px;">
      <vxe-grid v-bind="gridOptions"></vxe-grid>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      loading: false,
      minHeight: 200,
      maxHeight: '100%',
      rowConfig: {
        isHover: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  methods: {
  // 模拟后端接口
    loadList () {
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.data = [
          { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
          { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
          { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
          { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
          { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
          { id: 10009, name: 'Test9', role: 'Develop', sex: 'Man', age: 41, address: 'test abc' },
          { id: 10010, name: 'Test10', role: 'Develop', sex: 'Man', age: 44, address: 'test ret' },
          { id: 10011, name: 'Test11', role: 'Develop', sex: 'Man', age: 48, address: 'test ret' },
          { id: 10012, name: 'Test12', role: 'Test', sex: 'Man', age: 37, address: 'test ret' }
        ]
        this.gridOptions.loading = false
      }, 300)
    }
  }
})
</script>
