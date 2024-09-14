<template>
  <div>
    <vxe-form v-bind="formOptions" @submit="submitEvent">
      <template #action>
        <vxe-button type="submit" status="primary">提交</vxe-button>
        <vxe-button type="reset">重置</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  mobile: string
  email: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleColon: true,
      titleAlign: 'right',
      titleWidth: 100,
      data: {
        name: '',
        mobile: '',
        email: ''
      },
      items: [
        { title: 'Name', field: 'name', span: 24, itemRender: { name: 'VxeInput', props: { placeholder: '请输入名称' } } },
        { title: 'Mobile', field: 'mobile', span: 24, itemRender: { name: 'VxeInput' } },
        { title: 'Email', field: 'email', span: 24, itemRender: { name: 'VxeInput' } },
        { slots: { default: 'action' } }
      ],
      rules: {
        mobile: [
          { required: true, validator: 'ValidMobile' }
        ],
        email: [
          { required: true, validator: 'ValidEmail' }
        ]
      }
    }

    return {
      formOptions
    }
  },
  methods: {
    submitEvent  () {
      VxeUI.modal.message({
        content: '保存成功',
        status: 'success'
      })
    }
  }
})
</script>
