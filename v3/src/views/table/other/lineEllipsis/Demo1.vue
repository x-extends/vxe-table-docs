<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="500"
      :column-config="{resizable: true}"
      :row-config="{height: 80}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex" width="100"></vxe-column>
      <vxe-column field="address" title="Address" width="400">
        <template #default="{ row }">
          <vxe-text-ellipsis line-clamp="3" :content="row.address"></vxe-text-ellipsis>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略，这将非常有用，如果没有超出，则显示全部文本，如超出指定行数之后，文字会被会自动截断，并且会出现省略，后面文字会被隐藏将不会被显示出来。' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: '这是一个多行的文本溢出省略组件' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略，这将非常有用，如果没有超出，则显示全部文本，如超出指定行数之后，文字会被会自动截断，并且会出现省略，后面文字会被隐藏将不会被显示出来。' },
      { id: 10005, name: 'Test5', role: 'Designer', sex: 'Women', age: 42, address: '这是一个多行的文本溢出省略组件' },
      { id: 10006, name: 'Test6', role: 'PM', sex: 'Women', age: 36, address: '这是一个多行的文本溢出省略组件' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Women', age: 39, address: '这是一个多行的文本溢出省略组件，用于实现多行文本溢出省略，这将非常有用，如果没有超出，则显示全部文本，如超出指定行数之后，文字会被会自动截断，并且会出现省略，后面文字会被隐藏将不会被显示出来。' },
      { id: 10008, name: 'Test8', role: 'Designer', sex: 'Women', age: 56, address: '这是一个多行的文本溢出省略组件' }
    ]

    return {
      tableData
    }
  }
})
</script>
