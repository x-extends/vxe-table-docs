// main.js

import { VxeUI } from 'vxe-table'
import DemoEditPulldown from './DemoEditPulldown.vue'

// 创建一个下拉表格渲染器
VxeUI.renderer.add('MyTableEditPulldown', {
  // 可编辑激活模板
  renderEdit (renderOpts, params) {
    return <DemoEditPulldown params={ params } />
  },
  // 可编辑显示模板
  renderCell (renderOpts, params) {
    const { row, column } = params
    return <span>{ row[column.field] }</span>
  }
})
