<template>
  <div>
    <CodeLight path="table/plugin/menu/Demo1">
      <template #tip>
        <div>提供实用的快捷菜单配置，查看 <a class="link" href="https://github.com/x-extends/vxe-table-plugin-menus/tree/v2" target="_blank">vxe-table-plugin-menus</a> 插件的 API<br></div>
      </template>

      <template #use>
        <CodeList :confs="codeConfs"></CodeList>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const codeConfs = ref([
  {
    title: '安装',
    language: 'shell',
    content: 'npm install vxe-table@3.8.24 vxe-table-plugin-menus@3.3.5'
  },
  {
    title: '使用',
    language: 'javascript',
    content: `
    // ...
    import VXETable from 'vxe-table'
    import VXETablePluginMenus from 'vxe-table-plugin-menus'
    // ...

    VXETable.use(VXETablePluginMenus)
    `
  }
])
</script>
