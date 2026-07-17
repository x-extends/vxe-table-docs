<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #g1_header="{ column }">
        <vxe-button mode="text" :icon="showGroup1 ? 'vxe-icon-square-minus' : 'vxe-icon-square-plus'" @click="handleGroup1"></vxe-button>
        <span>{{ column.title }}</span>
      </template>

      <template #g2_header="{ column }">
        <vxe-button mode="text" :icon="showGroup2 ? 'vxe-icon-square-minus' : 'vxe-icon-square-plus'" @click="handleGroup2"></vxe-button>
        <span>{{ column.title }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

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
      height: 400,
      columns: [
        { type: 'checkbox', width: 60 },
        {
          field: 'g1',
          title: '分组1',
          slots: {
            header: 'g1_header'
          },
          children: [
            { field: 'name', title: 'Name', width: 200 },
            { field: 'role', title: 'Role', width: 200 },
            { field: 'sex', title: 'Sex', width: 200 }
          ]
        },
        {
          field: 'g1',
          title: '分组1',
          slots: {
            header: 'g2_header'
          },
          children: [
            { field: 'age', title: 'Age', width: 200 },
            { field: 'rate', title: 'Rate', width: 200 },
            { field: 'address', title: 'Address', width: 200 }
          ]
        }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ]
    }

    const showGroup1 = true
    const showGroup2 = true

    return {
      gridOptions,
      showGroup1,
      showGroup2
    }
  },
  methods: {
    handleGroup1 () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        this.showGroup1 = !this.showGroup1
        if (this.showGroup1) {
          $grid.showColumn(['role', 'sex'])
        } else {
          $grid.hideColumn(['role', 'sex'])
        }
      }
    },
    handleGroup2 () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        this.showGroup2 = !this.showGroup2
        if (this.showGroup2) {
          $grid.showColumn(['rate', 'address'])
        } else {
          $grid.hideColumn(['rate', 'address'])
        }
      }
    }
  }
})
</script>
