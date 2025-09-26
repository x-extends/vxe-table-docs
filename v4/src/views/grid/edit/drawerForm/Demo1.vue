<template>
  <div>
    <p>
      <vxe-button status="primary" icon="vxe-icon-add" @click="addEvent">新增</vxe-button>
      <vxe-notice-bar loop content="温馨提示：当表单很多且不适用直接在表格中编辑时，可以实现弹出抽屉编辑"></vxe-notice-bar>
    </p>

    <vxe-grid v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" icon="vxe-icon-edit" @click="editRow(row)">编辑</vxe-button>
      </template>
    </vxe-grid>

    <vxe-drawer
      destroy-on-close
      show-footer
      show-confirm-button
      show-cancel-button
      v-model="showEditPopup"
      :title="selectRow ? '编辑' : '新增'"
      width="60vw"
      :loading="loading"
      :confirm-closable="false"
      @confirm="confirmEvent">
      <vxe-form ref="formRef" v-bind="formOptions"></vxe-form>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'
import { VxeUI, VxeFormInstance, VxeFormProps, VxeFormItemPropTypes, VxeSelectProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number | null
  name: string
  nickname: string
  role: string
  sex: string
  age: number | null
  address: string
}

const formRef = ref<VxeFormInstance<RowVO>>()

const showEditPopup = ref(false)
const loading = ref(false)
const selectRow = ref<RowVO>()

const defaultData: RowVO = {
  id: null,
  name: '',
  nickname: '',
  role: '',
  sex: '',
  age: null,
  address: ''
}

const sexItemRender = reactive<VxeFormItemPropTypes.ItemRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const formOptions = reactive<VxeFormProps<RowVO>>({
  titleWidth: 'auto',
  titleAlign: 'right',
  titleColon: true,
  data: XEUtils.clone(defaultData, true),
  rules: {
    name: [
      { required: true, message: '请输入名称' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
    ],
    sex: [
      { required: true, message: '请选择性别' }
    ],
    age: [
      { required: true, message: '请输入年龄' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'nickname', title: '昵称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
    { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeNumberInput' } },
    { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea', props: { autosize: { minRows: 2, maxRows: 4 } } } }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 400,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { title: '操作', width: 100, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: '', role: 'Develop', sex: '', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', nickname: 'Test 2', role: 'Test', sex: '', age: null, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: '', role: 'PM', sex: 'Man', age: null, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'Test 4', role: 'Designer', sex: '', age: 24, address: 'Shanghai' }
  ]
})

const addEvent = () => {
  selectRow.value = undefined
  formOptions.data = XEUtils.clone(defaultData, true)
  showEditPopup.value = true
}

const editRow = (row: RowVO) => {
  selectRow.value = row
  formOptions.data = Object.assign(XEUtils.clone(defaultData, true), row)
  showEditPopup.value = true
}

const confirmEvent = async () => {
  const $form = formRef.value
  if ($form) {
    const errMap = await $form.validate()
    if (!errMap) {
      showEditPopup.value = false
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    }
  }
}
</script>
