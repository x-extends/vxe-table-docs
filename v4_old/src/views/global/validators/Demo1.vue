<template>
  <div>
    <vxe-form v-bind="formOptions" @submit="submitEvent">
      <template #active>
        <vxe-button type="submit" status="primary">提交</vxe-button>
        <vxe-button type="reset">重置</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeFormProps, VxeFormEvents } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  mobile: string
  email: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleColon: true,
  titleAlign: 'right',
  titleWidth: 100,
  data: {
    name: '',
    mobile: '',
    email: ''
  },
  items: [
    { title: '用户名', field: 'name', itemRender: { name: 'VxeInput', props: { placeholder: '请输入名称' } } },
    { title: '手机号', field: 'mobile', itemRender: { name: 'VxeInput' } },
    { title: '邮箱', field: 'email', itemRender: { name: 'VxeInput' } },
    { slots: { default: 'active' } }
  ],
  rules: {
    mobile: [
      { required: true, validator: 'myMobile' }
    ],
    email: [
      { required: true, validator: 'myEmail' }
    ]
  }
})

const submitEvent: VxeFormEvents.Submit = () => {
  VxeUI.modal.message({ content: '保存成功', status: 'success' })
}
</script>
