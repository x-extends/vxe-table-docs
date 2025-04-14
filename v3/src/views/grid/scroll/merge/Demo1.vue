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
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showFooter: true,
      height: 600,
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      mergeCells: [
        { row: 2, col: 1, rowspan: 4, colspan: 2 },
        { row: 16, col: 2, rowspan: 12, colspan: 3 },
        { row: 30, col: 2, rowspan: 5, colspan: 2 },
        { row: 100, col: 1, rowspan: 18, colspan: 3 },
        { row: 150, col: 1, rowspan: 8, colspan: 2 }
      ],
      mergeFooterItems: [
        { row: 0, col: 1, rowspan: 2, colspan: 1 }
      ],
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300 },
        { field: 'role', title: 'Role', minWidth: 300 },
        { field: 'sex', title: 'Sex', minWidth: 300 },
        { field: 'age', title: 'Age', minWidth: 300 },
        { field: 'address', title: 'Address', minWidth: 500 }
      ],
      data: [],
      footerData: [
        { seq: '合计', name: '666', role: '888', sex: '999', age: '234', address: '453' },
        { seq: '均值', name: '222', role: '333', sex: '777', age: '876', address: '134' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    // 模拟行数据
    loadList (size = 200) {
      const dataList: RowVO[] = []
      for (let i = 0; i < size; i++) {
        dataList.push({
          id: 10000 + i,
          name: 'Test' + i,
          role: 'Developer',
          sex: '男',
          age: 20,
          address: 'Address abc'
        })
      }
      this.gridOptions.data = dataList
    }
  },
  created () {
    this.loadList(500)
  }
})
</script>
