<template>
  <div>
    <vxe-form
      :data="formData"
      :items="formItems"
      titleColon
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
import { VxeUI, VxeFormPropTypes, VxeFormEvents } from 'vxe-table'

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

const formItems = ref<VxeFormPropTypes.Items>([
  {
    title: '左侧',
    span: 12,
    children: [
      { field: 'name', title: '名称', span: 8, itemRender: { name: 'VxeInput', props: { placeholder: '请输入名称' } } },
      { field: 'sex', title: '性别', span: 8, itemRender: { name: 'VxeSelect', options: [{ value: '0', label: '女' }, { value: '1', label: '男' }], props: { placeholder: '请选择性别' } } },
      { field: 'role', title: '角色', span: 8, itemRender: { name: 'VxeInput', props: { placeholder: '请输入角色' } } },
      { field: 'age', title: '年龄', span: 24, itemRender: { name: 'VxeInput', props: { type: 'number', placeholder: '请输入年龄' } } },
      { field: 'val1', title: '复选框-组', span: 12, itemRender: { name: 'VxeCheckboxGroup', options: [{ label: '爬山', value: '11' }, { label: '健身', value: '22' }] } },
      { field: 'val2', title: '复选框', span: 12, itemRender: { name: 'VxeCheckbox' } },
      { field: 'val3', title: '单选框', span: 12, itemRender: { name: 'VxeRadioGroup', options: [{ label: '是', value: 'Y' }, { label: '否', value: 'N' }] } },
      { field: 'flag', title: '开关', span: 24, itemRender: { name: 'VxeSwitch', props: { openLabel: '是', closeLabel: '否' } } },
      { field: 'region', title: '地区', span: 24, itemRender: {}, slots: { default: 'myregion' } }
    ]
  },
  {
    title: '右侧',
    span: 12,
    children: [
      { field: 'nickname', title: '昵称', span: 24, itemRender: { name: 'VxeInput', props: { placeholder: '请输入昵称' } } }
    ]
  },
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
])

const submitEvent: VxeFormEvents.Submit = () => {
  VxeUI.modal.message({ content: '保存成功', status: 'success' })
}

const resetEvent: VxeFormEvents.Reset = () => {
  VxeUI.modal.message({ content: '重置事件', status: 'info' })
}
</script>
