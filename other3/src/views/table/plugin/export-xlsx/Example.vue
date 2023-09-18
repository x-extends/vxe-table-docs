<template>
  <div>
    <CodeLight path="table/plugin/export-xlsx/Demo1">
      <template #tip>
        <div>导入/导出 xlsx 格式，查看 <a class="link" href="https://github.com/x-extends/vxe-table-plugin-export-xlsx/tree/v2" target="_blank">vxe-table-plugin-export-xlsx</a> 插件的 API<br></div>
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
    content: 'npm install vxe-table@legacy vxe-table-plugin-export-xlsx@legacy'
  },
  {
    title: '使用',
    language: 'javascript',
    content: `
    // ...
    import VXETable from 'vxe-table'
    import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
    // ...

    VXETable.use(VXETablePluginExportXLSX)
    `
  }
])
</script>
