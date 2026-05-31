<template>
  <span style="color: red;">{{ cellLabel }}元</span>
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
    cellLabel (this: any) {
      const { renderParams } = this
      const { $table, row, column } = renderParams
      if ($table && row && column) {
        return $table.getCellLabel(row, column)
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
