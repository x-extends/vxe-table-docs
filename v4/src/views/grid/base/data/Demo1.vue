<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
  age: number
  content: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  rowConfig: {
    useKey: true
  },
  columnConfig: {
    useKey: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'content', title: 'Html', type: 'html', showOverflow: true },
    { field: 'role', title: 'Role', showOverflow: true }
  ],
  data: [
    { name: 'Test2', age: 28, sex: '男', role: '后端', content: '<img height="40" src="https://vxeui.com/resource/img/546.gif">' },
    { name: 'Test4', age: 26, sex: '男', role: '前端', content: '<a href="https://github.com/x-extends/vxe-table">我是链接</a>' },
    { name: 'Test3', age: 20, sex: '女', role: '程序员鼓励师', content: '<img height="40" src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">' },
    { name: 'Test1', age: 22, sex: '女', role: '设计师', content: '<div><span style="color: red">我是 Htmp 片段</span></div>' }
  ]
})
</script>
