<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import type { VxeUploadProps, VxeUploadPropTypes } from 'vxe-pc-ui'
import axios from 'axios'

interface RowVO {
  id: number
  name: string
  fileList1: VxeUploadPropTypes.ModelValue
  fileList2: VxeUploadPropTypes.ModelValue
  imgList1: VxeUploadPropTypes.ModelValue
  imgList2: VxeUploadPropTypes.ModelValue
}

export default Vue.extend({
  data () {
    const imgList1CellRender: VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps> = {
      name: 'VxeUpload',
      props: {
        mode: 'image',
        readonly: true,
        progressText: '{percent}%',
        moreConfig: {
          maxCount: 1
        },
        imageConfig: {
          width: 40,
          height: 40
        },
        uploadMethod ({ file }) {
          const formData = new FormData()
          formData.append('file', file)
          return axios.post('/api/pub/upload/single', formData).then((res) => {
            // { url: ''}
            return {
              ...res.data
            }
          })
        }
      }
    }

    const imgList2CellRender: VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps> = {
      name: 'VxeUpload',
      props: {
        mode: 'image',
        multiple: true,
        showButtonText: false,
        dragSort: true,
        progressText: '{percent}%',
        moreConfig: {
          maxCount: 1
        },
        imageConfig: {
          width: 40,
          height: 40
        },
        uploadMethod ({ file }) {
          const formData = new FormData()
          formData.append('file', file)
          return axios.post('/api/pub/upload/single', formData).then((res) => {
            // { url: ''}
            return {
              ...res.data
            }
          })
        }
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 180 },
        { field: 'imgList1', title: '图片列表', width: 160, cellRender: imgList1CellRender },
        { field: 'imgList2', title: '上传图片', width: 210, cellRender: imgList2CellRender }
      ],
      data: [
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
      ]
    }

    return {
      gridOptions,
      imgList1CellRender,
      imgList2CellRender
    }
  }
})
</script>
