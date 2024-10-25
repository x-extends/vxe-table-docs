// main.js

import { VxeUI, VxeImage } from 'vxe-pc-ui'

// 创建单元格图片预览
VxeUI.renderer.add('MyTableCellImg', {
  // 默认显示模板
  renderTableDefault (renderOpts, params) {
    const { row } = params
    return <VxeImage src={row.url} height="60"></VxeImage>
  }
})
