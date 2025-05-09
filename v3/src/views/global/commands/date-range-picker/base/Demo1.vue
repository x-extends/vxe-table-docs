<template>
  <div>
    <vxe-date-range-picker v-model="val1" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDateRangePickerPropTypes.ShortcutConfig = {
      options: [
        { code: 'myRecentWeek', content: '最近一周' },
        { code: 'myRecentMonth', content: '最近一个月' },
        { code: 'myRecentThreeMonth', content: '最近三个月' },
        { code: 'myRecentHalfYear', content: '最近半年' }
      ]
    }

    return {
      val1: '',
      shortcutConfig
    }
  }
})
</script>
