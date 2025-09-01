import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetTextareaProps {
  placeholder: string
  showWordCount: boolean
  minRows: number
  maxRows: number
  clearable: boolean
}

export const getFormDesignWidgetTextareaConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetTextareaProps> => {
  return {
    // 控件名称
    title: '多行输入',
    // 控件图标
    icon: 'vxe-icon-textarea',
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '请输入',
      showWordCount: false,
      minRows: 2,
      maxRows: 4,
      clearable: true
    }
  }
}
