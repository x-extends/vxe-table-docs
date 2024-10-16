// main.js

import { VxeUI, VxeImage } from 'vxe-pc-ui'

// 创建一个图片预览渲染器
VxeUI.renderer.add('MyTableCellImg', {
  // 默认显示模板
  renderTableDefault (renderOpts, params) {
    const { row } = params
    return <VxeImage src={row.url} height="60"></VxeImage>
  }
})
