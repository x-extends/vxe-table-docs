// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoEditPulldown from './DemoEditPulldown.vue'

// 创建一个下拉表格渲染器
VxeUI.renderer.add('MyTableEditPulldown', {
  // 可编辑激活模板
  renderTableEdit (renderOpts, params) {
    return <DemoEditPulldown params={ params } />
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, params) {
    const { row, column } = params
    return <span>{ row[column.field] }</span>
  }
})
