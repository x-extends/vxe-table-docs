// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建表尾金额格式化
VxeUI.renderer.add('MyTableFooterAmount', {
  // 默认显示模板
  renderTableFooter (h, renderOpts, renderParams) {
    const { row, column } = renderParams
    return <span style="color: red;">￥{row[column.field]}</span>
  }
})
