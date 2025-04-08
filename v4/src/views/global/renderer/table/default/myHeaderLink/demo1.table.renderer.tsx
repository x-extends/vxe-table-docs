// main.js

import { VxeUI, VxeLink } from 'vxe-pc-ui'

// 创建一个表头超链接
VxeUI.renderer.add('MyTableHeaderLink', {
  // 表头显示模板
  renderTableHeader (renderOpts, renderParams) {
    const { column } = renderParams
    return <VxeLink href="https://vxeui.com" status="primary" target="_blank">{column.title}</VxeLink>
  }
})
