<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="自适应高度" :autosize="{ minRows: 2, maxRows: 4 }"></vxe-textarea>
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
