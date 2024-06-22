// main.js

import { VxeUI } from 'vxe-pc-ui'

// 自定义导出指令
VxeUI.commands.add('myExport', {
  tableCommandMethod ({ $table }) {
    $table.exportData()
  }
})

// 自定义导出指令
VxeUI.commands.add('myLink', {
  tableCommandMethod () {
    open('https://VxeUI.com/')
  }
})
