// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个表头超链接
VxeUI.renderer.add('MyTableHeaderLink', {
  // 默认显示模板
  renderTableHeader (h, renderOpts, renderParams) {
    const { column } = renderParams
    return <vxe-link href="https://vxeui.com" status="primary" target="_blank">{column.title}</vxe-link>
  }
})
