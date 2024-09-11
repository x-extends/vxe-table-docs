<template>
  <div>
    <vxe-input v-model="val1" placeholder="日期多选" type="date" clearable multiple></vxe-input>
    <vxe-input v-model="val2" placeholder="月份多选" type="month" clearable multiple></vxe-input>
    <vxe-input v-model="val3" placeholder="季度多选" type="quarter" clearable multiple></vxe-input>
    <vxe-input v-model="val4" placeholder="年份多选" type="year" clearable multiple></vxe-input>
    <vxe-input v-model="val5" placeholder="周多选" type="week" clearable multiple></vxe-input>
    <vxe-input v-model="val6" placeholder="日期和时间多选" type="datetime" clearable multiple></vxe-input>
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
      val6: ''
    }
  }
}
</script>
