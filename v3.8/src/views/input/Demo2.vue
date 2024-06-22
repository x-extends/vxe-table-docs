<template>
  <div>
    <vxe-input v-model="val1" placeholder="可清除" clearable></vxe-input>
    <vxe-input v-model="val2" placeholder="带图标" prefix-icon="vxe-icon-chat" suffix-icon="vxe-icon-user" clearable></vxe-input>
    <vxe-input v-model="val3" placeholder="只读的" suffix-icon="vxe-icon-warning-triangle-fill" readonly></vxe-input>
    <vxe-input v-model="val4" placeholder="禁用的" prefix-icon="vxe-icon-warnion-circle-fill" disabled></vxe-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: ''
    }
  }
}
</script>
