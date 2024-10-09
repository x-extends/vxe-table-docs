<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #form>
        <vxe-form ref="formRef" v-bind="formOptions">
          <template #action>
            <vxe-button status="primary" @click="searchEvent">搜索</vxe-button>
            <vxe-button @click="resetEvent">重置</vxe-button>
          </template>
        </vxe-form>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps, VxeFormInstance } from 'vxe-table'
import { VxeFormProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  email: string
  sex: string
  age: number
  address: string
}

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

const formRef = ref<VxeFormInstance>()

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  data: {
    name: 'Test',
    nickname: '',
    sex: '',
    age: ''
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '性别', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  showOverflow: true,
  border: true,
  height: 500,
  columns: [
    { type: 'seq', width: 70, fixed: 'left' },
    { field: 'name', title: 'Name', minWidth: 160 },
    { field: 'nickname', title: 'Nickname', minWidth: 160 },
    { field: 'age', title: 'Age', width: 100 },
    { field: 'role', title: 'Role', minWidth: 160 },
    { field: 'amount', title: 'Amount', width: 140 },
    { field: 'email', title: 'Email', minWidth: 160 },
    { field: 'updateDate', title: 'Update Date', visible: false },
    { field: 'createDate', title: 'Create Date', visible: false }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: '', role: 'Develop', sex: 'Man', age: 28, email: '', address: 'test abc' },
    { id: 10002, name: 'Test2', nickname: '', role: 'Test', sex: 'Women', age: 22, email: '', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: '', role: 'PM', sex: 'Man', age: 32, email: '', address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: '', role: 'Designer', sex: 'Women', age: 24, email: '', address: 'Shanghai' }
  ]
})

const searchEvent = async () => {
  console.log('search form', formOptions.data)
}

const resetEvent = () => {
  const $form = formRef.value
  if ($form) {
    $form.reset()
  }
  console.log('reset form')
}
</script>
