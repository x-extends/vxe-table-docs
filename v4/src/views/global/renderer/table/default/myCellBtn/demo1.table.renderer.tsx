// main.js

import { VxeUI, VxeButton } from 'vxe-pc-ui'

// 创建通用操作按钮
VxeUI.renderer.add('MyTableCellBtn', {
  // 默认显示模板
  renderTableDefault (renderOpts, renderParams) {
    const { events } = renderOpts
    const { pass, reject } = events || {}
    return [
      <VxeButton mode="text" status="primary" onClick={
        () => {
          if (pass) {
            pass(renderParams)
          }
        }
      }>通过</VxeButton>,
      <VxeButton mode="text" status="error" onClick={
        () => {
          if (reject) {
            reject(renderParams)
          }
        }
      }>驳回</VxeButton>
    ]
  }
})
