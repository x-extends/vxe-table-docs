import type { VxeGlobalRendererHandles, VxeNumberInputPropTypes } from 'vxe-pc-ui'

export interface FormDesignWidgetNumberInputProps {
  placeholder: string
  clearable: boolean
  type: 'number' | 'integer' | 'float'
  min: VxeNumberInputPropTypes.Min
  max: VxeNumberInputPropTypes.Max
  digits: number
  step: VxeNumberInputPropTypes.Step
  controlConfig: VxeNumberInputPropTypes.ControlConfig
  align: VxeNumberInputPropTypes.Align
}

export const getFormDesignWidgetNumberInputConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetNumberInputProps> => {
  return {
    // 控件名称
    title: '数值输入',
    // 控件图标
    icon: 'vxe-icon-number',
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '请输入',
      clearable: true,
      type: 'number',
      controlConfig: {
        showButton: true,
        layout: 'right'
      },
      digits: 2,
      min: null,
      max: null,
      step: null,
      align: ''
    }
  }
}
