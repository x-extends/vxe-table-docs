<template>
  <div>
    <CodeLight path="table/plugin/renderer/Demo1">
      <template #tip>
        <div>提供一些常用的配置式渲染，查看 <a class="link" href="https://github.com/x-extends/vxe-table-plugin-renderer" target="_blank">vxe-table-plugin-renderer</a> 插件的 API<br></div>
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
    content: 'npm install vxe-table@next vxe-table-plugin-renderer@next'
  },
  {
    title: '使用',
    language: 'javascript',
    content: `
    // ...
    import VXETable from 'vxe-table'
    import VXETablePluginRenderer from 'vxe-table-plugin-renderer'
    import 'vxe-table-plugin-renderer/dist/style.css'
    // ...

    VXETable.use(VXETablePluginRenderer)
    `
  }
])
</script>
