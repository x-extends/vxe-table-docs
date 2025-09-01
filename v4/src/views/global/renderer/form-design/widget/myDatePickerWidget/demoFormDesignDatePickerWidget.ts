import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetDatePickerProps {
  placeholder: string
  labelFormat: string
  clearable: boolean
}

export const getFormDesignWidgetDatePickerConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetDatePickerProps> => {
  return {
    // 控件名称
    title: '日期选择',
    // 控件图标
    icon: 'vxe-icon-calendar',
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '请选择',
      labelFormat: '',
      clearable: true
    }
  }
}
