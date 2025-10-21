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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles, VxeTableDefines } from 'vxe-table'
import XEUtils from 'xe-utils'

interface ColValItem {
  checked: boolean
  value: string
}

export default Vue.extend({
  props: {
    renderOpts: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterOptions>,
    renderParams: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>
  },
  data () {
    return {
      currOption: null as VxeTableDefines.FilterOption | null,
      isCheckedAll: false,
      allValList: [] as ColValItem[],
      columnValList: [] as ColValItem[]
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
        this.currOption = option
        this.allValList = colValList
        this.columnValList = colValList
      }
    },
    searchEvent  () {
      const option = this.currOption
      if (option) {
        this.columnValList = option.data.sVal ? this.allValList.filter((item) => item.value.indexOf(option.data.sVal) > -1) : this.allValList
      }
    },
    changeAllEvent  () {
      this.columnValList.forEach((item) => {
        item.checked = this.isCheckedAll
      })
    },
    confirmFilterEvent  () {
      const { renderParams } = this
      const option = this.currOption
      if (renderParams && option) {
        const { data } = option
        const { $table } = renderParams
        data.vals = this.columnValList.filter((item) => item.checked).map((item) => item.value)
        $table.updateFilterOptionStatus(option, true)
        $table.saveFilterPanel()
      }
    },
    resetFilterEvent  () {
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
