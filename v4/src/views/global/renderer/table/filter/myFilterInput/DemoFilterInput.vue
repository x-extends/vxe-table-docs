<template>
  <div v-if="currOption" class="my-filter-input">
    <vxe-input mode="text" v-model="currOption.data" placeholder="支持回车筛选" @keyup="keyupEvent" @input="changeOptionEvent"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { watch, PropType, ref } from 'vue'
import { VxeGlobalRendererHandles, VxeInputEvents } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

const props = defineProps({
  params: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>,
    default: () => ({})
  }
})

const currOption = ref<VxeTableDefines.FilterOption>()

const load = () => {
  const { params } = props
  if (params) {
    const { column } = params
    const option = column.filters[0]
    currOption.value = option
  }
}

const changeOptionEvent = () => {
  const { params } = props
  const option = currOption.value
  if (params && option) {
    const { $panel } = params
    const checked = !!option.data
    $panel.changeOption(null, checked, option)
  }
}

const keyupEvent: VxeInputEvents.Keyup = ({ $event }) => {
  const { params } = props
  if (params) {
    const { $panel } = params
    if ($event.keyCode === 13) {
      $panel.confirmFilter($event)
    }
  }
}

watch(() => props.params, load)

load()
</script>

<style scoped>
.my-filter-input {
  padding: 10px;
}
</style>
