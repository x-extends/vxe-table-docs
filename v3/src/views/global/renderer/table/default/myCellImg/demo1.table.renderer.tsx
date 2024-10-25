// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建单元格图片预览
VxeUI.renderer.add('MyTableCellImg', {
  // 默认显示模板
  renderTableDefault (h, renderOpts, params) {
    const { row } = params
    return <vxe-image src={row.url} height="60"></vxe-image>
  }
})
