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
      showFooter: true,
      showOverflow: true,
      height: 600,
      rowConfig: {
        drag: true
      },
      columnConfig: {
      },
      virtualYConfig: {
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
      data: [],
      footerData: [
        { nickname: '合计', name: '333', role: '444', age: '888' }
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
