<template>
  <vxe-number-input
    v-if="currData && currField"
    v-model="currData[currField]"
    type="float"
    prefix-icon="vxe-icon-rmb"
    :digits="customProps.digits"
    :align="customProps.align"
  >
  </vxe-number-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeNumberInputProps, VxeGlobalRendererHandles } from 'vxe-pc-ui'

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
    return {
      currData: null as any
    }
  },
  computed: {
    currField () {
      const renderParams = this.renderParams as VxeGlobalRendererHandles.RenderFormItemContentParams
      return renderParams.field
    },
    customProps () {
      const renderOpts = this.renderOpts as VxeGlobalRendererHandles.RenderFormItemContentOptions
      return Object.assign({ digits: 2, align: 'center' }, renderOpts.props) as VxeNumberInputProps
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
