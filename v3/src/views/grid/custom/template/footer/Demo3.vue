<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #customFooter>
        <vxe-button status="info" @click="resetEvent">重置</vxe-button>
        <vxe-button status="success" @click="confirmEvent">自定义确认</vxe-button>
        <vxe-button status="error" @click="cancelAllEvent">自定义取消</vxe-button>
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
      customConfig: {
        mode: 'drawer',
        slots: {
          footer: 'customFooter'
        }
      },
      toolbarConfig: {
        custom: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    resetEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.resetCustom(true)
        $grid.closeCustom()
      }
    },
    confirmEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.saveCustom()
        $grid.closeCustom()
      }
    },
    cancelAllEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.closeCustom()
      }
    }
  }
})
</script>
