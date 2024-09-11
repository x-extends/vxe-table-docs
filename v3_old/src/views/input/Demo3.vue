<template>
  <div>
    <vxe-input v-model="val1" placeholder="搜索类型" type="search"></vxe-input>
    <vxe-input v-model="val2" placeholder="可清除" type="search" clearable></vxe-input>
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
