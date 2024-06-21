<template>
  <div>
    <vxe-table
      :row-config="{useKey: true}"
      :column-config="{useKey: true}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="userInfo.name" title="Name"></vxe-column>
      <vxe-column field="other[0].sex" title="Sex"></vxe-column>
      <vxe-column field="userInfo.age" title="Age"></vxe-column>
      <vxe-column field="other[1].more.content" title="Html" type="html" show-overflow></vxe-column>
      <vxe-column field="role" title="Role" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

const tableData = ref<RowVO[]>([
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
])
</script>
