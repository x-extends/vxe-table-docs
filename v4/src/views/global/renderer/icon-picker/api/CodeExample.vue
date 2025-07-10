<template>
  <div>
    <vxe-tip status="primary" title="全局渲染器">
      通过渲染器你可以实现表单项渲染的复用，轻松就可以实现低代码，甚至零代码配置化工具。可以根据不同业务实现不一样的渲染器，这个功能将非常实用。
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

<script lang="ts" setup>
import { ref } from 'vue'

const tableData = ref([
  {
    name: 'add(name, option)',
    desc: '添加',
    version: '',
    type: '',
    enum: '',
    defVal: 'name: string, option: any',
    list: [
      {
        name: 'renderIconPickerOptionIcon',
        desc: '渲染选项图标',
        version: '4.7.4',
        type: '(renderOpts, renderParams: { option, $button }) => JSX | VNode',
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
])
</script>
