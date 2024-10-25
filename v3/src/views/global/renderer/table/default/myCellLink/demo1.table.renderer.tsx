// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建单元格超链接
VxeUI.renderer.add('MyTableCellLink', {
  // 默认显示模板
  renderTableDefault (h, renderOpts, params) {
    const { row, column } = params
    return <vxe-link href={row.url} status="primary" target="_blank">{row[column.field]}</vxe-link>
  }
})
