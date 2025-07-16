// main.js

import { VxeUI, VxeButton } from 'vxe-pc-ui'

// 创建一个简单的工具栏-左侧按钮渲染
VxeUI.renderer.add('ToolbarBtnDownload', {
  renderToolbarButton (renderOpts, renderParams) {
    return <VxeButton icon="vxe-icon-download" onClick={
      () => {
        const { $table } = renderParams
        $table.exportData()
      }
    }>自定义导出</VxeButton>
  }
})
