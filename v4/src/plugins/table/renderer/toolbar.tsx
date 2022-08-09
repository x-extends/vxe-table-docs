import { VXETable } from 'vxe-table'

// 创建一个简单的工具栏-左侧按钮渲染
VXETable.renderer.add('ToolbarButtonDownload', {
  renderToolbarButton (renderOpts, params) {
    const { events = {} } = renderOpts
    const { button } = params
    return [
      <vxe-button circle onClick={
        () => {
          events.click(button)
        }
      }></vxe-button>
    ]
  }
})

// 创建一个简单的工具栏-右侧工具渲染
VXETable.renderer.add('ToolbarToolPrint', {
  renderToolbarTool (renderOpts, params) {
    const { $table } = params
    return [
      <vxe-button circle onClick={
        () => {
          $table.print()
        }
      }></vxe-button>
    ]
  }
})
