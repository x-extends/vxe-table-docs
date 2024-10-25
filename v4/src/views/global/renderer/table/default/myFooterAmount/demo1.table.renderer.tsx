// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个表尾金额格式化
VxeUI.renderer.add('MyTableFooterAmount', {
  // 表尾显示模板
  renderTableFooter (renderOpts, params) {
    const { row, column } = params
    return <span style="color: red;">￥{row[column.field]}</span>
  }
})
