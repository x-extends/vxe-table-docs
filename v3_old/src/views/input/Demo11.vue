<template>
  <div>
    <vxe-input v-model="val1" placeholder="时间选择" type="time" clearable></vxe-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: ''
    }
  }
}
</script>
