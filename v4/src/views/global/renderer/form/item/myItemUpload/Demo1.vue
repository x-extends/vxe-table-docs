<template>
  <div>
    <vxe-form
      title-colon
      title-width="80"
      title-align="right"
      :data="formData">
      <vxe-form-item title="Name" field="name" span="24" :item-render="{ name: 'VxeInput'}"></vxe-form-item>
      <vxe-form-item title="上传附件" field="fileList" span="24" :item-render="{ name: 'MyFormItemUpload' }"></vxe-form-item>
      <vxe-form-item title="上传图片" field="imgList" span="24" :item-render="{ name: 'MyFormItemUpload', props: { mode: 'image' } }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="submit" status="primary" content="Submit"></vxe-button>
          <vxe-button type="reset" content="Reset"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeUploadPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  fileList: VxeUploadPropTypes.ModelValue
  imgList: VxeUploadPropTypes.ModelValue
}

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  sex: '',
  fileList: [],
  imgList: []
})
</script>
