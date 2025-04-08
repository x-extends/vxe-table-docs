// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoCellImg from './DemoCellImg.vue'

// 创建单元格图片预览
VxeUI.renderer.add('MyTableCellImg', {
  // 默认显示模板
  renderTableDefault (renderOpts, renderParams) {
    return <DemoCellImg render-params={ renderParams } />
  }
})
