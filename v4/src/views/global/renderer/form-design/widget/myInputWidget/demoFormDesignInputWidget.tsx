import type { VxeGlobalRendererHandles, VxeInputPropTypes } from 'vxe-pc-ui'

export interface FormDesignWidgetInputProps {
  placeholder: string
  maxLength: string
  showWordCount: boolean
  clearable: VxeInputPropTypes.Clearable
  align: VxeInputPropTypes.Align
}

export const getFormDesignWidgetInputConfig = (): VxeGlobalRendererHandles.CreateFormDesignWidgetConfigObj<FormDesignWidgetInputProps> => {
  return {
    // 控件名称
    title: '单行输入',
    // 控件图标 class icon
    // icon: 'vxe-icon-input',
    // 控件图标 svg
    icon () {
      return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;vertical-align: middle;">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
        </g>
      </svg>
    },
    // 控件参数，用于在右侧配置
    options: {
      placeholder: '请输入',
      maxLength: '',
      showWordCount: false,
      clearable: true,
      align: ''
    }
  }
}
