<template>
  <VxeUpload
    v-if="currData && currField"
    v-model="currData[currField]"
    multiple
    show-progress
    :mode="compProps.mode"
    :upload-method="uploadMethod">
  </VxeUpload>
</template>

<script lang="ts" setup>
import { ref, PropType, watch, computed } from 'vue'
import { VxeUpload, VxeGlobalRendererHandles, VxeUploadPropTypes, VxeUploadProps } from 'vxe-pc-ui'
import axios from 'axios'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentOptions>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentOptions)
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentParams>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentParams)
  }
})

const currData = ref<any>()

const compProps = computed(() => {
  const { renderOpts } = props
  return Object.assign({ mode: 'file' }, renderOpts.props) as VxeUploadProps
})

const currField = computed(() => {
  const { renderParams } = props
  return renderParams.field
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
  const { renderParams } = props
  const { data } = renderParams
  currData.value = data
}

watch(currField, () => {
  load()
})

load()
</script>
