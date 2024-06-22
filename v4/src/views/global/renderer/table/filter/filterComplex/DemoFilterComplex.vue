<template>
  <div v-if="currOption" class="my-filter-complex">
    <div class="my-fc-type">
      <VxeRadio v-model="currOption.data.type" name="fType" label="has">包含</VxeRadio>
      <VxeRadio v-model="currOption.data.type" name="fType" label="eq">等于</VxeRadio>
    </div>
    <div class="my-fc-name">
      <VxeInput v-model="currOption.data.name" mode="text" placeholder="请输入名称" @input="changeOptionEvent()"></VxeInput>
    </div>
    <div class="my-fc-footer">
      <VxeButton @click="resetEvent">重置</VxeButton>
      <VxeButton status="primary" @click="confirmEvent">确认</VxeButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { VxeInput, VxeRadio, VxeButton, VxeGlobalRendererHandles } from 'vxe-pc-ui'
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
    const checked = !!option.data.name
    $panel.changeOption(null, checked, option)
  }
}

const confirmEvent = () => {
  const { params } = props
  if (params) {
    const { $panel } = params
    $panel.confirmFilter()
  }
}

const resetEvent = () => {
  const { params } = props
  if (params) {
    const { $panel } = params
    $panel.resetFilter()
  }
}

load()
</script>

<style scoped>
.my-filter-complex {
  width: 260px;
  padding: 5px 15px 10px 15px;
}
.my-filter-complex .my-fc-type {
  padding: 8px 0;
}
.my-filter-complex .my-fc-footer {
  text-align: center;
}
</style>
