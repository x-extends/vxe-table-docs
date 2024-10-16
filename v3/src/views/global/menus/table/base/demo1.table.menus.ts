// main.js

import { VxeUI } from 'vxe-pc-ui'

// 注册一个导出菜单
VxeUI.menus.add('myExportMenu', {
  tableMenuMethod ({ $table }) {
    $table.exportData()
  }
})

// 注册一个打印菜单
VxeUI.menus.add('myPrintMenu', {
  tableMenuMethod ({ $table }) {
    $table.print()
  }
})

// 注册一个跳转链接菜单
VxeUI.menus.add('myLinkMenu', {
  tableMenuMethod () {
    open('https://VxeUI.com/')
  }
})
