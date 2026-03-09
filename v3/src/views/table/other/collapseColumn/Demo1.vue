<template>
  <div>
    <vxe-table
      border
      height="400"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-colgroup field="g1" title="分组1">
        <template #header="{ column }">
          <vxe-button mode="text" :icon="foldMaps.g1 ? 'vxe-icon-square-minus' : 'vxe-icon-square-plus'" @click="collapsable('g1')"></vxe-button>
          <span>{{ column.title }}</span>
        </template>

        <vxe-column field="name" title="Name" width="200"></vxe-column>
        <vxe-column field="role" title="Role" :visible="foldMaps.g1" width="200"></vxe-column>
        <vxe-column field="sex" title="Sex" :visible="foldMaps.g1" width="200"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup field="g2" title="分组2">
        <template #header="{ column }">
          <vxe-button mode="text" :icon="foldMaps.g2 ? 'vxe-icon-square-minus' : 'vxe-icon-square-plus'" @click="collapsable('g2')"></vxe-button>
          <span>{{ column.title }}</span>
        </template>

        <vxe-column field="age" title="Age" width="200"></vxe-column>
        <vxe-column field="rate" title="Rate" :visible="foldMaps.g2" width="200"></vxe-column>
        <vxe-column field="address" title="Address" :visible="foldMaps.g2" width="200"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
    const foldMaps = {
      g1: true,
      g2: true
    }

    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
    ]

    return {
      foldMaps,
      tableData
    }
  },
  methods: {
    collapsable (key: string) {
      this.foldMaps[key] = !this.foldMaps[key]
    }
  }
})
</script>
