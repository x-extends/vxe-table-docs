<template>
  <div>
    <vxe-form
      title-colon
      title-width="100"
      title-align="right"
      :data="formData"
      :rules="formRules">
      <vxe-form-item title="Name" field="name" span="24" :item-render="{ name: 'VxeInput'}"></vxe-form-item>
      <vxe-form-item title="Mobile" field="mobile" span="24" :item-render="{ name: 'VxeInput'}"></vxe-form-item>
      <vxe-form-item title="Email" field="email" span="24" :item-render="{ name: 'VxeInput'}"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="submit" status="primary">提交</vxe-button>
          <vxe-button type="reset">重置</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  mobile: string
  email: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: '',
      mobile: '',
      email: ''
    }

    const formRules: VxeFormPropTypes.Rules = {
      mobile: [
        { required: true, validator: 'ValidMobile' }
      ],
      email: [
        { required: true, validator: 'ValidEmail' }
      ]
    }

    return {
      formData,
      formRules
    }
  }
})
</script>
