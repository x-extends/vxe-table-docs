import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetUploadFileProps {
  buttonText: string
  multiple: boolean
  limitCount: number
  limitSize: number
}

export const getFormDesignWidgetUploadFileConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetUploadFileProps> => {
  return {
    // 控件名称
    title: '上传附件',
    // 控件图标
    icon: 'vxe-icon-cloud-upload',
    // 控件参数，用于在右侧配置
    options: {
      buttonText: '',
      multiple: false,
      limitCount: 20,
      limitSize: 50
    }
  }
}
