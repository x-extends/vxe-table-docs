<template>
  <div>
    <vxe-grid class="grid-jsx-header" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 70 },
    {
      field: 'name',
      title: 'Name',
      slots: {
        header () {
          return <div class="first-col">
          <div class="first-col-top">名称</div>
          <div class="first-col-bottom">序号</div>
        </div>
        }
      }
    },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})
</script>

<style lang="scss" scoped>
::v-deep(.grid-jsx-header) {
  .first-col {
    position: relative;
    height: 20px;
    &:before {
      content: "";
      position: absolute;
      left: -15px;
      top: 10px;
      width: 170px;
      height: 1px;
      transform: rotate(18deg);
      background-color: #e8eaec;
    }
    .first-col-top {
      position: absolute;
      right: 4px;
      top: -10px;
    }
    .first-col-bottom {
      position: absolute;
      left: 4px;
      bottom: -10px;
    }
  }
}
</style>
