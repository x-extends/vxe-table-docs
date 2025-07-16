// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个简单的工具栏-左侧按钮渲染
VxeUI.renderer.add('ToolbarBtnDownload', {
  renderToolbarButton (h, renderOpts, renderParams) {
    return <vxe-button icon="vxe-icon-download" onClick={
      () => {
        const { $table } = renderParams
        $table.exportData()
      }
    }>自定义导出</vxe-button>
  }
})
