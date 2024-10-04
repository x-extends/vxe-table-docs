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
  age: string
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: 600,
      loading: false,
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      scrollY: {
        enabled: true,
        gt: 0
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
        { field: 'role', title: 'Role', editRender: { name: 'input' } },
        { field: 'age', title: 'Age', editRender: { name: 'input' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
        { field: 'address', title: 'Address', editRender: { name: 'input' } }
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
      this.gridOptions.loading = true
      setTimeout(() => {
        const dataList: RowVO[] = []
        for (let i = 0; i < size; i++) {
          dataList.push({
            id: i,
            name: `名称${i}`,
            nickname: '',
            role: `角色${i}`,
            age: '18',
            sex: '',
            address: ''
          })
        }
        this.gridOptions.data = dataList
        this.gridOptions.loading = false
      }, 350)
    }

  },
  created () {
    this.loadList(500)
  }
})
</script>
