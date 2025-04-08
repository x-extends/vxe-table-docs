<template>
  <ul v-if="currRow && currColumn">
    <li>
      <span>ID：</span>
      <span>{{ currRow.id }}</span>
    </li>
    <li>
      <span>Name：</span>
      <span>{{ currRow.name }}</span>
    </li>
    <li>
      <span>Sex：</span>
      <span>{{ currRow.sex }}</span>
    </li>
    <li>
      <span>Age：</span>
      <span>{{ currRow.age }}</span>
    </li>
  </ul>
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
    load  () {
      const { renderParams } = this
      const { row, column } = renderParams
      this.currRow = row
      this.currColumn = column
    }

  }
})
</script>
