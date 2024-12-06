// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetTextareaConfig } from './demoFormDesignTextareaWidget'
import DemoFormDesignTextareaWidgetView from './DemoFormDesignTextareaWidgetView.vue'
import DemoFormDesignTextareaWidgetProps from './DemoFormDesignTextareaWidgetProps.vue'

// 创建表单设计器控件 - 多行输入
VxeUI.renderer.add('MyFormDesignTextareaWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetTextareaConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoFormDesignTextareaWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoFormDesignTextareaWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
