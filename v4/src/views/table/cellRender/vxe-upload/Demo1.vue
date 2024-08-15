<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180"></vxe-column>
      <vxe-column field="fileList" title="附件列表" width="300" :cell-render="fileListCellRender"></vxe-column>
      <vxe-column field="imgList" title="图片列表" width="600" :cell-render="imgListCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'
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
    readonly: true,
    moreConfig: {
      maxCount: 1,
      layout: 'horizontal'
    }
  }
})

const imgListCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeUpload',
  props: {
    mode: 'image',
    readonly: true,
    moreConfig: {
      maxCount: 1
    },
    imageStyle: {
      width: 40,
      height: 40
    }
  }
})

const tableData = ref<RowVO[]>([
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
])
</script>
