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
        name: 'modelValue',
        descKey: 'app.api.radio.desc.value',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.radio.desc.size',
        version: '',
        type: 'string',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      {
        name: 'type',
        desc: '按钮类型',
        version: '4.6.0',
        type: 'string',
        enum: 'default,button',
        defVal: '',
        list: []
      },
      {
        name: 'disabled',
        desc: '是否禁用',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'strict',
        desc: '严格模式，选中后不能取消',
        version: '4.1.17',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'options',
        desc: '选项列表',
        version: '4.6.0',
        type: '{ value, label }[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'option-props',
        desc: '选项属性参数配置',
        version: '4.6.0',
        type: 'any',
        enum: '',
        defVal: '{ value, label }',
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
    list: []
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
