<template>
  <div>
    <vxe-grid v-bind="gridOptions" @scroll="scrollEvent"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      loading: false,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      height: 600,
      columnConfig: {
        resizable: true
      },
      scrollY: {
        enabled: true,
        gt: 0
      },
      columns: [
        { type: 'seq', width: 80 },
        { field: 'id', title: 'ID', width: 120 },
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex', width: 100 }
      ],
      data: []
    }

    return {
      gridOptions,
      rowKey: 0
    }
  },
  methods: {
    // 模拟行数据
    loadList (size = 200) {
      // 模拟后端接口
      this.gridOptions.loading = true
      setTimeout(() => {
        const dataList: RowVO[] = []
        for (let i = 0; i < size; i++) {
          this.rowKey++
          dataList.push({
            id: `${this.rowKey}`,
            name: 'Test' + this.rowKey,
            role: 'Developer' + this.rowKey,
            sex: '男'
          })
        }
        this.gridOptions.data = [...this.gridOptions.data, ...dataList]
        this.gridOptions.loading = false
      }, 300)
    },
    scrollEvent ({ isTop, isBottom }) {
      if (isTop) {
        console.log('触碰到顶部')
      }
      if (isBottom) {
        console.log('触碰到底部')
        this.loadList(20)
      }
    }
  },
  created () {
    this.loadList(20)
  }
})
</script>
