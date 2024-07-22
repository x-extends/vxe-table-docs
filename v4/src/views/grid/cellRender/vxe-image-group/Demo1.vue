<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  imgList: string[]
}

const imgUrlCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeImageGroup',
  props: {
    imageStyle: {
      width: 36,
      height: 36
    }
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'imgList', title: '图片组', width: 300, cellRender: imgUrlCellRender }
  ],
  data: [
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
})
</script>
