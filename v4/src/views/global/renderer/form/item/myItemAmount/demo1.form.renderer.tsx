// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoFormItemAmount from './DemoFormItemAmount.vue'

// 创建一个金额输入渲染器
VxeUI.renderer.add('MyFormItemAmount', {
  // 项显示模板
  renderFormItemContent (renderOpts, params) {
    return <DemoFormItemAmount renderOpts={renderOpts} params={ params } />
  }
})
