<template>
  <div>
    <vxe-date-picker v-model="val1" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDatePickerPropTypes.ShortcutConfig = {
      options: [
        { code: 'myToday', content: '今天' },
        { code: 'myYesterday', content: '昨天' },
        { code: 'myTomorrow', content: '明天' }
      ]
    }

    return {
      val1: '',
      shortcutConfig
    }
  }
})
</script>
