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
  sexTxt?: string
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
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        {
          title: 'Group1',
          children: [
            { field: 'sexTxt', title: 'Sex' },
            { field: 'num', title: 'Number' },
            { field: 'age', title: 'Age' }
          ]
        },
        { field: 'address', title: 'Address', width: 200 }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  created () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Shanghai' }
    ]

    tableData.forEach(row => {
      row.sexTxt = this.formatSex(row)
    })

    this.gridOptions.data = tableData
  },
  methods: {
    formatSex (row: RowVO) {
      return row.sex === '1' ? '男' : '女'
    }
  }
})
</script>
