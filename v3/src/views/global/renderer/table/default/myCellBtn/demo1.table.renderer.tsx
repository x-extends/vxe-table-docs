// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建通用操作按钮
VxeUI.renderer.add('MyTableCellBtn', {
  // 默认显示模板
  renderTableDefault (h, renderOpts, renderParams) {
    const { events } = renderOpts
    const { pass, reject } = events || {}
    return [
      <vxe-button mode="text" status="primary" onClick={
        () => {
          if (pass) {
            pass(renderParams)
          }
        }
      }>通过</vxe-button>,
      <vxe-button mode="text" status="error" onClick={
        () => {
          if (reject) {
            reject(renderParams)
          }
        }
      }>驳回</vxe-button>
    ]
  }
})
