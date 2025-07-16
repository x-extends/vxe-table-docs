// main.js

import { VxeUI, VxeButton } from 'vxe-pc-ui'

// 创建一个简单的工具栏-右侧工具渲染
VxeUI.renderer.add('ToolbarToolPrint', {
  renderToolbarTool (renderOpts, renderParams) {
    return <VxeButton circle icon="vxe-icon-print" onClick={
      () => {
        const { $table } = renderParams
        $table.print()
      }
    }></VxeButton>
  }
})
