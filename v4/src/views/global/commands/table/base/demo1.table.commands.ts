// main.js

import { VxeUI } from 'vxe-table'

// 定义工具栏一个导出指令
VxeUI.commands.add('myToolbarExport', {
  tableCommandMethod ({ $table }) {
    $table.exportData()
  }
})

// 定义工具栏一个跳转指令
VxeUI.commands.add('myToolbarLink', {
  tableCommandMethod () {
    open('https://VxeUI.com/')
  }
})

// 定义工具栏一个个性化列指令
VxeUI.commands.add('myToolbarCustom', {
  tableCommandMethod ({ $table }) {
    $table.openCustom()
  }
})
