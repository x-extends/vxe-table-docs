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
        descKey: 'app.api.checkbox.desc.value',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'max',
        desc: '限制最大可选数量，默认无限制',
        version: '4.3.0',
        type: 'string, number',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.checkbox.desc.size',
        version: '',
        type: 'string',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
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
