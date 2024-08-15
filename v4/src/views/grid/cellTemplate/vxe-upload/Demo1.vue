<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #fileList_default="{ row }">
        <vxe-upload v-model="row.fileList" :more-config="{maxCount: 1, layout: 'horizontal'}" readonly></vxe-upload>
      </template>

      <template #imgList_default="{ row }">
        <vxe-upload v-model="row.imgList" mode="image" :more-config="{ maxCount: 1 }" :image-style="{ width: 40, height: 40 }" readonly></vxe-upload>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  fileList: VxeUploadPropTypes.ModelValue
  imgList: VxeUploadPropTypes.ModelValue
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180 },
    { field: 'fileList', title: '附件列表', width: 300, slots: { default: 'fileList_default' } },
    { field: 'imgList', title: '图片列表', width: 600, slots: { default: 'imgList_default' } }
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
