<template>
  <div>
    <vxe-date-picker v-model="val1" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const shortcutConfig = reactive<VxeDatePickerPropTypes.ShortcutConfig>({
  options: [
    { code: 'myToday', content: '今天' },
    { code: 'myYesterday', content: '昨天' },
    { code: 'myTomorrow', content: '明天' }
  ]
})
</script>
