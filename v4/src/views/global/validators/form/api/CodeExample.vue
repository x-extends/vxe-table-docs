<template>
  <div>
    <vxe-tip status="primary" title="全局校验">将表单项的校验函数注册成全局可复用，对于实现低代码/零代码平台时非常有用，可以实现完全配置化。</vxe-tip>
    <vxe-tip status="success">
      <div>调用方式： VxeUI.validators.add(code, options)</div>
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
        name: 'formItemValidatorMethod',
        desc: '自定义表单项校验方法',
        version: '',
        type: '(params: { itemValue, data, field, rule, rules, $form }) => void | Error | Promise<any>',
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
