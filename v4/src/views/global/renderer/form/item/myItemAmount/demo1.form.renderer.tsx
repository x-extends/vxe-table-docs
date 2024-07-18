// main.js

import { VxeUI, VxeInput } from 'vxe-pc-ui'

// 创建一个金额输入渲染器
VxeUI.renderer.add('MyFormItemAmount', {
  // 项显示模板
  renderItemContent (renderOpts, params) {
    const { data, field } = params
    return <VxeInput v-model={ data[field] } type="float" digits="2" prefix-icon="vxe-icon-rmb"></VxeInput>
  }
})
