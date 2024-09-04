<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  userInfo: {
    name: string
    age: number
  }
  other: {
    sex?: string
    more?: {
      content: string
    }
  }[]
  role: string
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
    { field: 'userInfo.name', title: 'Name' },
    { field: 'other[0].sex', title: 'Sex' },
    { field: 'userInfo.age', title: 'Age' },
    { field: 'other[1].more.content', title: 'Html', type: 'html', showOverflow: true },
    { field: 'role', title: 'Role', showOverflow: true }
  ],
  data: [
    {
      userInfo: { name: 'Test1', age: 22 },
      other: [
        { sex: '女' },
        { more: { content: '<div><span style="color: red">我是 Htmp 片段</span></div>' } }
      ],
      role: '设计师'
    },
    {
      userInfo: { name: 'Test2', age: 28 },
      other: [
        { sex: '男' },
        { more: { content: '<img height="40" src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">' } }
      ],
      role: '后端'
    },
    {
      userInfo: { name: 'Test3', age: 20 },
      other: [
        { sex: '女' },
        { more: { content: '<img height="40" src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">' } }
      ],
      role: '程序员鼓励师'
    },
    {
      userInfo: { name: 'Test4', age: 26 },
      other: [
        { sex: '男' },
        { more: { content: '<a href="https://github.com/x-extends/vxe-table">我是链接</a>' } }
      ],
      role: '前端'
    }
  ]
})
</script>
