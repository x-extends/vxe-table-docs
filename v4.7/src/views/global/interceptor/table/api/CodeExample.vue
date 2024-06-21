<template>
  <div>
    <vxe-tip status="primary" title="全局拦截器">通过内置事件拦截器可以很容易的处理表格事件行为与第三方组件的兼容性</vxe-tip>
    <vxe-tip status="success">
      <div>调用方式： VxeUI.interceptor.add(code, options)</div>
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
    name: 'add(code, option)',
    desc: '添加',
    type: '',
    enum: '',
    defVal: 'code: string, option: any',
    list: [
      {
        name: 'tableInterceptorMethod',
        desc: '表格 - 拦截器处理方法',
        type: '',
        enum: '',
        defVal: '(params: any) => any',
        list: [
          {
            name: 'event.clearEdit',
            desc: '清除激活单元格之前触发，允许返回 false 阻止默认行为',
            type: 'boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'event.clearFilter',
            desc: '清除筛选面板之前触发，允许返回 false 阻止默认行为',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'event.clearAreas',
            desc: '如果功能被支持，清除单元格区域之前触发，允许返回 false 阻止默认行为',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'event.keydown',
            desc: '键盘按下之前触发，允许返回 false 阻止默认行为',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'event.showMenu',
            desc: '显示右键菜单之前触发，允许返回 false 阻止默认行为',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'event.import',
            desc: '工具栏中导入之前触发，允许返回 false 阻止默认行为',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'event.export',
            desc: '工具栏中导出之前触发，允许返回 false 阻止默认行为',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      }
    ]
  },
  {
    name: 'mixin(opts)',
    desc: '添加多个，参数跟 add 一致',
    version: '',
    type: '',
    enum: '',
    defVal: 'options: Record<string, option>',
    list: []
  },
  {
    name: 'delete(code)',
    desc: '删除',
    type: '',
    enum: '',
    defVal: 'code: string',
    list: []
  }
])
</script>
