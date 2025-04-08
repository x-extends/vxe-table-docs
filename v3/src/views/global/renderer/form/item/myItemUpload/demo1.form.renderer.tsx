// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoFormItemUpload from './DemoFormItemUpload.vue'

// 创建一个附件上传渲染器
VxeUI.renderer.add('MyFormItemUpload', {
  // 项显示模板
  renderFormItemContent (h, renderOpts, renderParams) {
    return <DemoFormItemUpload render-opts={renderOpts} render-params={ renderParams } />
  }
})
