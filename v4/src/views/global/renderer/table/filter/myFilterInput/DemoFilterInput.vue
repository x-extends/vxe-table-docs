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
    params: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderTableFilterParams)
    }
  },
  data () {
    return {
      currOption: null as VxeTableDefines.FilterOption|null
    }
  },
  methods: {
    load () {
      const { params } = this
      if (params) {
        const { column } = params
        const option = column.filters[0]
        this.currOption = option
      }
    },
    changeOptionEvent  () {
      const { params } = this
      const option = this.currOption
      if (params && option) {
        const { $table } = params
        const checked = !!option.data
        $table.updateFilterOptionStatus(option, checked)
      }
    },
    keyupEvent ({ $event }) {
      const { params } = this
      if (params) {
        const { $table } = params
        if ($event.key === 'Enter') {
          $table.saveFilterPanel()
        }
      }
    }
  },
  watch: {
    'props.params' () {
      this.load()
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
