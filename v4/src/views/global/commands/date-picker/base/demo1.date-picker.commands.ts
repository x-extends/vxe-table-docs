// main.js

import { VxeUI } from 'vxe-table'
import XEUtils from 'xe-utils'

// 定义选中日期今天指令
VxeUI.commands.add('myToday', {
  datePickerCommandMethod ({ $datePicker }) {
    const value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    $datePicker.setModelValue(value)
  }
})

// 定义选中日期昨天指令
VxeUI.commands.add('myYesterday', {
  datePickerCommandMethod ({ $datePicker }) {
    const value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -1), 'yyyy-MM-dd')
    $datePicker.setModelValue(value)
  }
})

// 定义选中日期明天指令
VxeUI.commands.add('myTomorrow', {
  datePickerCommandMethod ({ $datePicker }) {
    const value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), 1), 'yyyy-MM-dd')
    $datePicker.setModelValue(value)
  }
})
