// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个空内容渲染
VxeUI.renderer.add('MyNotData', {
  // 空内容模板
  renderTableEmpty (renderOpts, params) {
    return <span>
      <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"/>
      <p>亲，没有更多数据了！</p>
    </span>
  }
})
