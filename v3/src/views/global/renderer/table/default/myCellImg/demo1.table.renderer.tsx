// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个图片预览渲染器
VxeUI.renderer.add('MyTableCellImg', {
  // 默认显示模板
  renderDefault (h, renderOpts, params) {
    const { row } = params
    return <vxe-image src={row.url} height="60"></vxe-image>
  }
})
