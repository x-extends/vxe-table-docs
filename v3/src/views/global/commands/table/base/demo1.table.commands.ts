// main.js

import { VxeUI } from 'vxe-pc-ui'

// 定义工具栏一个导出指令
VxeUI.commands.add('myToolbarExport', {
  commandMethod ({ $table }) {
    $table.exportData()
  }
})

// 定义工具栏一个跳转指令
VxeUI.commands.add('myToolbarLink', {
  commandMethod () {
    open('https://VxeUI.com/')
  }
})

// 定义工具栏一个自定义列指令
VxeUI.commands.add('myToolbarCustom', {
  commandMethod ({ $table }) {
    $table.openCustom()
  }
})
