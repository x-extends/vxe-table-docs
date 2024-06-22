const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '4.6.17',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'modelValue',
        descKey: 'app.api.modal.desc.value',
        version: '',
        type: 'any',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.modal.desc.size',
        version: '',
        type: 'string',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      {
        name: 'loading',
        descKey: 'app.api.modal.desc.loading',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'title',
        descKey: 'app.api.modal.desc.title',
        version: '',
        type: 'string',
        enum: '',
        defVal: '消息提示',
        list: []
      },
      {
        name: 'className',
        desc: '给窗口附加 className',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'content',
        descKey: 'app.api.modal.desc.content',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'show-cancel-button',
        desc: '是否显示取消按钮',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认false（如果 type=confirm 则默认 true）',
        list: []
      },
      {
        name: 'cancel-button-text',
        desc: '只对 type=confirm 有效，取消按钮的文本内容',
        version: '',
        type: 'string',
        enum: '',
        defVal: '取消',
        list: []
      },
      {
        name: 'show-confirm-button',
        desc: '是否显示取消按钮',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认false（如果 type=alert|confirm 则默认 true）',
        list: []
      },
      {
        name: 'confirm-button-text',
        desc: '只对 type=alert|confirm 有效，确定按钮的文本内容',
        version: '',
        type: 'string',
        enum: '',
        defVal: '确定',
        list: []
      },
      {
        name: 'showHeader',
        descKey: 'app.api.modal.desc.showHeader',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'showFooter',
        descKey: 'app.api.modal.desc.showFooter',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'lock-view',
        descKey: 'app.api.modal.desc.lockView',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'lock-scroll',
        descKey: 'app.api.modal.desc.lockScroll',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'mask',
        descKey: 'app.api.modal.desc.mask',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'mask-closable',
        descKey: 'app.api.modal.desc.maskClosable',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'esc-closable',
        descKey: 'app.api.modal.desc.escClosable',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'show-close',
        desc: '是否显示关闭按钮',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'width',
        descKey: 'app.api.modal.desc.width',
        version: '',
        type: 'number | string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'height',
        descKey: 'app.api.modal.desc.height',
        version: '',
        type: 'number | string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'position',
        descKey: 'app.api.modal.desc.position',
        version: '',
        type: 'any',
        enum: 'top,bottom,left,right',
        defVal: 'right',
        list: []
      },
      {
        name: 'zIndex',
        descKey: 'app.api.modal.desc.zIndex',
        version: '',
        type: 'number',
        enum: '',
        defVal: '继承 setup.zIndex',
        list: []
      },
      {
        name: 'show-title-overflow',
        descKey: 'app.api.modal.desc.showTitleOverflow',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'transfer',
        desc: '是否将弹框容器插入于 body 内',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认 false，继承 setup.modal.transfer',
        list: []
      },
      {
        name: 'destroy-on-close',
        descKey: 'app.api.modal.desc.destroyOnClose',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'before-hide-method',
        desc: '在窗口隐藏之前执行，可以返回 Error 阻止关闭，支持异步',
        version: '',
        type: '({ type }) => Error | Promise<any>',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'default',
        desc: '窗口内容模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header',
        desc: '窗口头部的模板（如果使用了，则 solt title 无效）',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'title',
        desc: '窗口标题的模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'corner',
        desc: '窗口右上角的模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer',
        desc: '窗口底部的模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'show',
        desc: '在窗口显示时会触发该事件',
        version: '',
        type: '{ type }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'hide',
        desc: '在窗口隐藏时会触发该事件',
        version: '',
        type: '{ type }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'confirm',
        desc: '点击确定按钮时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'cancel',
        desc: '点击取消按钮时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'close',
        desc: '点击关闭按钮时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'open()',
        desc: '手动打开窗口',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'close()',
        desc: '手动关闭窗口',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getBox()',
        desc: '获取当前窗口元素',
        version: '',
        type: 'Element',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis
