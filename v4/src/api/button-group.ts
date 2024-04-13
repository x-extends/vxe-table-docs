const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'mode',
        descKey: 'app.api.button.desc.mode',
        version: '',
        type: 'string',
        enum: 'text,button',
        defVal: 'button',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.button.desc.size',
        version: '',
        type: 'string',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      {
        name: 'round',
        desc: '圆角边框',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'circle',
        desc: '圆角按钮',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'disabled',
        descKey: 'app.api.button.desc.disabled',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'class-name',
        desc: '给展示容器附加 className',
        version: '4.0.7',
        type: 'string | (({}) => string)',
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
    list: []
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
        name: 'click',
        desc: '在单击按钮时触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
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
    list: []
  }
]

export default apis
