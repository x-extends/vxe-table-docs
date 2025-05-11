// main.js

import { VxeUI } from 'vxe-table'
import XEUtils from 'xe-utils'

// 格式金额，默认2位数
VxeUI.formats.add('myAmount', {
  formItemFormatMethod ({ itemValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(itemValue), { digits })
  }
})

// 格式化开关
VxeUI.formats.add('mySwitch', {
  formItemFormatMethod ({ itemValue }) {
    return itemValue === 1 ? '开启' : '关闭'
  }
})
