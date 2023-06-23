<template>
  <div>
    <vxe-input v-model="val1" placeholder="日期和时间选择" type="datetime" transfer></vxe-input>
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
