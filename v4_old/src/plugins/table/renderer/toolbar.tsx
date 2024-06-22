import { VxeUI } from 'vxe-table'

// 创建一个简单的工具栏-左侧按钮渲染
VxeUI.renderer.add('ToolbarButtonDownload', {
  renderToolbarButton (renderOpts, params) {
    const { events = {} } = renderOpts
    const { button } = params
    return <vxe-button onClick={
      () => {
        events.click(button)
      }
    }>下载</vxe-button>
  }
})

// 创建一个简单的工具栏-右侧工具渲染
VxeUI.renderer.add('ToolbarToolPrint', {
  renderToolbarTool (renderOpts, params) {
    const { $table } = params
    return <vxe-button circle onClick={
      () => {
        $table.print()
      }
    }></vxe-button>
  }
})
