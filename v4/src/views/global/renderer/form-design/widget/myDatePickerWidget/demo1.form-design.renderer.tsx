// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetDatePickerConfig } from './demoFormDesignDatePickerWidget'
import DemoFormDesignDatePickerWidgetView from './DemoFormDesignDatePickerWidgetView.vue'
import DemoFormDesignDatePickerWidgetProps from './DemoFormDesignDatePickerWidgetProps.vue'

// 创建表单设计器控件 - 日期选择器
VxeUI.renderer.add('MyFormDesignDatePickerWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetDatePickerConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoFormDesignDatePickerWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoFormDesignDatePickerWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
