<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 400,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 400 },
    { field: 'role', title: 'Role', minWidth: 300 },
    { field: 'sex', title: 'Sex', width: 200 },
    { field: 'age', title: 'Age', width: 200 },
    { field: 'address', title: 'Address', minWidth: 500 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 54, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 49, address: 'tyui' },
    { id: 10005, name: 'Test5', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 46, address: 'asd' },
    { id: 10007, name: 'Test7', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10008, name: 'Test8', role: 'Designer', sex: 'Women', age: 46, address: 'Shanghai' },
    { id: 10009, name: 'Test9', role: 'Develop', sex: 'Women', age: 38, address: 'ghj' },
    { id: 100010, name: 'Test10', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 100011, name: 'Test1', role: 'Designer', sex: 'Women', age: 39, address: 'Shanghai' },
    { id: 100012, name: 'Test12', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 100013, name: 'Test13', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 100014, name: 'Test14', role: 'Designer', sex: 'Women', age: 46, address: '456' },
    { id: 100015, name: 'Test15', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 100016, name: 'Test16', role: 'PM', sex: 'Man', age: 28, address: 'test abc' },
    { id: 100017, name: 'Test17', role: 'Develop', sex: 'Man', age: 44, address: 'test abc' },
    { id: 100018, name: 'Test18', role: 'Develop', sex: 'Man', age: 32, address: 'test gh' },
    { id: 100019, name: 'Test19', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
    { id: 100020, name: 'Test20', role: 'PM', sex: 'Man', age: 46, address: 'test abc' },
    { id: 100020, name: 'Test20', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 100021, name: 'Test21', role: 'Test', sex: 'Man', age: 42, address: 'test abc' },
    { id: 100022, name: 'Test22', role: 'Develop', sex: 'Man', age: 28, address: 'test hjk' },
    { id: 100023, name: 'Test23', role: 'PM', sex: 'Man', age: 28, address: 'test abc' },
    { id: 100024, name: 'Test24', role: 'Develop', sex: 'Man', age: 28, address: 'test fdfg' },
    { id: 100025, name: 'Test25', role: 'PM', sex: 'Man', age: 28, address: 'test asd' },
    { id: 100026, name: 'Test26', role: 'Test', sex: 'Man', age: 39, address: 'test abc' },
    { id: 100027, name: 'Test27', role: 'Develop', sex: 'Man', age: 28, address: 'test hjk' },
    { id: 100028, name: 'Test28', role: 'Test', sex: 'Man', age: 46, address: 'test abc' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  scroll (params) {
    console.log(`纵向：${params.isY} 横向：${params.isX} 滚动距离：X：${params.scrollLeft}Y：${params.scrollTop} 滚动条宽高：${params.scrollWidth}*${params.scrollHeight} 滚动容器宽高：${params.bodyWidth}*${params.bodyHeight}`)
    if (params.scrollTop <= 0) {
      console.log('已经到顶部了')
    } else if (params.scrollTop + params.bodyHeight >= params.scrollHeight) {
      console.log('已经到底部了')
    }
  }
}
</script>
