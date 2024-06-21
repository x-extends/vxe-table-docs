<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleColon: true,
  titleWidth: 80,
  titleAlign: 'right',
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    address: ''
  },
  items: [
    { field: 'name', title: 'Name', span: 12, itemRender: { name: 'EditInput' } },
    { field: 'sex', title: 'Sex', span: 12, itemRender: { name: 'EditInput' } },
    { field: 'address', title: 'Address', span: 24, itemRender: { name: 'EditInput' } },
    {
      align: 'center',
      span: 24,
      itemRender: {
        name: 'VxeButtonGroup',
        options: [
          { type: 'submit', content: '提交', status: 'primary' },
          { type: 'reset', content: '重置' }
        ]
      }
    }
  ]
})
</script>
