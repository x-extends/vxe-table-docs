<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  imgUrl: string
}

export default Vue.extend({
  data () {
    const imgUrlCellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeImage',
      props: {
        width: 36,
        height: 36
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'imgUrl', title: '图片', width: 80, cellRender: imgUrlCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
        { id: 10002, name: 'Test2', role: 'Test', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
        { id: 10003, name: 'Test3', role: 'PM', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' }
      ]
    }

    return {
      gridOptions,
      imgUrlCellRender
    }
  }
})
</script>
