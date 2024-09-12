<template>
  <div>
    <vxe-button @click="setPendingEvent">设置第2行尾标记状态</vxe-button>
    <vxe-button status="primary" @click="saveEvent">保存</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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
        { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' }
      ]
      resolve(list)
    }, 100)
  })
}

// 模拟接口
const saveApi = (pendingRecords: RowVO[]) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log(`已删除 ${pendingRecords.length} 行`, pendingRecords)
      resolve()
    }, 150)
  })
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 400,
      proxyConfig: {
        ajax: {
          query: () => {
            return findList()
          },
          save: ({ body }) => {
            // 接收 Promise<any>
            return saveApi(body.pendingRecords)
          }
        }
      },
      columns: [
        { type: 'checkbox', width: 50 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'nickname', title: 'Nickname' },
        { field: 'role', title: 'Role' },
        { field: 'address', title: 'Address', showOverflow: true }
      ]
    }
    return {
      gridOptions
    }
  },
  methods: {
    setPendingEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const data = $grid.getData()
        $grid.setPendingRow(data[1], true)
      }
    },
    saveEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.commitProxy('save')
      }
    }
  }
})
</script>
