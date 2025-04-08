<template>
  <vxe-input
    v-if="currData && currField"
    v-model="currData[currField]"
    type="float"
    digits="2"
    prefix-icon="vxe-icon-rmb"
    align="right">
  </vxe-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'

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
