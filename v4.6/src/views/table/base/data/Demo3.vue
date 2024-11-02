<template>
  <div>
    <vxe-table
      :row-config="{useKey: true, keyField: '0'}"
      :column-config="{useKey: true}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="1" title="Name"></vxe-column>
      <vxe-column field="2" title="Sex"></vxe-column>
      <vxe-column field="3" title="Age"></vxe-column>
      <vxe-column field="4" title="Html" type="html" show-overflow></vxe-column>
      <vxe-column field="5" title="Role" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableData = ref<(string | number)[][]>([
  [101, 'Test4', '男', 26, '<a href="https://github.com/x-extends/vxe-table">我是链接</a>', '前端'],
  [102, 'Test2', '男', 28, '<img height="40" src="https://vxeui.com/resource/img/546.gif">', '后端'],
  [103, 'Test1', '女', 22, '<div><span style="color: red">我是 Htmp 片段</span></div>', '设计师'],
  [104, 'Test3', '女', 20, '<img height="40" src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">', '程序员鼓励师']
])
</script>
