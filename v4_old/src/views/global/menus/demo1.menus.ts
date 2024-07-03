import { VXETable } from 'vxe-table'

// 注册菜单
VXETable.menus.add('myExport', {
  menuMethod ({ $table }) {
    $table.exportData()
  }
})

// 注册菜单
VXETable.menus.add('myLink', {
  menuMethod () {
    open('https://vxeui.com')
  }
})
