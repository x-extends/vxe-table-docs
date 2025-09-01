import type { VxeGlobalRendererHandles, VxeNumberInputPropTypes } from 'vxe-pc-ui'

export interface FormDesignWidgetAmountInputProps {
  placeholder: string
  clearable: boolean
  min: VxeNumberInputPropTypes.Min
  max: VxeNumberInputPropTypes.Max
  digits: number
  step: VxeNumberInputPropTypes.Step
  controlConfig: VxeNumberInputPropTypes.ControlConfig
  showCurrency: boolean
  align: VxeNumberInputPropTypes.Align
}

export const getFormDesignWidgetAmountInputConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetAmountInputProps> => {
  return {
    // 控件名称
    title: '金额输入',
    // 控件图标
    icon: 'vxe-icon-rmb',
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '请输入',
      clearable: true,
      controlConfig: {
        showButton: true,
        layout: 'right'
      },
      digits: 2,
      min: null,
      max: null,
      step: null,
      showCurrency: true,
      align: ''
    }
  }
}
