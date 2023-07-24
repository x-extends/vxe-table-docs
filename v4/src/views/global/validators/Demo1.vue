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
import { VXETable, VxeFormProps, VxeFormEvents } from 'vxe-table'

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
    { title: '用户名', field: 'name', itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },
    { title: '手机号', field: 'mobile', itemRender: { name: '$input' } },
    { title: '邮箱', field: 'email', itemRender: { name: '$input' } },
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
  VXETable.modal.message({ content: '保存成功', status: 'success' })
}
</script>
