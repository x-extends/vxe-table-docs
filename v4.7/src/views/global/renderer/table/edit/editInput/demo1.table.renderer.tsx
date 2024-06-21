// main.js

import { VxeUI, VxeInput } from 'vxe-pc-ui'

// 创建一个金额输入渲染器
VxeUI.renderer.add('EditAmount', {
  // 如果是输入框类型，可以设置为激活自动聚焦 class
  tableAutofocus: 'input',
  // 可编辑激活模板
  renderTableEdit (renderOpts, params) {
    const { row, column } = params
    return <VxeInput type="float" digits="2" prefix-icon="vxe-icon-rmb" v-model={ row[column.field] } />
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, params) {
    const { row, column } = params
    return <span>{ row[column.field] }</span>
  }
})
