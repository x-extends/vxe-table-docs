<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180"></vxe-column>
      <vxe-column field="fileList1" title="附件列表" width="240" :cell-render="fileList1CellRender"></vxe-column>
      <vxe-column field="fileList2" title="上传附件" width="300" :cell-render="fileList2CellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'
import { VxeUploadProps, VxeUploadPropTypes } from 'vxe-pc-ui'
import axios from 'axios'

interface RowVO {
  id: number
  name: string
  fileList1: VxeUploadPropTypes.ModelValue
  fileList2: VxeUploadPropTypes.ModelValue
  imgList1: VxeUploadPropTypes.ModelValue
  imgList2: VxeUploadPropTypes.ModelValue
}

const fileList1CellRender = reactive<VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    readonly: true,
    progressText: '{percent}%',
    moreConfig: {
      maxCount: 1,
      layout: 'horizontal'
    }
  }
})

const fileList2CellRender = reactive<VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    multiple: true,
    showButtonText: false,
    dragSort: true,
    progressText: '{percent}%',
    moreConfig: {
      maxCount: 1,
      layout: 'horizontal'
    },
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})

const tableData = ref<RowVO[]>([
  {
    id: 10001,
    name: 'Test1',
    imgList1: [],
    imgList2: [],
    fileList1: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
    ],
    fileList2: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
    ]
  },
  {
    id: 10002,
    name: 'Test2',
    imgList1: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
    ],
    imgList2: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
    ],
    fileList1: [],
    fileList2: []
  },
  {
    id: 10003,
    name: 'Test3',
    imgList1: [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ],
    imgList2: [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ],
    fileList1: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
    ],
    fileList2: [
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
    ]
  }
])
</script>
