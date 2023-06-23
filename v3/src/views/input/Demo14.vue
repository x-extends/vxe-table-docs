<template>
  <div>
    <vxe-input v-model="val1" placeholder="整数类型" type="integer"></vxe-input>
    <vxe-input v-model="val2" placeholder="整数间隔 5" type="integer" step="5" clearable></vxe-input>
    <vxe-input v-model="val3" placeholder="整数范围限制 0-100" type="integer" min="0" max="100" clearable></vxe-input>
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
