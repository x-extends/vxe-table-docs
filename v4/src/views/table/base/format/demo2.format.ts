import { VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'

// 自定义全局的格式化处理函数
// 在 main.ts 中全局引入
VXETable.formats.mixin({
  // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
  formatDate2 ({ cellValue }, format?: string) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  },
  // 四舍五入金额，每隔3位逗号分隔，默认2位数
  formatAmount3 ({ cellValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })
  },
  // 格式化银行卡，默认每4位空格隔开
  formatBankcard4 ({ cellValue }) {
    return XEUtils.commafy(XEUtils.toValueString(cellValue), { spaceNumber: 4, separator: ' ' })
  },
  // 向下舍入,默认两位数
  formatCutNumber5 ({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits)
  },
  // 四舍五入,默认两位数
  formatFixedNumber6 ({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits)
  },
  // 格式化性别
  formatSex7 ({ cellValue }) {
    return cellValue ? (cellValue === '1' ? '男' : '女') : ''
  }
})
