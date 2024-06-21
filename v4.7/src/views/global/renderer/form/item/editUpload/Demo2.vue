<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps, VxeUploadPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  fileList: VxeUploadPropTypes.ModelValue
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleColon: true,
  titleWidth: 80,
  titleAlign: 'right',
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    fileList: []
  },
  items: [
    { field: 'name', title: 'Name', span: 12, itemRender: { name: 'EditInput' } },
    { field: 'sex', title: 'Sex', span: 12, itemRender: { name: 'EditInput' } },
    { field: 'fileList', title: 'fileList', span: 24, itemRender: { name: 'EditUpload' } },
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
