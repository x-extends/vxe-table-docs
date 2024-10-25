// main.js

import { VxeUI } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

// 创建单元格金额格式化
VxeUI.renderer.add('MyTableCellAmount', {
  // 金额右对齐
  tableCellAlign: 'right',
  // 默认显示模板
  renderTableDefault (h, renderOpts, params) {
    const { row, column } = params
    return <span>{XEUtils.commafy(XEUtils.toNumber(row[column.field]))}</span>
  }
})
