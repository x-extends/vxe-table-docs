<template>
  <div>
    <vxe-radio-group v-model="val1">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="val2" size="medium">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="val3" size="small" :strict="false">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <vxe-radio-group v-model="val4" size="mini" :strict="false">
      <vxe-radio-button label="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button label="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button label="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null,
      val2: '2',
      val3: null,
      val4: '1'
    }
  }
}
</script>
