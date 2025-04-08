// main.js

import { VxeUI } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

// 创建一个完整金额格式化
VxeUI.renderer.add('MyTableFullAmount', {
  // 金额右对齐
  tableCellAlign: 'right',
  // 表头显示模板
  renderTableHeader (h, renderOpts, renderParams) {
    const { column } = renderParams
    return <span>{column.title}（元）</span>
  },
  // 默认显示模板
  renderTableDefault (h, renderOpts, renderParams) {
    const { row, column } = renderParams
    return <span>￥{XEUtils.commafy(XEUtils.toNumber(row[column.field]))}</span>
  },
  // 表尾显示模板
  renderTableFooter (h, renderOpts, renderParams) {
    const { row, column } = renderParams
    return <span style="color: red;">￥{row[column.field]}</span>
  }
})
