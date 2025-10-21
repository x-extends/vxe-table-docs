// main.js

import { VxeUI } from 'vxe-table'
import DemoFilterInput from './DemoFilterInput.vue'

// 创建一个简单的输入框筛选渲染器
VxeUI.renderer.add('MyTableFilterInput', {
  // 自定义筛选模板
  renderTableFilter (renderOpts, renderParams) {
    return <DemoFilterInput render-opts={ renderOpts } render-params={ renderParams } />
  },
  // 自定义重置数据方法
  tableFilterResetMethod (params) {
    const { options } = params
    options.forEach((option) => {
      option.data = ''
    })
  },
  // 自定义重置筛选复原方法（当未点击确认时，该选项将被恢复为默认值）
  tableFilterRecoverMethod ({ option }) {
    option.data = ''
  },
  // 自定义筛选方法
  tableFilterMethod (params) {
    const { option, row, column } = params
    const { data } = option
    const cellValue = row[column.field]
    if (cellValue) {
      return cellValue.indexOf(data) > -1
    }
    return false
  }
})
