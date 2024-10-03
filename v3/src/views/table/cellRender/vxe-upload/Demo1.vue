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
      <vxe-column field="imgList1" title="图片列表" width="160" :cell-render="imgList1CellRender"></vxe-column>
      <vxe-column field="imgList2" title="上传图片" width="210" :cell-render="imgList2CellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'
import { VxeUploadProps, VxeUploadPropTypes } from 'vxe-pc-ui'

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
    const tableData: RowVO[] = [
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

    const fileList1CellRender: VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps> = {
      name: 'VxeUpload',
      props: {
        readonly: true,
        progressText: '{percent}%',
        moreConfig: {
          maxCount: 1,
          layout: 'horizontal'
        }
      }
    }

    const fileList2CellRender: VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps> = {
      name: 'VxeUpload',
      props: {
        multiple: true,
        showButtonText: false,
        progressText: '{percent}%',
        moreConfig: {
          maxCount: 1,
          layout: 'horizontal'
        }
      }
    }

    const imgList1CellRender: VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps> = {
      name: 'VxeUpload',
      props: {
        mode: 'image',
        readonly: true,
        progressText: '{percent}%',
        moreConfig: {
          maxCount: 1
        },
        imageStyle: {
          width: 40,
          height: 40
        }
      }
    }

    const imgList2CellRender: VxeColumnPropTypes.CellRender<RowVO, VxeUploadProps> = {
      name: 'VxeUpload',
      props: {
        mode: 'image',
        multiple: true,
        showButtonText: false,
        progressText: '{percent}%',
        moreConfig: {
          maxCount: 1
        },
        imageStyle: {
          width: 40,
          height: 40
        }
      }
    }

    return {
      tableData,
      fileList1CellRender,
      fileList2CellRender,
      imgList1CellRender,
      imgList2CellRender
    }
  }
})
</script>
