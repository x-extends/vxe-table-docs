import { VxeUI } from 'vxe-table'

// 自定义导出指令
VxeUI.commands.add('myExport', {
  commandMethod ({ $table }) {
    $table.exportData()
  }
})

// 自定义导出指令
VxeUI.commands.add('myLink', {
  commandMethod () {
    open('https://VxeUI.cn/')
  }
})
