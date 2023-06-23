<template>
  <div>
    <vxe-button content="默认尺寸" @click="val1 = true"></vxe-button>
      <vxe-modal v-model="val1">
        <template #default>
          <div>默认尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vxe-modal>
      <vxe-button content="中等尺寸" @click="val2 = true" size="medium"></vxe-button>
      <vxe-modal v-model="val2" size="medium">
        <template #default>
          <div>中等尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vxe-modal>
      <vxe-button content="小型尺寸" @click="val3 = true" size="small"></vxe-button>
      <vxe-modal v-model="val3" size="small">
        <template #default>
          <div>小型尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vxe-modal>
      <vxe-button content="超小尺寸" @click="val4 = true" size="mini"></vxe-button>
      <vxe-modal v-model="val4" size="mini">
        <template #default>
          <div>超小尺寸</div>
          <div>xxxxxxxxx</div>
          <div>xxxxxxxxxx</div>
        </template>
      </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(false)
const val2 = ref(false)
const val3 = ref(false)
const val4 = ref(false)
</script>
