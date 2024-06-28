// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getMyWidgetTextareaConfig } from './demoMyTextareaWidget'
import DemoMyTextareaWidgetView from './DemoMyTextareaWidgetView.vue'
import DemoMyTextareaWidgetProps from './DemoMyTextareaWidgetProps.vue'

// 创建表单设计器控件 - 多行输入
VxeUI.renderer.add('MyTextareaWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getMyWidgetTextareaConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoMyTextareaWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoMyTextareaWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
