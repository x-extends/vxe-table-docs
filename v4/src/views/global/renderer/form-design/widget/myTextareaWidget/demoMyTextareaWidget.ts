import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface MyWidgetTextareaProps {
  placeholder: string
  showWordCount: boolean
  minRows: number
  maxRows: number
}

export const getMyWidgetTextareaConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<MyWidgetTextareaProps> => {
  return {
    // 控件名称
    title: '多行输入',
    // 控件图标
    icon: 'vxe-icon-textarea',
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '',
      showWordCount: false,
      minRows: 2,
      maxRows: 4
    }
  }
}
