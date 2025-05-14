<template>
  <div>
    <vxe-button status="primary" @click="openCustomEvent">打开个性化列设置</vxe-button>
    <vxe-button @click="closeCustomEvent">关闭个性化列设置</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #ageHeader="{ column }">
        <span>{{ column.title }}</span>
        <vxe-button mode="text" icon="vxe-icon-setting-fill" @click="openCustomEvent"></vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

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
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age', slots: { header: 'ageHeader' } }
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
    openCustomEvent () {
      const $table = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($table) {
        $table.openCustom()
      }
    },
    closeCustomEvent () {
      const $table = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($table) {
        $table.closeCustom()
      }
    }
  }
})
</script>
