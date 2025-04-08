<template>
  <vxe-input
    v-if="currRow && currColumn"
    v-model="currRow[currColumn.field]"
    type="float"
    digits="2"
    prefix-icon="vxe-icon-rmb"
    align="right">
  </vxe-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

export default Vue.extend({
  props: {
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderTableEditParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderTableEditParams)
    }
  },
  data () {
    return {
      currColumn: null as VxeTableDefines.ColumnInfo | null,
      currRow: null as any
    }
  },
  methods: {
    load () {
      const { renderParams } = this
      const { row, column } = renderParams
      this.currRow = row
      this.currColumn = column
    }
  },
  created () {
    this.load()
  }
})
</script>
