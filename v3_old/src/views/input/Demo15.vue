<template>
  <div>
    <vxe-input v-model="val1" placeholder="小数类型" type="float"></vxe-input>
    <vxe-input v-model="val2" placeholder="小数间隔 2.3" type="float" step="2.3" clearable></vxe-input>
    <vxe-input v-model="val3" placeholder="小数范围限制 0-50" type="float" min="0" max="50" clearable></vxe-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: '',
      val2: '',
      val3: ''
    }
  }
}
</script>
