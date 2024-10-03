<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import type { VxeTextEllipsisProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const addressCellRender: VxeColumnPropTypes.CellRender<RowVO, VxeTextEllipsisProps> = {
      name: 'VxeTextEllipsis',
      props: {
        lineClamp: 3
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 500,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex', width: 100 },
        { field: 'address', title: '多行文本溢出省略', width: 400, cellRender: addressCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略，这将非常有用，如果没有超出，则显示全部文本，如超出指定行数之后，文字会被会自动截断，并且会出现省略，后面文字会被隐藏将不会被显示出来。' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: '这是一个多行的文本溢出省略组件' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略，这将非常有用，如果没有超出，则显示全部文本，如超出指定行数之后，文字会被会自动截断，并且会出现省略，后面文字会被隐藏将不会被显示出来。' },
        { id: 10005, name: 'Test5', role: 'Designer', sex: 'Women', age: 42, address: '这是一个多行的文本溢出省略组件' },
        { id: 10006, name: 'Test6', role: 'PM', sex: 'Women', age: 36, address: '这是一个多行的文本溢出省略组件' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Women', age: 39, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略，这将非常有用，如果没有超出，则显示全部文本，如超出指定行数之后，文字会被会自动截断，并且会出现省略，后面文字会被隐藏将不会被显示出来。' },
        { id: 10008, name: 'Test8', role: 'Designer', sex: 'Women', age: 56, address: '这是一个多行的文本溢出省略组件' }
      ]
    }

    return {
      gridOptions,
      addressCellRender
    }
  }
})
</script>
