<template>
  <div>
    <vxe-input v-model="val1" placeholder="密码类型" type="password"></vxe-input>
    <vxe-input v-model="val2" placeholder="可清除" type="password" clearable></vxe-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: '',
      val2: ''
    }
  }
}
</script>
