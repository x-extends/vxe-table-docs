<template>
  <div v-if="currOption" class="my-filter-content">
    <div class="my-fc-search">
      <div class="my-fc-search-top">
        <vxe-input v-model="currOption.data.sVal" placeholder="搜索" clearable @change="searchEvent"></vxe-input>
      </div>
      <div class="my-fc-search-content">
        <template v-if="columnValList.length">
          <ul class="my-fc-search-list my-fc-search-list-head">
            <li class="my-fc-search-item">
              <vxe-checkbox v-model="isCheckedAll" @change="changeAllEvent">全选</vxe-checkbox>
            </li>
          </ul>
          <ul class="my-fc-search-list my-fc-search-list-body">
            <li class="my-fc-search-item" v-for="(item, sIndex) in columnValList" :key="sIndex">
              <vxe-checkbox v-model="item.checked">{{ item.value }}</vxe-checkbox>
            </li>
          </ul>
        </template>
        <template v-else>
          <div class="my-fc-search-empty">无匹配项</div>
        </template>
      </div>
    </div>
    <div class="my-fc-footer">
      <vxe-button @click="resetFilterEvent">重置</vxe-button>
      <vxe-button status="primary" @click="confirmFilterEvent">确认</vxe-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, PropType, ref, computed } from 'vue'
import { VxeGlobalRendererHandles, VxeTableDefines } from 'vxe-table'
import XEUtils from 'xe-utils'

const props = defineProps({
  renderParams: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>
})

interface ColValItem {
  checked: boolean
  value: string
}

const currOption = ref<VxeTableDefines.FilterOption>()
const isCheckedAll = ref(false)
const allValList = ref<ColValItem[]>([])
const columnValList = ref<ColValItem[]>([])

const currField = computed(() => {
  const { column } = props.renderParams || {}
  return column ? column.field : ''
})

const load = () => {
  const { renderParams } = props
  if (renderParams) {
    const { $table, column } = renderParams
    const fullData = $table.getFullData()
    const option = column.filters[0]
    const { vals } = option.data
    const colValList = Object.keys(XEUtils.groupBy(fullData, column.field)).map((val) => {
      return {
        checked: vals.includes(val),
        value: val
      }
    })
    currOption.value = option
    allValList.value = colValList
    columnValList.value = colValList
  }
}

const searchEvent = () => {
  const option = currOption.value
  if (option) {
    columnValList.value = option.data.sVal ? allValList.value.filter((item) => item.value.indexOf(option.data.sVal) > -1) : allValList.value
  }
}

const changeAllEvent = () => {
  columnValList.value.forEach((item) => {
    item.checked = isCheckedAll.value
  })
}

const confirmFilterEvent = () => {
  const { renderParams } = props
  const option = currOption.value
  if (renderParams && option) {
    const { data } = option
    const { $table } = renderParams
    data.vals = columnValList.value.filter((item) => item.checked).map((item) => item.value)
    $table.updateFilterOptionStatus(option, true)
    $table.saveFilterPanel()
  }
}

const resetFilterEvent = () => {
  const { renderParams } = props
  if (renderParams) {
    const { $table } = renderParams
    $table.resetFilterPanel()
  }
}

watch(currField, () => {
  load()
})

load()
</script>

<style lang="scss" scoped>
.my-filter-content {
  padding: 10px;
  user-select: none;
  .my-fc-search .my-fc-search-top {
    position: relative;
    padding: 5px 0;
  }
  .my-fc-search .my-fc-search-top > input {
    border: 1px solid #ABABAB;
    padding: 0 20px 0 2px;
    width: 200px;
    height: 22px;
    line-height: 22px;
  }
  .my-fc-search .my-fc-search-content {
    padding: 2px 10px;
  }
  .my-fc-search-empty {
    text-align: center;
    padding: 20px 0;
  }
  .my-fc-search-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .my-fc-search-list-body {
    overflow: auto;
    height: 120px;
  }
  .my-fc-search-list .my-fc-search-item {
    padding: 2px 0;
    display: block;
  }
  .my-fc-footer {
    text-align: right;
    padding-top: 10px;
  }
  .my-fc-footer button {
    padding: 0 15px;
    margin-left: 15px;
  }
}
</style>
