<template>
  <div>
    <vxe-button @click="openEvent">高级导入</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #importBottom>
        <vxe-notice-bar content="自定义底部区域" style="background: palegreen;"></vxe-notice-bar>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

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
      showFooter: true,
      importConfig: {
        slots: {
          bottom: 'importBottom'
        }
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', sex: '666', age: '999' },
        { seq: '平均', sex: '888', age: '333' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    openEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openImport()
      }
    }
  }
})
</script>
