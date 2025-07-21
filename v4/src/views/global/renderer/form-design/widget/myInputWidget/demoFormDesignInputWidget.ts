import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetInputProps {
  placeholder: string
  maxLength: string
  showWordCount: boolean
  clearable: boolean
}

export const getFormDesignWidgetInputConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetInputProps> => {
  return {
    // 控件名称
    title: '单行输入',
    // 控件图标
    icon: 'vxe-icon-input',
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '',
      maxLength: '',
      showWordCount: false,
      clearable: true
    }
  }
}
