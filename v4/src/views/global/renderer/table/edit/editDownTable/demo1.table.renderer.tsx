// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoDownTable from './DemoDownTable.vue'

// 创建一个下拉表格渲染器
VxeUI.renderer.add('EditDownTable', {
  // 可编辑激活模板
  renderTableEdit (renderOpts, params) {
    return <DemoDownTable params={ params } />
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, params) {
    const { row, column } = params
    return <span>{ row[column.field] }</span>
  }
})
