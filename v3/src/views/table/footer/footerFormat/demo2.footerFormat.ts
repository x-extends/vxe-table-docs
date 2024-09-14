import { VxeUI } from 'vxe-pc-ui'

// 格式化表尾金额显示
VxeUI.formats.add('formatFootAmount', {
  tableFooterCellFormatMethod ({ itemValue }) {
    return `$${itemValue}元`
  }
})
