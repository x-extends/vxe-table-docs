import { VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'

// 格式金额，默认2位数
VXETable.formats.add('myAmount', {
  formatMethod ({ cellValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })
  }
})

// 格式化开关
VXETable.formats.add('mySwitch', {
  formatMethod ({ cellValue }) {
    return cellValue === 1 ? '开启' : '关闭'
  }
})
