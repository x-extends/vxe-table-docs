<template>
  <vxe-link :href="cellUrl" status="primary" target="_blank">{{ cellLabel }}</vxe-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

export default Vue.extend({
  props: {
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderTableDefaultParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderTableDefaultParams)
    }
  },
  data () {
    return {
      currColumn: null as VxeTableDefines.ColumnInfo | null,
      currRow: null as any
    }
  },
  computed: {
    cellUrl (this: any) {
      if (this.currRow && this.currColumn) {
        return this.currRow.url
      }
      return ''
    },
    cellLabel (this: any) {
      if (this.currRow && this.currColumn) {
        return this.currRow[this.currColumn.field]
      }
      return ''
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
