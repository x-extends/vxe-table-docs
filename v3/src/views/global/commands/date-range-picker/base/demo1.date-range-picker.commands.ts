// main.js

import { VxeUI } from 'vxe-table'
import XEUtils from 'xe-utils'

// 定义选中日期最近一周指令
VxeUI.commands.add('myRecentWeek', {
  dateRangePickerCommandMethod ({ $dateRangePicker }) {
    const startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -7), 'yyyy-MM-dd')
    const endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    $dateRangePicker.setModelValue(startDate, endDate)
  }
})

// 定义选中日期最近一个月指令
VxeUI.commands.add('myRecentMonth', {
  dateRangePickerCommandMethod ({ $dateRangePicker }) {
    const startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -30), 'yyyy-MM-dd')
    const endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    $dateRangePicker.setModelValue(startDate, endDate)
  }
})

// 定义选中日期最近三个月指令
VxeUI.commands.add('myRecentThreeMonth', {
  dateRangePickerCommandMethod ({ $dateRangePicker }) {
    const startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -90), 'yyyy-MM-dd')
    const endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    $dateRangePicker.setModelValue(startDate, endDate)
  }
})

// 定义选中日期最近半年指令
VxeUI.commands.add('myRecentHalfYear', {
  dateRangePickerCommandMethod ({ $dateRangePicker }) {
    const startDate = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -180), 'yyyy-MM-dd')
    const endDate = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    $dateRangePicker.setModelValue(startDate, endDate)
  }
})
