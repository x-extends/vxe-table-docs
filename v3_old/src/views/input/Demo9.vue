<template>
  <div>
    <vxe-input v-model="val1" placeholder="年选择" type="year" clearable></vxe-input>
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
