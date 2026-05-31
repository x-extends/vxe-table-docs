// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoCellStyle from './DemoCellStyle.vue'

// 创建单元格样式渲染器
VxeUI.renderer.add('MyTableCellStyle', {
  // 默认显示模板
  renderTableDefault (h, renderOpts, renderParams) {
    return <DemoCellStyle render-params={ renderParams } />
  }
})
