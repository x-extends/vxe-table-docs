<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { Console } from 'console'
import { ref, reactive, onUnmounted } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

let mockIndex = 1000000

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  height: 500,
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  columns: [
    { field: 'id', title: 'ID', width: 80 },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'sex', title: 'Sex', width: 100 },
    { field: 'age', title: 'Age', width: 100 },
    { field: 'address', title: 'Address' }
  ],
  data: []
})

let adTime: any = null

const addRow = () => {
  adTime = setTimeout(() => {
    const $grid = gridRef.value
    if ($grid) {
      mockIndex++
      const row: RowVO = {
        id: mockIndex,
        name: `名字_${mockIndex}`,
        nickname: `昵称_${mockIndex}`,
        role: '',
        sex: '1',
        age: 18,
        address: '地址'
      }
      gridOptions.data.push(row)
      // 避免数据过大，当大于200行时，删除旧的50条，以此循环
      if (gridOptions.data.length >= 200) {
        gridOptions.data.splice(0, 50)
      }
      addRow()
    }
  }, 1000)
}

onUnmounted(() => {
  clearTimeout(adTime)
})

addRow()
</script>
