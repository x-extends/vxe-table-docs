// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个超链接渲染器
VxeUI.renderer.add('MyTableCellLink', {
  // 默认显示模板
  renderDefault (h, renderOpts, params) {
    const { row, column } = params
    return <vxe-link href={row.url} status="primary" target="_blank">{row[column.field]}</vxe-link>
  }
})
