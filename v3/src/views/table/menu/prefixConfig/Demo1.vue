<template>
  <div>
    <vxe-table
      border
      show-footer
      :footer-data="footerData"
      :data="tableData"
      :menu-config="menuConfig"
      @menu-click="contextMenuClickEvent">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' }
    ]

    const menuConfig: VxeTablePropTypes.MenuConfig<RowVO> = {
      header: {
        options: [
          [
            { code: 'custom1', name: '自定义前缀图标', prefixConfig: { icon: 'vxe-icon-download' } },
            { code: 'custom2', name: '自定义前缀内容', prefixConfig: { content: 'Ctrl+S' } }
          ]
        ]
      },
      body: {
        options: [
          [
            { code: 'custom3', name: '自定义前缀图标', prefixConfig: { icon: 'vxe-icon-download' } },
            { code: 'custom4', name: '自定义前缀内容', prefixConfig: { content: 'Ctrl+S' } }
          ],
          [
            {
              code: 'custom5',
              name: '二级菜单',
              children: [
                { code: 'custom6', name: '自定义前缀图标', prefixConfig: { icon: 'vxe-icon-download' } },
                { code: 'custom7', name: '自定义前缀内容', prefixConfig: { content: 'Ctrl+S' } }
              ]
            }
          ]
        ]
      },
      footer: {
        options: [
          [
            { code: 'custom8', name: '前缀图标', prefixConfig: { icon: 'vxe-icon-download' } },
            { code: 'custom9', name: '前缀内容', prefixConfig: { content: 'Ctrl+S' } }
          ]
        ]
      }
    }

    const footerData: VxeTablePropTypes.FooterData = [
      { age: 106 }
    ]

    return {
      tableData,
      menuConfig,
      footerData
    }
  },
  methods: {
    contextMenuClickEvent ({ menu }) {
      VxeUI.modal.alert(`点击了 ${menu.name} 选项`)
    }
  }
})
</script>
