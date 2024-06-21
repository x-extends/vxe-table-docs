<template>
  <div>
    <h1>{{ $t('app.aside.nav.menus') }}</h1>
    <p class="tip">将右键菜单注册成全局可复用的</p>

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

    <CodeLight path="global/menus/Demo1" :extraImports="['global/menus/demo1.menus']">
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
    defVal: 'code: string, options: { menuMethod }',
    list: [
      {
        name: 'menuMethod',
        desc: '菜单方法',
        type: '',
        enum: '',
        defVal: '({ menu, type, row, rowIndex, column, columnIndex, $event }) => void',
        list: []
      }
    ]
  },
  {
    name: 'mixin(opts)',
    desc: '添加多个',
    type: '',
    enum: '',
    defVal: 'opts: { [code: string]: { menuMethod } }',
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
