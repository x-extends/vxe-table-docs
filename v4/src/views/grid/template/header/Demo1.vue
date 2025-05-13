<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #header_name>
        <div class="first-col">
          <div class="first-col-top">名称</div>
          <div class="first-col-bottom">序号</div>
        </div>
      </template>
      <template #header_sex>
        <vxe-input v-model="headerSex"></vxe-input>
      </template>
      <template #header_group1>
        <span style="color: red;">个性化列头</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const headerSex = ref('')

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', width: 200, slots: { header: 'header_name' } },
    {
      title: 'Group1',
      field: 'group1',
      children: [
        { field: 'sex', title: 'Sex', slots: { header: 'header_sex' } },
        { field: 'num', title: 'Number' },
        { field: 'age', title: 'Age' }
      ],
      slots: { header: 'header_group1' }
    },
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
.first-col {
  position: relative;
  height: 20px;
  &:before {
    content: "";
    position: absolute;
    left: -22px;
    top: 9px;
    width: 222px;
    height: 1px;
    transform: rotate(25deg);
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
</style>
