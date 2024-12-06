<template>
  <div>
    <vxe-form
      title-colon
      title-width="80"
      title-align="right"
      :data="formData">
      <vxe-form-item title="Name" field="name" span="24" :item-render="{ name: 'VxeInput'}"></vxe-form-item>
      <vxe-form-item title="Amount" field="amount" span="24" :item-render="{ name: 'MyFormItemAmount'}"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="submit" status="primary" content="Submit"></vxe-button>
          <vxe-button type="reset" content="Reset"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  amount: string
  address: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      amount: '',
      address: ''
    }

    return {
      formData
    }
  }
})
</script>
