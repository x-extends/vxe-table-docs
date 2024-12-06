<template>
  <VxeUpload
    v-if="currData && currField"
    v-model="currData[currField]"
    multiple
    show-progress
    :mode="renderProps.mode"
    :upload-method="uploadMethod">
  </VxeUpload>
</template>

<script lang="ts" setup>
import { ref, PropType, watch, computed } from 'vue'
import { VxeUpload, VxeGlobalRendererHandles, VxeUploadPropTypes, VxeUploadProps, VxeFormItemPropTypes } from 'vxe-pc-ui'
import axios from 'axios'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentOptions>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentOptions)
  },
  params: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentParams>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentParams)
  }
})

const currData = ref<any>()
const currField = ref<VxeFormItemPropTypes.Field>('')

const renderProps = computed(() => {
  const { renderOpts } = props
  return Object.assign({ mode: 'file' }, renderOpts.props) as VxeUploadProps
})

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

watch(() => props.params, () => {
  load()
})

load()
</script>
