<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="字数统计" maxlength="100" show-word-count></vxe-textarea>
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
