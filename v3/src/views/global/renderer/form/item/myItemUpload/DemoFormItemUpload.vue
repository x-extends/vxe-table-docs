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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeUpload, VxeGlobalRendererHandles, VxeUploadPropTypes } from 'vxe-pc-ui'
import axios from 'axios'

export default Vue.extend({
  components: {
    VxeUpload
  },
  props: {
    renderOpts: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentOptions>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentOptions)
    },
    params: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentParams)
    }
  },
  data () {
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

    return {
      currData: null as any,
      currField: '',
      uploadMethod
    }
  },
  computed: {
    renderProps () {
      const renderOpts: VxeGlobalRendererHandles.RenderFormItemContentOptions = this.renderOpts
      return Object.assign({ mode: 'file' }, renderOpts.props)
    }
  },
  methods: {
    load () {
      const params = this.params
      const { data, field } = params
      this.currData = data
      this.currField = field
    }
  },
  created () {
    this.load()
  }
})
</script>
