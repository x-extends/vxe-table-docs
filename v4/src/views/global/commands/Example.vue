<template>
  <div>
    <h1>{{ $t('app.aside.nav.commands') }}</h1>
    <p class="tip">将工具栏按钮或数据代理中常用的指令注册成全局可复用</p>

    <vxe-table
      :tree-config="{children: 'list'}"
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{resizable: true, isCurrent: true}"
      :data="tableData">
      <vxe-column field="name" title="app.api.title.prop" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" title="app.api.title.desc" min-width="200"></vxe-column>
      <vxe-column field="type" title="app.api.title.type" min-width="140"></vxe-column>
      <vxe-column field="enum" title="app.api.title.enum" min-width="150"></vxe-column>
      <vxe-column field="defVal" title="app.api.title.defVal" min-width="160"></vxe-column>
    </vxe-table>

    <CodeLight path="global/commands/Demo1" :extraImports="['global/commands/demo1.commands']">
      <template #tip>
        <div>示例</div>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableData = ref([
  {
    name: 'add(code, options)',
    desc: '添加一个',
    type: '',
    enum: '',
    defVal: 'code: string, options: { commandMethod }',
    list: [
      {
        name: 'commandMethod',
        desc: '指令方法',
        type: '',
        enum: '',
        defVal: '({ code, button, $table }) => void',
        list: []
      }
    ]
  },
  {
    name: 'mixin(opts)',
    desc: '添加多个',
    type: '',
    enum: '',
    defVal: 'opts: { [code: string]: { commandMethod } }',
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
