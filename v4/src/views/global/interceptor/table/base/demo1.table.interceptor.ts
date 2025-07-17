// main.js

import { VxeUI } from 'vxe-table'

// 用于 edit-render 模式，拦截单元格清除事件，解决渲染第三方组件被关闭导致无法操作问题
VxeUI.interceptor.add('event.clearEdit', {
  tableInterceptorMethod (params) {
    const { $event } = params
    // 比如点击了某个组件的弹出层面板之后，此时被激活单元格不希望被自动关闭销毁，可以通过返回 false 可以阻止默认的行为。
    if ($event.target.className.indexOf('other-popper') > -1) {
      return false
    }
  }
})
