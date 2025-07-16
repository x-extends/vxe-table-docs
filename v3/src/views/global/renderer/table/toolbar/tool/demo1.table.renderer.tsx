// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个简单的工具栏-右侧工具渲染
VxeUI.renderer.add('ToolbarToolPrint', {
  renderToolbarTool (h, renderOpts, renderParams) {
    return <vxe-button circle icon="vxe-icon-print" onClick={
      () => {
        const { $table } = renderParams
        $table.print()
      }
    }></vxe-button>
  }
})
