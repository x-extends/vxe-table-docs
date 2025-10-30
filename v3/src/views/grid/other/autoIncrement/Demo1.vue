<template>
  <div>
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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      height: 500,
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      columns: [
        { field: 'id', title: 'ID', width: 80 },
        { field: 'name', title: 'Name' },
        { field: 'nickname', title: 'Nickname' },
        { field: 'sex', title: 'Sex', width: 100 },
        { field: 'age', title: 'Age', width: 100 },
        { field: 'address', title: 'Address' }
      ],
      data: []
    }

    const adTime = null as any
    const mockIndex = 1000000

    return {
      gridOptions,
      adTime,
      mockIndex
    }
  },
  created () {
    this.addRow()
  },
  deactivated () {
    clearTimeout(this.adTime)
  },
  methods: {
    addRow () {
      this.adTime = setTimeout(() => {
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          this.mockIndex++
          const row: RowVO = {
            id: this.mockIndex,
            name: `名字_${this.mockIndex}`,
            nickname: `昵称_${this.mockIndex}`,
            role: '',
            sex: '1',
            age: 18,
            address: '地址'
          }
          this.gridOptions.data.push(row)
          // 避免数据过大，当大于200行时，删除旧的50条，以此循环
          if (this.gridOptions.data.length >= 200) {
            this.gridOptions.data.splice(0, 50)
          }
          this.addRow()
        }
      }, 1000)
    }
  }
})

</script>
