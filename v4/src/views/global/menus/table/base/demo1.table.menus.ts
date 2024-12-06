// main.js

import { VxeUI } from 'vxe-table'

// 注册一个导出菜单
VxeUI.menus.add('myExportMenu', {
  menuMethod ({ $table }) {
    $table.exportData()
  }
})

// 注册一个打印菜单
VxeUI.menus.add('myPrintMenu', {
  menuMethod ({ $table }) {
    $table.print()
  }
})

// 注册一个跳转链接菜单
VxeUI.menus.add('myLinkMenu', {
  menuMethod () {
    open('https://VxeUI.com/')
  }
})
