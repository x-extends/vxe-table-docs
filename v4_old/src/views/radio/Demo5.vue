<template>
  <div>
    <vxe-radio-group v-model="val1">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="val2" size="medium">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="val3" size="small" :strict="false">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="val4" size="mini" :strict="false">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
const val2 = ref('2')
const val3 = ref()
const val4 = ref('1')
</script>
