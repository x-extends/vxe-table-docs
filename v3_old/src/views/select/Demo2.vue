<template>
  <div>
    <vxe-select v-model="val1" placeholder="可清除" clearable>
      <vxe-option v-for="num in 15" :key="num" :value="num" :label="`选项${num}`"></vxe-option>
    </vxe-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null
    }
  }
}
</script>
