// main.js

import { VxeUI } from 'vxe-table'
import DemoEditMixInput from './DemoEditMixInput.vue'

// 创建一个编辑渲染器
VxeUI.renderer.add('MyTableEditMixInput', {
  // 如果是输入框类型，可以设置为激活自动聚焦 class
  tableAutoFocus: 'input',
  // 可编辑激活模板
  renderTableEdit (renderOpts, renderParams) {
    return <DemoEditMixInput render-params={ renderParams } />
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, renderParams) {
    const { row, column } = renderParams
    const cellValue = row[column.field]
    return <span>{cellValue}</span>
  }
})

// 创建一个编查看染器1
VxeUI.renderer.add('MyTableEditMixLabel1', {
  // 默认显示模板
  renderTableDefault (renderOpts, renderParams) {
    const { row, column } = renderParams
    const cellValue = row[column.field]
    return <span style="color: red;">{cellValue}</span>
  }
})

// 创建一个编查看染器2
VxeUI.renderer.add('MyTableEditMixLabel2', {
  // 默认显示模板
  renderTableDefault (renderOpts, renderParams) {
    const { row, column } = renderParams
    const cellValue = row[column.field]
    return <span style="color: blue;">{cellValue}</span>
  }
})
