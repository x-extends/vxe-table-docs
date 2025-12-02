// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个空内容渲染
VxeUI.renderer.add('MyTableEmptyText', {
  // 空内容模板
  renderTableEmpty () {
    return <span>
      <img src="https://vxeui.com/resource/img/546.gif"/>
      <p>亲，没有更多数据了！</p>
    </span>
  }
})
