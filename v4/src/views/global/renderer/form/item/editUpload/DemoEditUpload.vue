<template>
  <VxeUpload
    v-if="currData && currField"
    v-model="currData[currField]"
    multiple
    show-progress
    :upload-method="uploadMethod">
  </VxeUpload>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { VxeUpload, VxeGlobalRendererHandles, VxeUploadPropTypes, VxeFormItemPropTypes } from 'vxe-pc-ui'
import axios from 'axios'

const props = defineProps({
  params: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentParams>,
    default: () => ({})
  }
})

const currData = ref<any>()
const currField = ref<VxeFormItemPropTypes.Field>()

const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file, updateProgress }) => {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/api/pub/upload/single', formData, {
    onUploadProgress (progressEvent) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 0))
      // 更新进度
      updateProgress(percentCompleted)
    }
  }).then((res) => {
    return {
      ...res.data
    }
  })
}

const load = () => {
  const { params } = props
  const { data, field } = params
  currData.value = data
  currField.value = field
}

load()
</script>
