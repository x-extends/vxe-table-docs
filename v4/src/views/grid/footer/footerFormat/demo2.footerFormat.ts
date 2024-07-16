import { VxeUI } from 'vxe-pc-ui'

// 格式化表尾合计显示
VxeUI.formats.add('formatFootTotal', {
  tableFooterCellFormatMethod ({ itemValue }) {
    return `合计${itemValue}`
  }
})
