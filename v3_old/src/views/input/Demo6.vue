<template>
  <div>
    <vxe-input v-model="val1" placeholder="周选择，周天开始" type="week" :start-day="0"></vxe-input>
    <vxe-input v-model="val2" placeholder="周选择，周一开始" type="week" :start-day="1"></vxe-input>
    <vxe-input v-model="val3" placeholder="周选择，周二开始" type="week" :start-day="2"></vxe-input>
    <vxe-input v-model="val4" placeholder="周选择，周三开始" type="week" :start-day="3" clearable></vxe-input>
    <vxe-input v-model="val5" placeholder="周选择，周四开始" type="week" :start-day="4" clearable></vxe-input>
    <vxe-input v-model="val6" placeholder="周选择，周五开始" type="week" :start-day="5" clearable></vxe-input>
    <vxe-input v-model="val7" placeholder="周选择，周六开始" type="week" :start-day="6" clearable></vxe-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '',
      val6: '',
      val7: ''
    }
  }
}
</script>
