<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="imgList" title="图片组" width="300" :cell-render="imgListCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  imgList: string[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      {
        id: 10001,
        name: 'Test1',
        role: 'Develop',
        imgList: [
          'https://vxeui.com/resource/img/fj581.jpeg'
        ]
      },
      {
        id: 10002,
        name: 'Test2',
        role: 'Test',
        imgList: [
          'https://vxeui.com/resource/img/fj577.jpg',
          'https://vxeui.com/resource/img/fj581.jpeg',
          'https://vxeui.com/resource/img/fj573.jpeg',
          'https://vxeui.com/resource/img/fj562.png'
        ]
      },
      {
        id: 10003,
        name: 'Test3',
        role: 'PM',
        imgList: [
          'https://vxeui.com/resource/img/fj577.jpg',
          'https://vxeui.com/resource/img/fj573.jpeg'
        ]
      }
    ]

    const imgListCellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeImageGroup',
      props: {
        imageStyle: {
          width: 36,
          height: 36
        }
      }
    }

    return {
      tableData,
      imgListCellRender
    }
  }
})
</script>
