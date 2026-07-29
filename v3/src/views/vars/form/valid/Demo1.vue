<template>
  <div>
    字体：<vxe-radio-group v-model="validFontSize">
      <vxe-radio-button checked-value="12px" content="12px"></vxe-radio-button>
      <vxe-radio-button checked-value="13px" content="13px"></vxe-radio-button>
      <vxe-radio-button checked-value="14px" content="14px"></vxe-radio-button>
      <vxe-radio-button checked-value="15px" content="15px"></vxe-radio-button>
      <vxe-radio-button checked-value="16px" content="16px"></vxe-radio-button>
    </vxe-radio-group>
    边距：<vxe-radio-group v-model="validPadding">
      <vxe-radio-button checked-value="2px" content="2px"></vxe-radio-button>
      <vxe-radio-button checked-value="4px" content="4px"></vxe-radio-button>
      <vxe-radio-button checked-value="6px" content="6px"></vxe-radio-button>
      <vxe-radio-button checked-value="8px" content="8px"></vxe-radio-button>
      <vxe-radio-button checked-value="10px" content="10px"></vxe-radio-button>
      <vxe-radio-button checked-value="12px" content="12px"></vxe-radio-button>
      <vxe-radio-button checked-value="14px" content="14px"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-form
      v-bind="formOptions"
      :style="{
        '--vxe-ui-form-validate-error-font-size': validFontSize,
        '--vxe-ui-form-validate-error-padding': validPadding
      }"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps, VxeFormListeners, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const sexItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      vertical: false,
      data: {
        name: '',
        nickname: '',
        sex: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '必须填写必须填写' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ],
        age: [
          { required: true, message: '请输入年龄请输入年龄请输入年龄请输入年龄请输入年龄请输入年龄请输入年龄请输入年龄' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
        { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
        {
          align: 'center',
          span: 24,
          itemRender: {
            name: 'VxeButtonGroup',
            options: [
              { type: 'submit', content: '提交', status: 'primary' },
              { type: 'reset', content: '重置' }
            ]
          }
        }
      ]
    }

    const validFontSize = '14px'
    const validPadding = '6px'

    return {
      formOptions,
      sexItemRender,
      validFontSize,
      validPadding
    }
  },
  methods: {
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
