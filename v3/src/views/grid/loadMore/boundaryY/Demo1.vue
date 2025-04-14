<template>
  <div>
    <vxe-grid v-bind="gridOptions" @scroll-boundary="scrollBoundaryEvent"></vxe-grid>
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
      virtualYConfig: {
        enabled: true,
        gt: 0,
        threshold: 50
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
      if (this.gridOptions.loading) {
        return
      }
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
    scrollBoundaryEvent ({ direction }) {
      switch (direction) {
        case 'top':
          console.log('触发顶部阈值范围')
          break
        case 'bottom':
          console.log('触发底部阈值范围')
          this.loadList(20)
          break
        case 'left':
          console.log('触发左侧阈值范围')
          break
        case 'right':
          console.log('触发右侧阈值范围')
          break
      }
    }
  },
  created () {
    this.loadList(20)
  }
})
</script>
