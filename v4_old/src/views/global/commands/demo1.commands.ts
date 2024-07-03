import { VXETable } from 'vxe-table'

// 自定义导出指令
VXETable.commands.add('myExport', {
  commandMethod ({ $table }) {
    $table.exportData()
  }
})

// 自定义导出指令
VXETable.commands.add('myLink', {
  commandMethod () {
    open('https://vxeui.com')
  }
})
