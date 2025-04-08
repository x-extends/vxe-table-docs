// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoCellAmount from './DemoCellAmount.vue'

// 创建单元格金额格式化
VxeUI.renderer.add('MyTableCellAmount', {
  // 金额右对齐
  tableCellAlign: 'right',
  // 默认显示模板
  renderTableDefault (h, renderOpts, renderParams) {
    return <DemoCellAmount render-params={ renderParams } />
  }
})
