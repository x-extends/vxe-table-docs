<template>
  <div>
    <vxe-date-range-picker v-model="val1" :shortcut-config="shortcutConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const shortcutConfig = reactive<VxeDateRangePickerPropTypes.ShortcutConfig>({
  options: [
    { code: 'myRecentWeek', content: '最近一周' },
    { code: 'myRecentMonth', content: '最近一个月' },
    { code: 'myRecentThreeMonth', content: '最近三个月' },
    { code: 'myRecentHalfYear', content: '最近半年' }
  ]
})
</script>
