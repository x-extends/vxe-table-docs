<template>
  <div>
    <vxe-table
      border
      show-footer
      :menu-config="menuConfig"
      :data="tableData"
      :footer-data="footerData"
      @menu-click="menuClickEvent">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeTablePropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const menuConfig = reactive<VxeTablePropTypes.MenuConfig<RowVO>>({
  footer: {
    options: [
      [
        { code: 'myBtn1', name: '按钮1' },
        { code: 'myBtn2', name: '按钮2' }
      ]
    ]
  }
})

const tableData = ref<VxeTablePropTypes.Data<RowVO>>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { age: 106 }
])

const menuClickEvent: VxeTableEvents.MenuClick<RowVO> = ({ menu }) => {
  switch (menu.code) {
    case 'myBtn1':
      VxeUI.modal.message({
        content: '点击了按钮1'
      })
      break
    case 'myBtn2':
      VxeUI.modal.message({
        content: '点击了按钮2'
      })
      break
  }
}
</script>
