// main.js

import { VxeUI, VxeInput } from 'vxe-pc-ui'

// 创建一个输入框渲染器
VxeUI.renderer.add('EditInput', {
  // 项显示模板
  renderFormItemContent (renderOpts, params) {
    const { data, field } = params
    return <VxeInput v-model={ data[field] } clearable></VxeInput>
  }
})
