// main.js

import { VxeUI, VxeButton } from 'vxe-pc-ui'

// 创建一个简单的工具栏-左侧按钮渲染
VxeUI.renderer.add('ToolbarBtnDownload', {
  renderToolbarButton (renderOpts, params) {
    return <VxeButton icon="vxe-icon-download" onClick={
      () => {
        const { $table } = params
        $table.exportData()
      }
    }>自定义导出</VxeButton>
  }
})
