// main.js

import { VxeUI } from 'vxe-table'
import DemoExpandList from './DemoExpandList.vue'

// 创建一个展开列表渲染器
VxeUI.renderer.add('MyExpandList', {
  renderTableExpand (renderOpts, renderParams) {
    return <DemoExpandList render-params={ renderParams } />
  }
})
