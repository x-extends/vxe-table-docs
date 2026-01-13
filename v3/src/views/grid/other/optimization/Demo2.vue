<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
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
  num: number
  imgUrl: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  created () {
    this.gridOptions.columns = [
      { type: 'seq', width: 70 },
      { field: 'imgUrl', title: 'imgUrl' },
      { field: 'name', title: 'Name' },
      {
        title: 'Group1',
        children: [
          {
            field: 'sex',
            title: 'Sex',
            formatter: ({ row }) => {
              return this.formatSex(row)
            }
          },
          { field: 'num', title: 'Number' },
          { field: 'age', title: 'Age' }
        ]
      },
      { field: 'address', title: 'Address', width: 200 }
    ]
  },
  methods: {
    formatSex (row: RowVO) {
      return row.sex === '1' ? '男' : '女'
    }
  }
})
</script>
