<template>
  <div v-if="currOption" class="my-filter-complex">
    <div class="my-fc-type">
      <VxeRadio v-model="currOption.data.type" name="fType" label="has">包含</VxeRadio>
      <VxeRadio v-model="currOption.data.type" name="fType" label="eq">等于</VxeRadio>
    </div>
    <div class="my-fc-name">
      <VxeInput v-model="currOption.data.name" class="my-fc-input" mode="text" placeholder="请输入名称" @input="changeOptionEvent()"></VxeInput>
    </div>
    <div class="my-fc-footer">
      <VxeButton @click="resetEvent">重置</VxeButton>
      <VxeButton status="primary" @click="confirmEvent">确认</VxeButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, PropType, ref } from 'vue'
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
    const { $table } = params
    const checked = !!option.data.name
    $table.updateFilterOptionStatus(option, checked)
  }
}

const confirmEvent = () => {
  const { params } = props
  if (params) {
    const { $table } = params
    $table.saveFilterPanel()
  }
}

const resetEvent = () => {
  const { params } = props
  if (params) {
    const { $table } = params
    $table.resetFilterPanel()
  }
}

watch(() => {
  const { column } = props.params || {}
  return column
}, load)

load()
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
