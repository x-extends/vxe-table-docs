<template>
  <vxe-input v-if="currRow && currColumn" type="float" digits="2" prefix-icon="vxe-icon-rmb" v-model="currRow[currColumn.field]"></vxe-input>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

export default Vue.extend({
  props: {
    params: {
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
      const { params } = this
      const { row, column } = params
      this.currRow = row
      this.currColumn = column
    }
  },
  created () {
    this.load()
  }
})
</script>
