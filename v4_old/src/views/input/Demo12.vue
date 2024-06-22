<template>
  <div>
    <vxe-input v-model="val1" placeholder="日期多选" type="date" clearable multiple></vxe-input>
    <vxe-input v-model="val2" placeholder="月份多选" type="month" clearable multiple></vxe-input>
    <vxe-input v-model="val3" placeholder="季度多选" type="quarter" clearable multiple></vxe-input>
    <vxe-input v-model="val4" placeholder="年份多选" type="year" clearable multiple></vxe-input>
    <vxe-input v-model="val5" placeholder="周多选" type="week" clearable multiple></vxe-input>
    <vxe-input v-model="val6" placeholder="日期和时间多选" type="datetime" clearable multiple></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
const val5 = ref('')
const val6 = ref('')
</script>
