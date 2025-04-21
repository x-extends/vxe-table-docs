<template>
  <div>
    <vxe-tip status="primary" title="全局渲染器">
      通过渲染器你可以实现表单设计器控件的渲染，可以实现任意的控件，从而实现零代码平台。
    </vxe-tip>
    <vxe-tip status="info">
      <div class="green">渲染器：抽象一切可复用的功能（类似组件的概念），实现非常简单的可配置化；</div>
      <div class="green">插槽：自定义程度高，但需要重复写冗余代码，比较繁琐；</div>
      <div class="orange">支持通过 JSX 自定义渲染，返回数组格式的 JSX。实际开发中应该将业务封装成一个组件，不要把复杂的渲染逻辑写在渲染器中，渲染器只负责表格与自定义组件之间的对接关系</div>
    </vxe-tip>
    <vxe-tip status="error" title="难点提示">
      <div>先检查是否配置好 <vxe-link href="https://cn.vuejs.org/guide/extras/render-function.html#jsx-tsx" target="_blank">jsx/tsx</vxe-link> 运行环境，如果没配置将无法使用。渲染器的实现难度极高，不适合初级使用，出错将会全局影响功能、问题排查难度较高</div>
    </vxe-tip>
    <vxe-tip status="success">
      <div>调用方式： VxeUI.renderer.add(code, options)</div>
    </vxe-tip>

    <vxe-table
      :tree-config="{childrenField: 'list', expandAll: true}"
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{resizable: true, isCurrent: true}"
      :data="tableData">
      <vxe-column field="name" :title="$t('api.title.prop')" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" :title="$t('api.title.desc')" min-width="200"></vxe-column>
      <vxe-column field="type" :title="$t('api.title.type')" min-width="140"></vxe-column>
      <vxe-column field="enum" :title="$t('api.title.enum')" min-width="150"></vxe-column>
      <vxe-column field="defVal" :title="$t('api.title.defVal')" min-width="160"></vxe-column>
    </vxe-table>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const tableData = [
      {
        name: 'add(name, option)',
        desc: '添加',
        version: '',
        type: '',
        enum: '',
        defVal: 'name: string, option: any',
        list: [
          {
            name: 'renderFormDesignWidgetItem',
            desc: '渲染左侧控件项',
            version: '',
            type: '(h, renderOpts: {}, params: { $formDesign }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createFormDesignSettingFormConfig',
            desc: '创建设计器-表单属性数据',
            version: '',
            type: '(params: {}) => Record<string, any>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignSettingFormView',
            desc: '渲染设计器-属性表单',
            version: '',
            type: '(h, renderOpts: {}, params: { $formDesign }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignStyleFormView',
            desc: '渲染设计器-电脑端表单',
            version: '',
            type: '(h, renderOpts: {}, params: { formConfig, $formDesign }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignMobileStyleFormView',
            desc: '渲染设计器-手机端表单',
            version: '',
            type: '(h, renderOpts: {}, params: { formConfig, $formDesign }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createFormDesignWidgetConfig',
            desc: '创建控件-定义控件信息和控件表单数据',
            version: '',
            type: '(params: { name, $formDesign }) => any',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetFormView',
            desc: '渲染右侧-控件表单',
            version: '',
            type: '(h, renderOpts: { name }, params: { widget, $formDesign }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetEdit',
            desc: '表单控件渲染（设计时），如果不设置，则使用 renderFormDesignWidgetView 渲染',
            version: '',
            type: '(h, renderOpts: { name }, params: { widget, isEditMode, isViewMode, $formDesign, $formView }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetPreview',
            desc: '表单控件渲染（预览时 - 电脑端），如果不设置，则使用 renderFormDesignWidgetView 渲染',
            version: '',
            type: '(h, renderOpts: { name }, params: { widget, isEditMode, isViewMode, $formDesign, $formView }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetMobilePreview',
            desc: '表单控件渲染（预览时 - 手机端），如果不设置，则使用 renderFormDesignWidgetView 渲染',
            version: '',
            type: '(renderOpts: { name }, params: { widget, isEditMode, isViewMode, $formDesign, $formView }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetView',
            desc: '表单控件渲染（默认）',
            version: '',
            type: '(h, renderOpts: { name }, params: { widget, isEditMode, isViewMode, $formDesign, $formView }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetSubtableDefaultView',
            desc: '子表控件渲染（只读模式）',
            version: '4.1.14',
            type: '(h, renderOpts: { name }, params: { row, column, widget, $table, $grid }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetSubtableCellView',
            desc: '子表控件渲染（编辑模式-查看），如果不设置，则使用 renderFormDesignWidgetSubtableDefaultView',
            version: '4.1.14',
            type: '(renderOpts: { name }, params: { row, column, widget, $table, $grid }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'renderFormDesignWidgetSubtableEditView',
            desc: '子表控件渲染（编辑模式-编辑）',
            version: '4.1.14',
            type: '(h, renderOpts: { name }, params: { row, column, widget, $table, $grid }) => JSX | VNode',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createFormDesignWidgetFieldValue',
            desc: '创建控件字段的默认值',
            version: '',
            type: '(params: { widget, $formDesign }) => any',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createFormDesignWidgetFieldRules',
            desc: '创建控件字段的校验规则',
            version: '',
            type: '(params: { widget, $formDesign }) => FormRule[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createFormViewFormConfig',
            desc: '创建渲染电脑端表单',
            version: '',
            type: '(params: { viewRender, formConfig }) => VxeFormProps',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createFormViewMobileFormConfig',
            desc: '创建渲染手机端端表单',
            version: '',
            type: '(params: { viewRender, formConfig }) => VxeFormProps',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'mixin(options)',
        desc: '添加多个，参数跟 add 一致',
        version: '',
        type: '',
        enum: '',
        defVal: 'options: Record<string, option>',
        list: []
      },
      {
        name: 'delete(name)',
        desc: '删除',
        version: '',
        type: '',
        enum: '',
        defVal: 'name',
        list: []
      }
    ]

    return {
      tableData
    }
  }
})
</script>
