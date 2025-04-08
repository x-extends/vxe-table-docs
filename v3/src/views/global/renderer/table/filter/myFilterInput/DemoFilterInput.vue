<template>
  <div v-if="currOption" class="my-filter-input">
    <vxe-input mode="text" v-model="currOption.data" placeholder="按回车筛选" @keyup="keyupEvent" @change="changeOptionEvent"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

export default Vue.extend({
  props: {
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderTableFilterParams)
    }
  },
  data () {
    return {
      currOption: null as VxeTableDefines.FilterOption|null
    }
  },
  computed: {
    currField () {
      const renderParams = (this.renderParams || {}) as VxeGlobalRendererHandles.RenderTableFilterParams
      const { column } = renderParams
      return column ? column.field : ''
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
      if (renderParams) {
        const { column } = renderParams
        const option = column.filters[0]
        this.currOption = option
      }
    },
    changeOptionEvent  () {
      const { renderParams } = this
      const option = this.currOption
      if (renderParams && option) {
        const { $table } = renderParams
        const checked = !!option.data
        $table.updateFilterOptionStatus(option, checked)
      }
    },
    keyupEvent ({ $event }) {
      const { renderParams } = this
      if (renderParams) {
        const { $table } = renderParams
        if ($event.key === 'Enter') {
          $table.saveFilterPanel()
        }
      }
    }
  },
  created () {
    this.load()
  }
})
</script>

<style scoped>
.my-filter-input {
  padding: 10px;
}
</style>
