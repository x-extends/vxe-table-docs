import { VxeUI } from 'vxe-table'

// 注册菜单
VxeUI.menus.add('myExport', {
  menuMethod ({ $table }) {
    $table.exportData()
  }
})

// 注册菜单
VxeUI.menus.add('myLink', {
  menuMethod () {
    open('https://VxeUI.cn/')
  }
})
