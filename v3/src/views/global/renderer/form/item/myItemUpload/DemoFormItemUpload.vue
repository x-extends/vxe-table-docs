<template>
  <vxe-upload
    v-if="currData && currField"
    v-model="currData[currField]"
    multiple
    show-progress
    :mode="compProps.mode"
    :upload-method="uploadMethod">
  </vxe-upload>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles, VxeUploadPropTypes, VxeUploadProps } from 'vxe-pc-ui'
import axios from 'axios'

export default Vue.extend({
  props: {
    renderOpts: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentOptions>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentOptions)
    },
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentParams)
    }
  },
  data () {
    const uploadMethod: VxeUploadPropTypes.UploadMethod = ({ file, updateProgress }) => {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData, {
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

    return {
      currData: null as any,
      uploadMethod
    }
  },
  computed: {
    currField () {
      const renderParams = this.renderParams as VxeGlobalRendererHandles.RenderFormItemContentParams
      return renderParams.field
    },
    compProps () {
      const renderOpts: VxeGlobalRendererHandles.RenderFormItemContentOptions = this.renderOpts
      return Object.assign({ mode: 'file' }, renderOpts.props) as VxeUploadProps
    }
  },
  watch: {
    currField () {
      this.load()
    }
  },
  methods: {
    load () {
      const { renderParams } = this
      const { data } = renderParams
      this.currData = data
    }
  },
  created () {
    this.load()
  }
})
</script>
