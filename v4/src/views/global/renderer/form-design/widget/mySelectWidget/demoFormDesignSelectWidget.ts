import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetSelectProps {
  placeholder: string
  multiple: boolean
  clearable: boolean
  filterable: boolean
  options: { value: string, label: string }[]
}

export const getFormDesignWidgetSelectConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetSelectProps> => {
  return {
    // 控件名称
    title: '下拉框',
    // 控件图标
    icon: 'vxe-icon-select',
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '',
      multiple: false,
      clearable: true,
      filterable: true,
      options: [
        { value: '示例1', label: '示例1' },
        { value: '示例2', label: '示例2' },
        { value: '示例3', label: '示例3' }
      ]
    }
  }
}
