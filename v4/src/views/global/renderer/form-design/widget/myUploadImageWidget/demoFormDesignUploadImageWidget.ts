import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'

export interface FormDesignWidgetUploadImageProps {
  buttonText: string
  multiple: boolean
  limitCount: number
  limitSize: number
}

export const getFormDesignWidgetUploadImageConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetUploadImageProps> => {
  return {
    // 控件名称
    title: '上传图片',
    // 控件图标
    icon: 'vxe-icon-file-image',
    // 控件参数，用于在右侧配置
    options: {
      buttonText: '',
      multiple: false,
      limitCount: 9,
      limitSize: 3
    }
  }
}
