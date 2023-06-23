<template>
  <div>
    <vxe-textarea v-model="val1" readonly></vxe-textarea>
    <vxe-textarea v-model="val2" disabled></vxe-textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: '只读内容',
      val2: '禁用内容'
    }
  }
}
</script>
