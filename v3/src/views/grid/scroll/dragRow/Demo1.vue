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
  nickname: string
  role: string
  sex: string
  age: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: 600,
      rowConfig: {
        useKey: true,
        drag: true
      },
      columnConfig: {
        useKey: true
      },
      scrollY: {
        enabled: true,
        gt: 0
      },
      columns: [
        { field: 'nickname', title: 'Nickname' },
        { field: 'name', title: 'Name', dragSort: true },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: []
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
          nickname: 'Nickname' + i,
          name: 'Test' + i,
          role: 'Developer',
          sex: '男',
          age: 18
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
