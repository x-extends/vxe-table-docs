<template>
  <div v-if="currOption" class="my-filter-complex">
    <div class="my-fc-type">
      <vxe-radio v-model="currOption.data.type" name="fType" label="has">包含</vxe-radio>
      <vxe-radio v-model="currOption.data.type" name="fType" label="eq">等于</vxe-radio>
    </div>
    <div class="my-fc-name">
      <vxe-input v-model="currOption.data.name" class="my-fc-input" mode="text" placeholder="请输入名称" @change="changeOptionEvent()"></vxe-input>
    </div>
    <div class="my-fc-footer">
      <vxe-button @click="resetEvent">重置</vxe-button>
      <vxe-button status="primary" @click="confirmEvent">确认</vxe-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

export default Vue.extend({
  props: {
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>,
      default: () => ({} as VxeGlobalRendererHandles.RenderTableFilterParams)
    }
  },
  data () {
    return {
      currOption: null as VxeTableDefines.FilterOption | null
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
    load  () {
      const { renderParams } = this
      if (renderParams) {
        const { column } = renderParams
        const option = column.filters[0]
        this.currOption = option
      }
    },
    changeOptionEvent () {
      const { renderParams } = this
      const option = this.currOption
      if (renderParams && option) {
        const { $table } = renderParams
        const checked = !!option.data.name
        $table.updateFilterOptionStatus(option, checked)
      }
    },
    confirmEvent  () {
      const { renderParams } = this
      if (renderParams) {
        const { $table } = renderParams
        $table.saveFilterPanel()
      }
    },
    resetEvent  () {
      const { renderParams } = this
      if (renderParams) {
        const { $table } = renderParams
        $table.resetFilterPanel()
      }
    }
  },
  created () {
    this.load()
  }
})
</script>

<style lang="scss" scoped>
.my-filter-complex {
  width: 260px;
  padding: 5px 15px 10px 15px;
  .my-fc-type {
    padding: 8px 0;
  }
  .my-fc-input {
    width: 100%;
  }
  .my-fc-footer {
    text-align: center;
    margin-top: 8px;
  }
}
</style>
