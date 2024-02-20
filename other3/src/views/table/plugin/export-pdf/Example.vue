<template>
  <div>
    <CodeLight path="table/plugin/export-pdf/Demo1">
      <template #tip>
        <div>导出 pdf 格式，查看 <a class="link" href="https://github.com/x-extends/vxe-table-plugin-export-pdf/tree/v2" target="_blank">vxe-table-plugin-export-pdf</a> 插件的 API<br></div>
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
    content: 'npm install vxe-table@legacy vxe-table-plugin-export-pdf@legacy jspdf'
  },
  {
    title: '使用',
    language: 'javascript',
    content: `
    // ...
    import VXETable from 'vxe-table'
    import VXETablePluginExportPDF from 'vxe-table-plugin-export-pdf'
    import { jsPDF } from 'jspdf'
    // ...

    // 方式1：NPM 安装，注入 jsPDF 对象
    VXETable.use(VXETablePluginExportPDF, {
      jsPDF,
    //  fontName: 'SourceHanSans-Normal',
    //   fonts: [
    //     {
    //       // Font name
    //       fontName: 'SourceHanSans-Normal',
    //       // Font library url
    //       fontUrl: 'https://cdn.jsdelivr.net/npm/vxe-table-plugin-export-pdf/fonts/source-han-sans-normal.js'
    //     }
    //   ]
    })

    // 方式2：CDN 安装，只要确保 window.jsPDF 存在即可
    VXETable.use(VXETablePluginExportPDF, {
    //   fontName: 'SourceHanSans-Normal',
    //   fonts: [
    //     {
    //       // Font name
    //       fontName: 'SourceHanSans-Normal',
    //       // Font library url
    //       fontUrl: 'https://cdn.jsdelivr.net/npm/vxe-table-plugin-export-pdf/fonts/source-han-sans-normal.js'
    //     }
    //   ]
    // })
    `
  }
])
</script>
