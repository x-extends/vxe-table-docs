<template>
  <div>
    <vxe-button status="primary" @click="validEvent">校验</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  email: string
  mobile: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  keepSource: true,
  showOverflow: true,
  height: 300,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  editRules: {
    mobile: [
      { required: true, validator: 'ValidMobile' }
    ],
    email: [
      { validator: 'ValidEmail' }
    ]
  },
  columns: [
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'nickname', title: 'Nickname', editRender: { name: 'VxeInput' } },
    { field: 'mobile', title: 'Mobile', editRender: { name: 'VxeInput' } },
    { field: 'email', title: 'Email', editRender: { name: 'VxeInput' } },
    { field: 'address', title: 'Address', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', email: 'abcd@163.com', mobile: '', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', email: '', mobile: '13111111111', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', email: '', mobile: '13611111111', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', email: '', mobile: '', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', email: '', mobile: '', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', email: 'abcd@qq.com', mobile: '', age: 21, address: 'test abc' }
  ]
})

const validEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const errMap = await $grid.validate(true)
    if (errMap) {
      VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VxeUI.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}
</script>
