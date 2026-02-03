<template>
  <div>
    <vxe-button status="primary" @click="loadList(3)">加载3条</vxe-button>
    <vxe-button status="primary" @click="loadList(0)">加载0条</vxe-button>

    <vxe-grid
      v-bind="gridOptions"
      @ready="readyEvent"
      @data-change="dataChangeEvent"
      @init-rendered="initRenderedEvent"
      @data-rendered="dataRenderedEvent">
    </vxe-grid>
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
    const allList: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const gridOptions: VxeGridProps<RowVO> = {
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: allList
    }

    return {
      gridOptions,
      allList
    }
  },
  methods: {
    loadList (size: number) {
      this.gridOptions.data = this.allList.slice(0, size)
    },
    readyEvent () {
      console.log('ready 表格准备就绪')
    },
    dataChangeEvent () {
      console.log('data-change 数据列表发生改变')
    },
    initRenderedEvent () {
      console.log('init-rendered 数据列表被赋值并首次渲染完成')
    },
    dataRenderedEvent () {
      console.log('data-rendered 数据列表被赋值并渲染完成')
    }
  }
})
</script>
