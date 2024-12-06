<template>
  <VxeInput
    v-if="currData && currField"
    v-model="currData[currField]"
    type="float"
    digits="2"
    prefix-icon="vxe-icon-rmb"
    align="right">
  </VxeInput>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeInput, VxeGlobalRendererHandles } from 'vxe-pc-ui'

export default Vue.extend({
  components: {
    VxeInput
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
    return {
      currData: null as any,
      currField: ''
    }
  },
  methods: {
    load () {
      const { params } = this
      const { data, field } = params
      this.currData = data
      this.currField = field
    }
  },
  watch: {
    params () {
      this.load()
    }
  },
  created () {
    this.load()
  }
})
</script>
