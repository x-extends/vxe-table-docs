// main.js

import { VxeUI } from 'vxe-pc-ui'
import { getFormDesignWidgetUploadFileConfig } from './demoFormDesignUploadFileWidget'
import DemoFormDesignUploadFileWidgetView from './DemoFormDesignUploadFileWidgetView.vue'
import DemoFormDesignUploadFileWidgetProps from './DemoFormDesignUploadFileWidgetProps.vue'

// 创建表单设计器控件 - 上传附件
VxeUI.renderer.add('MyFormDesignUploadFileWidget', {
  // 定义左侧控件
  createFormDesignWidgetConfig: getFormDesignWidgetUploadFileConfig,
  // 渲染控件的表单视图
  renderFormDesignWidgetView (renderOpts, renderParams) {
    return <DemoFormDesignUploadFileWidgetView renderOpts={renderOpts} renderParams={renderParams} />
  },
  // 渲染控件右侧的属性配置视图
  renderFormDesignWidgetFormView (renderOpts, renderParams) {
    return <DemoFormDesignUploadFileWidgetProps renderOpts={renderOpts} renderParams={renderParams} />
  }
})
