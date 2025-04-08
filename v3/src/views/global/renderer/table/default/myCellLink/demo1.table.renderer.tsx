// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoCellLink from './DemoCellLink.vue'

// 创建单元格超链接
VxeUI.renderer.add('MyTableCellLink', {
  // 默认显示模板
  renderTableDefault (h, renderOpts, renderParams) {
    return <DemoCellLink render-params={ renderParams } />
  }
})
