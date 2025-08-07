<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #imgUrl="{ row }">
        <img :src="row.imgUrl" style="width: 100%;" />
      </template>

      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="updateImg(row)">随机设置图片</vxe-button>
        <vxe-button mode="text" status="success" @click="updateRowHeight(row)">刷新行高</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  imgUrl: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      rowConfig: {
        resizable: true
      },
      cellConfig: {
        height: 100
      },
      columns: [
        { type: 'seq', width: 70, rowResize: true },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' },
        { field: 'imgUrl', title: 'Image', width: 100, slots: { default: 'imgUrl' } },
        { title: '操作', width: 220, slots: { default: 'action' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', imgUrl: 'https://vxeui.com/resource/img/fj579.png' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', imgUrl: 'https://vxeui.com/resource/img/546.gif' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', imgUrl: 'https://vxeui.com/resource/img/fj586.png' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    updateImg (row: RowVO) {
      row.imgUrl = XEUtils.sample([
        'https://vxeui.com/resource/img/fj586.png',
        'https://vxeui.com/resource/img/fj581.jpeg',
        'https://vxeui.com/resource/img/fj562.png',
        'https://vxeui.com/resource/img/bq475.gif'
      ])
    },
    updateRowHeight (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.recalcRowHeight(row)
      }
    }
  }
})
</script>
