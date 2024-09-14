// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoFilterComplex from './DemoFilterComplex.vue'

// 创建一个带条件的筛选渲染器
VxeUI.renderer.add('MyTableFilterComplex', {
  // 不显示底部按钮，使用自定义的按钮
  showFilterFooter: false,
  // 自定义筛选模板
  renderFilter (h, renderOpts, params) {
    return <DemoFilterComplex params={ params } />
  },
  // 自定义重置数据方法
  filterResetMethod (params) {
    const { options } = params
    options.forEach((option) => {
      option.data = { type: 'has', name: '' }
    })
  },
  // 自定义筛选数据方法
  filterMethod (params) {
    const { option, row, column } = params
    const cellValue = row[column.field]
    const { name, type } = option.data
    if (cellValue) {
      if (type === 'has') {
        return cellValue.indexOf(name) > -1
      }
      return cellValue === name
    }
    return false
  }
})
