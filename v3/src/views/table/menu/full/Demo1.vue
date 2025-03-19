<template>
  <div>
    <vxe-table
      border
      show-footer
      :footer-data="footerData"
      :data="tableData"
      :menu-config="menuConfig"
      @menu-click="contextMenuClickEvent">
      <vxe-column field="checkbox" type="checkbox" width="50"></vxe-column>
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" width="340"></vxe-column>
      <vxe-column field="nickname" title="Nickname" width="420"></vxe-column>
      <vxe-column field="age" title="Age" width="200"></vxe-column>
      <vxe-column field="role" title="Role" width="280"></vxe-column>
      <vxe-column field="attr1" title="Attr1" min-width="360"></vxe-column>
      <vxe-column field="address" title="Address" width="300"></vxe-column>
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
      className: 'my-menus',
      header: {
        options: [
          [
            { code: 'exportAll', name: '导出所有.csv' }
          ]
        ]
      },
      body: {
        options: [
          [
            { code: 'copy', name: '复制', prefixConfig: { icon: 'vxe-icon-copy' }, suffixConfig: { content: 'Ctrl+C' } }
          ],
          [
            { code: 'remove', name: '删除', prefixConfig: { icon: 'vxe-icon-delete-fill', className: 'color-red' } },
            {
              name: '筛选',
              children: [
                { code: 'clearFilter', name: '清除筛选' },
                { code: 'filterSelect', name: '按所选单元格的值筛选' }
              ]
            },
            {
              code: 'sort',
              name: '排序',
              prefixConfig: { icon: 'vxe-icon-sort' },
              children: [
                { code: 'clearSort', name: '清除排序' },
                { code: 'sortAsc', name: '升序', prefixConfig: { icon: 'vxe-icon-sort-alpha-asc' }, suffixConfig: { content: 'Ctrl+P' } },
                { code: 'sortDesc', name: '倒序', prefixConfig: { icon: 'vxe-icon-sort-alpha-desc' }, suffixConfig: { content: 'Ctrl+P' } }
              ]
            },
            { code: 'print', name: '打印', suffixConfig: { content: 'Ctrl+P' }, disabled: true }
          ]
        ]
      },
      footer: {
        options: [
          [
            { code: 'clearAll', name: '清空数据' }
          ]
        ]
      }
    }

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', age: 106 }
    ]

    return {
      tableData,
      menuConfig,
      footerData
    }
  },
  methods: {
    contextMenuClickEvent ({ menu }) {
      VxeUI.modal.message({ content: `点击了 "${menu.name}"`, status: 'info' })
    }
  }
})
</script>

<style lang="scss">
.my-menus {
  background-color: #F8F8F9;
}
.my-menus .vxe-ctxmenu--link {
  width: 200px;
}
.color-red {
  color: red;
}
.color-blue {
  color: blue;
}
.color-orange {
  color: orange;
}
</style>
