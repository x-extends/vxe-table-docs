<template>
  <div>
    <vxe-select v-model="val1" placeholder="默认尺寸">
      <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
    </vxe-select>
    <vxe-select v-model="val2" placeholder="中等尺寸" size="medium">
      <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
    </vxe-select>
    <vxe-select v-model="val3" placeholder="小型尺寸" size="small">
      <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
    </vxe-select>
    <vxe-select v-model="val4" placeholder="超小尺寸" size="mini">
      <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
    </vxe-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null,
      val2: 3,
      val3: null,
      val4: 9
    }
  }
}
</script>
