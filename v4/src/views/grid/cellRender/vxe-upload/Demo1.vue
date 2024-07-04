<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  fileList: VxeUploadPropTypes.ModelValue
  imgList: VxeUploadPropTypes.ModelValue
}

const fileListCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeUpload',
  props: {
    readonly: true
  }
})

const imgListCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeUpload',
  props: {
    mode: 'image',
    readonly: true
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    height: 140
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180 },
    { field: 'fileList', title: '附件列表', width: 300, cellRender: fileListCellRender },
    { field: 'imgList', title: '图片列表', width: 600, cellRender: imgListCellRender }
  ],
  data: [
    {
      id: 10001,
      name: 'Test1',
      imgList: [],
      fileList: [
        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
      ]
    },
    {
      id: 10002,
      name: 'Test2',
      imgList: [
        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
        { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
      ],
      fileList: []
    },
    {
      id: 10003,
      name: 'Test3',
      imgList: [
        { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
      ],
      fileList: [
        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
        { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
        { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
      ]
    }
  ]
})
</script>
