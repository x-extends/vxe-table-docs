// main.js

import { VxeUI } from 'vxe-table'
import DemoEditPulldown from './DemoEditPulldown.vue'

// 创建一个下拉表格渲染器
VxeUI.renderer.add('MyTableEditPulldown', {
  // 可编辑激活模板
  renderTableEdit (renderOpts, renderParams) {
    return <DemoEditPulldown render-params={ renderParams } />
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, renderParams) {
    const { row, column } = renderParams
    return <span>{ row[column.field] }</span>
  }
})
