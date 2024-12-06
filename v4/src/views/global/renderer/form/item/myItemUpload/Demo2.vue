<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeUploadPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  fileList: VxeUploadPropTypes.ModelValue
  imgList: VxeUploadPropTypes.ModelValue
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleColon: true,
      titleWidth: 80,
      titleAlign: 'right',
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '',
        fileList: [],
        imgList: []
      },
      items: [
        { field: 'name', title: 'Name', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'fileList', title: '上传附件', span: 24, itemRender: { name: 'MyFormItemUpload' } },
        { field: 'imgList', title: '上传图片', span: 24, itemRender: { name: 'MyFormItemUpload', props: { mode: 'image' } } },
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
    }

    return {
      formOptions
    }
  }
})
</script>
