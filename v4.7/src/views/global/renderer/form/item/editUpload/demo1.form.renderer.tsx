// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoEditUpload from './DemoEditUpload.vue'

// 创建一个附件上传渲染器
VxeUI.renderer.add('EditUpload', {
  // 项显示模板
  renderFormItemContent (renderOpts, params) {
    return <DemoEditUpload params={ params } />
  }
})
