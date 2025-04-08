// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoExpandList from './DemoExpandList.vue'

// 创建一个展开列表渲染器
VxeUI.renderer.add('MyExpandList', {
  renderTableExpand (h, renderOpts, renderParams) {
    return <DemoExpandList render-params={ renderParams } />
  }
})
