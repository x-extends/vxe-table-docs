<template>
  <div>
    <vxe-input v-model="val1" placeholder="季选择" type="quarter" clearable></vxe-input>
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
