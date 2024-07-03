<template>
  <div>
    <vxe-form
      titleColon
      vertical
      :data="formData"
      :items="formItems"
      :rules="formRules"
      @submit="submitEvent"
      @reset="resetEvent">
      <template #myregion="{ data }">
        <vxe-input v-model="data.region" placeholder="自定义插槽模板"></vxe-input>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VXETable } from 'vxe-table'
import { VxeFormPropTypes, VxeFormEvents } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  role: string
  age: number
  val1: string[]
  val2: boolean
  val3: string
  flag: boolean
  region: string
}

const formData = reactive<FormDataVO>({
  name: '',
  nickname: '',
  sex: '0',
  role: '',
  age: 22,
  val1: [],
  val2: false,
  val3: '',
  flag: false,
  region: ''
})

const formRules = ref<VxeFormPropTypes.Rules>({
  name: [
    { required: true, message: '请输入名称' }
  ],
  sex: [
    { required: true, message: '请选择性别' }
  ],
  age: [
    { required: true, message: '请输入年龄' }
  ],
  date: [
    { required: true, message: '必填校验' }
  ]
})

const formItems = ref<VxeFormPropTypes.Items>([
  { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput', props: { placeholder: '请输入名称' } } },
  { field: 'sex', title: '性别', span: 24, itemRender: { name: 'VxeSelect', options: [{ value: '0', label: '女' }, { value: '1', label: '男' }], props: { placeholder: '请选择性别' } } },
  { field: 'role', title: '角色', span: 24, itemRender: { name: 'VxeInput', props: { placeholder: '请输入角色' } } },
  { field: 'age', title: '年龄', span: 24, itemRender: { name: 'VxeInput', props: { type: 'number', placeholder: '请输入年龄' } } },
  { field: 'val1', title: '复选框-组', span: 24, itemRender: { name: 'VxeCheckboxGroup', options: [{ label: '爬山', value: '11' }, { label: '健身', value: '22' }] } },
  { field: 'val2', title: '复选框', span: 24, itemRender: { name: 'VxeCheckbox' } },
  { field: 'val3', title: '单选框', span: 24, itemRender: { name: 'VxeRadioGroup', options: [{ label: '是', value: 'Y' }, { label: '否', value: 'N' }] } },
  {
    span: 24,
    itemRender: {
      name: 'VxeButtonGroup',
      options: [
        { type: 'submit', content: '提交', status: 'primary' },
        { type: 'reset', content: '重置' }
      ]
    }
  }
])

const submitEvent: VxeFormEvents.Submit = () => {
  VXETable.modal.message({ content: '保存成功', status: 'success' })
}

const resetEvent: VxeFormEvents.Reset = () => {
  VXETable.modal.message({ content: '重置事件', status: 'info' })
}
</script>
