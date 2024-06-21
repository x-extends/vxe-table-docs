<template>
  <div>
    <vxe-form
      title-colon
      title-width="80"
      title-align="right"
      :data="formData">
      <vxe-form-item title="Name" field="name" span="12" :item-render="{ name: 'EditInput'}"></vxe-form-item>
      <vxe-form-item title="Sex" field="sex" span="12" :item-render="{ name: 'EditInput'}"></vxe-form-item>
      <vxe-form-item title="File" field="fileList" span="24" :item-render="{ name: 'EditUpload'}"></vxe-form-item>
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
import { VxeUploadPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  fileList: VxeUploadPropTypes.ModelValue
}

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  sex: '',
  fileList: []
})
</script>
