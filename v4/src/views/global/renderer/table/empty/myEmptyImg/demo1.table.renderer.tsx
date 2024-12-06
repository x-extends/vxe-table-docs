// main.js

import { VxeUI } from 'vxe-table'

// 创建一个空内容渲染
VxeUI.renderer.add('MyTableEmptyImg', {
  // 空内容模板
  renderTableEmpty () {
    return <span>
      <p style="color: red;">已经到底了，没有更多数据了！</p>
    </span>
  }
})
