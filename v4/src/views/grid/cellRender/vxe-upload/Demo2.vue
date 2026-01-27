<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const imgList4CellRender = reactive({
  name: 'VxeUpload',
  props: {
    mode: 'image',
    multiple: true,
    showButtonText: false,
    dragSort: true,
    progressText: '{percent}%',
    moreConfig: {
      maxCount: 0
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
})

const gridOptions = reactive({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180 },
    { field: 'fileList4', title: '精简上传', width: 160, cellRender: imgList4CellRender }
  ],
  data: [
    {
      id: 10001,
      name: 'Test1',
      imgList4: []
    },
    {
      id: 10002,
      name: 'Test2',
      imgList4: [
        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
        { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
      ]
    },
    {
      id: 10003,
      name: 'Test3',
      imgList4: [
        { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
      ]
    }
  ]
})
</script>
