<template>
  <div>
    <vxe-table border :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" width="200">
        <template #header>
          <div class="first-col">
            <div class="first-col-top">名称</div>
            <div class="first-col-bottom">序号</div>
          </div>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex">
        <template #header>
          <vxe-input v-model="headerSex"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Number">
        <template #header>
          <span style="color: red;">个性化列头</span>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
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
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
    ]

    return {
      tableData,
      headerSex: ''
    }
  }
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
