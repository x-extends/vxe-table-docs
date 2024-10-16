// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个金额输入渲染器
VxeUI.renderer.add('MyFormItemAmount', {
  // 项显示模板
  renderFormItemContent (h, renderOpts, params) {
    const { data, field } = params
    return <vxe-input v-model={ data[field] } type="float" digits="2" prefix-icon="vxe-icon-rmb"></vxe-input>
  }
})
