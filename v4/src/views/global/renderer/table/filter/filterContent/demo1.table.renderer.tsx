// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoFilterContent from './DemoFilterContent.vue'

// 创建一个显示列表的筛选的筛选渲染器
VxeUI.renderer.add('FilterContent', {
  // 不显示底部按钮，使用自定义的按钮
  showFilterFooter: false,
  // 自定义筛选模板
  renderFilter (renderOpts, params) {
    return <DemoFilterContent params={ params } />
  },
  // 自定义重置数据方法
  filterResetMethod (params) {
    const { options } = params
    options.forEach((option) => {
      option.data = { vals: [], sVal: '' }
    })
  },
  // 自定义筛选数据方法
  filterMethod (params) {
    const { option, row, column } = params
    const { vals } = option.data
    const cellValue = row[column.field]
    return vals.includes(cellValue)
  }
})
