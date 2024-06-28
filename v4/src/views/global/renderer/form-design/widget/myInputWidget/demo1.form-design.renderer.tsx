// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getMyWidgetInputConfig } from './demoMyInputWidget'
import DemoMyInputWidgetView from './DemoMyInputWidgetView.vue'
import DemoMyInputWidgetProps from './DemoMyInputWidgetProps.vue'

// 创建表单设计器控件 - 单行输入
VxeUI.renderer.add('MyInputWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getMyWidgetInputConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoMyInputWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoMyInputWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
