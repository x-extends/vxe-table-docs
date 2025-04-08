// main.js

import { VxeUI } from 'vxe-table'
import DemoExpandTable from './DemoExpandTable.vue'

// 创建一个展开表格渲染器
VxeUI.renderer.add('MyExpandTable', {
  // 默认显示模板
  renderTableExpand (renderOpts, renderParams) {
    return <DemoExpandTable render-params={ renderParams } />
  }
})
