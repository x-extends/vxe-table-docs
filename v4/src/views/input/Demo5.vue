<template>
  <div>
    <vxe-input v-model="val1" placeholder="日期选择" type="date"></vxe-input>
    <vxe-input v-model="val2" placeholder="禁用日期" type="date" :disabled-method="disabledDateMethod" transfer></vxe-input>
    <vxe-input v-model="val3" placeholder="小圆点" type="date" :festival-method="festivalNoticeMethod" transfer></vxe-input>
    <vxe-input v-model="val4" placeholder="农历节日" type="date" :festival-method="festivalCalendarMethod" transfer></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeInputPropTypes, VxeInputDefines } from 'vxe-table'
import XEUtils from 'xe-utils'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('2020-10-01')
const val4 = ref('2020-10-0')

// 渲染日期小圆点
const noticeMaps: Record<string, VxeInputDefines.DateFestivalInfo> = {
  20200910: {
    notice: true, // 显示小圆点事件通知
    important: true, // 是否标记为重要节日
    label: '活动'
  },
  20201015: {
    notice: true,
    important: true,
    label: '聚餐'
  },
  20201108: {
    notice: true,
    label: '爬山'
  },
  20201222: {
    notice: true,
    label: '游泳'
  }
}

// 显示日期农历节假日
const calendarMaps: Record<string, VxeInputDefines.DateFestivalInfo> = {
  20200930: {
    label: '十四' // 显示节日名称
  },
  20201001: {
    label: '国庆节,中秋节', // 如果同一天拥有多个节日重叠，用逗号分开
    important: true, // 是否标记为重要节日
    extra: '休' // 右上角额外显示的名称
  },
  20201002: {
    label: '十六',
    extra: '休'
  },
  20201003: {
    label: '十七',
    extra: '休'
  },
  20201004: {
    label: '十八',
    extra: '休'
  },
  20201005: {
    label: '十九',
    extra: '休'
  },
  20201006: {
    label: '二十',
    extra: '休'
  },
  20201007: {
    label: '廿一',
    extra: '休'
  },
  20201008: {
    label: '寒霜',
    important: true,
    extra: '休'
  },
  20201009: {
    label: '廿三'
  },
  20201010: {
    label: '廿四',
    extra: {
      label: '班',
      important: true // 是否标记为重要节日
    }
  }
}

const disabledDateMethod: VxeInputPropTypes.DisabledMethod = (params) => {
  const { date } = params
  const dd = date.getDate()
  return dd > 15
}

const festivalNoticeMethod: VxeInputPropTypes.FestivalMethod = (params) => {
  const { date, viewType } = params
  if (viewType === 'day') {
    const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
    return noticeMaps[ymd] || { label: '无' }
  }
}

const festivalCalendarMethod: VxeInputPropTypes.FestivalMethod = (params) => {
  const { date, viewType } = params
  if (viewType === 'day') {
    const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
    return calendarMaps[ymd] || { label: '无' }
  }
}
</script>
