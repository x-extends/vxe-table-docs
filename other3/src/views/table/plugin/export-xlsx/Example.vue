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
    content: 'npm install vxe-table@legacy vxe-table-plugin-export-xlsx@legacy exceljs'
  },
  {
    title: '使用',
    language: 'javascript',
    content: `
    // ...
    import VXETable from 'vxe-table'
    import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
    import ExcelJS from 'exceljs'
    // ...

    // 方式1：NPM 安装，注入 ExcelJS 对象
    VXETable.use(VXETablePluginExportXLSX, {
      ExcelJS
    })

    // 方式2：CDN 安装，只要确保 window.ExcelJS 存在即可
    // VXETable.use(VXETablePluginExportXLSX)
    `
  }
])
</script>
