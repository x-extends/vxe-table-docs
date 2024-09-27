// main.js

import { VxeUI } from 'vxe-table'
import XEUtils from 'xe-utils'

// 格式金额，默认2位数
VxeUI.formats.add('myAmount', {
  cellFormatMethod ({ cellValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })
  }
})

// 格式化开关
VxeUI.formats.add('mySwitch', {
  cellFormatMethod ({ cellValue }) {
    return cellValue === 1 ? '开启' : '关闭'
  }
})
