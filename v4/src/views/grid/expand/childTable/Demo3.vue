<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #expand_content="{ row }">
        <div class="expand-wrapper">
          <vxe-grid v-bind="childGridOptions" :data="row.childList"></vxe-grid>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  childList?: RowVO[]
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 500,
  rowConfig: {
    keyField: 'id'
  },
  columns: [
    { type: 'seq', width: 70, fixed: 'left' },
    { type: 'expand', width: 60, fixed: 'left', slots: { content: 'expand_content' } },
    { field: 'name', title: 'Name', minWidth: 400 },
    { field: 'sex', title: 'Sex', minWidth: 250 },
    { field: 'age', title: 'Age', minWidth: 300 },
    { field: 'attr1', title: 'Attr1', minWidth: 300 },
    { field: 'attr2', title: 'Attr2', minWidth: 600 },
    { field: 'attr3', title: 'Attr3', minWidth: 400 },
    { field: 'address', title: 'Address', width: 200, fixed: 'right' }
  ],
  data: [
    {
      id: 10001,
      name: 'Test1',
      role: 'Develop',
      sex: 'Man',
      age: 28,
      address: 'test abc',
      childList: [
        { id: 10011, name: 'Test112', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10012, name: 'Test134 134134134134134134134134', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
      ]
    },
    {
      id: 10002,
      name: 'Test2',
      role: 'Test',
      sex: 'Women',
      age: 22,
      address: 'Guangzhou',
      childList: [
        { id: 10021, name: 'Test233 233233233233233', role: 'Designer', sex: 'Man', age: 34, address: 'test 234324' }
      ]
    },
    {
      id: 10003,
      name: 'Test3',
      role: 'PM',
      sex: 'Man',
      age: 32,
      address: 'Shanghai',
      childList: [
        { id: 10031, name: 'Test366 366 366 366366366366', role: 'Test', sex: 'Man', age: 76, address: 'test rtyty' },
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou' },
        { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou' },
        { id: 10034, name: 'Test3213', role: 'Test', sex: 'Man', age: 35, address: 'Guangzhou' },
        { id: 10035, name: 'Test3214', role: 'Develop', sex: 'Women', age: 49, address: 'Guangzhou' },
        { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou' }
      ]
    },
    {
      id: 10004,
      name: 'Test4',
      role: 'Designer',
      sex: 'Women',
      age: 24,
      address: 'Shanghai',
      childList: [
        { id: 10041, name: 'Test456456 456456456456456456', role: 'Designer', sex: 'Man', age: 19, address: 'test 3444444' },
        { id: 10042, name: 'Test457', role: 'Test', sex: 'Women', age: 29, address: 'rtyty sdfsdf' }
      ]
    },
    {
      id: 10005,
      name: 'Test5',
      role: 'PM',
      sex: 'Man',
      age: 62,
      address: 'Guangzhou',
      childList: [
        { id: 10031, name: 'Test366 366 366 366366366366', role: 'Test', sex: 'Man', age: 76, address: 'test rtyty' },
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou' },
        { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou' },
        { id: 10034, name: 'Test3213', role: 'Test', sex: 'Man', age: 35, address: 'Guangzhou' },
        { id: 10035, name: 'Test3214', role: 'Develop', sex: 'Women', age: 49, address: 'Guangzhou' },
        { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou' },
        { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou' }
      ]
    },
    {
      id: 10005,
      name: 'Test5',
      role: 'PM',
      sex: 'Man',
      age: 62,
      address: 'Guangzhou',
      childList: [
        { id: 10031, name: 'Test366 366 366 366366366366', role: 'Test', sex: 'Man', age: 76, address: 'test rtyty' },
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou' },
        { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou' },
        { id: 10034, name: 'Test3213', role: 'Test', sex: 'Man', age: 35, address: 'Guangzhou' },
        { id: 10035, name: 'Test3214', role: 'Develop', sex: 'Women', age: 49, address: 'Guangzhou' },
        { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou' },
        { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou' }
      ]
    },
    {
      id: 10006,
      name: 'Test6',
      role: 'PM',
      sex: 'Man',
      age: 43,
      address: 'Guangzhou',
      childList: [
        { id: 10031, name: 'Test366 366 366 366366366366', role: 'Test', sex: 'Man', age: 76, address: 'test rtyty' },
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou' },
        { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou' },
        { id: 10034, name: 'Test3213', role: 'Test', sex: 'Man', age: 35, address: 'Guangzhou' },
        { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou' },
        { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou' }
      ]
    },
    {
      id: 10007,
      name: 'Test7',
      role: 'PM',
      sex: 'Man',
      age: 48,
      address: 'Guangzhou',
      childList: [
        { id: 10031, name: 'Test366 366 366 366366366366', role: 'Test', sex: 'Man', age: 76, address: 'test rtyty' },
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou' },
        { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou' },
        { id: 10034, name: 'Test3213', role: 'Test', sex: 'Man', age: 35, address: 'Guangzhou' },
        { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou' },
        { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou' }
      ]
    },
    {
      id: 10008,
      name: 'Test8',
      role: 'PM',
      sex: 'Man',
      age: 44,
      address: 'Guangzhou',
      childList: [
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou' },
        { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou' },
        { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou' },
        { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou' }
      ]
    },
    {
      id: 10009,
      name: 'Test9',
      role: 'PM',
      sex: 'Man',
      age: 44,
      address: 'Guangzhou',
      childList: [
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10033, name: 'Test367', role: 'Develop', sex: 'Women', age: 28, address: 'Guangzhou' },
        { id: 10036, name: 'Test3216', role: 'Test', sex: 'Man', age: 58, address: 'Guangzhou' },
        { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou' }
      ]
    },
    {
      id: 10010,
      name: 'Test10',
      role: 'PM',
      sex: 'Man',
      age: 44,
      address: 'Guangzhou',
      childList: [
        { id: 10032, name: 'Test345', role: 'Develop', sex: 'Women', age: 56, address: 'Guangzhou' },
        { id: 10032, name: 'Test361 361 361361361361361361361361361361361361', role: 'Test', sex: 'Women', age: 21, address: 'Guangzhou' },
        { id: 10037, name: 'Test3217', role: 'Test', sex: 'Man', age: 49, address: 'Guangzhou' }
      ]
    }
  ]
})

const childGridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 200,
  columns: [
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ]
})
</script>

<style lang="scss" scoped>
.expand-wrapper {
  padding: 16px;
}
</style>
