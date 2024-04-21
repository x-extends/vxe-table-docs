import XEUtils from 'xe-utils'
import buttonAPI from './button'

const buttonProps: any = buttonAPI.find(item => item.name === 'Props')

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
        version: '',
        type: 'string | (({}) => string)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'options',
        desc: '按钮列表',
        version: '3.8.0',
        type: 'array',
        enum: '',
        defVal: '',
        list: XEUtils.clone(buttonProps, true).list.filter(item => !['popup-class-name', 'placement', 'destroy-on-close', 'transfer'].includes(item.name)).map(item => {
          return {
            ...item,
            version: ''
          }
        })
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
        defVal: '{ option, name, $event }',
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
