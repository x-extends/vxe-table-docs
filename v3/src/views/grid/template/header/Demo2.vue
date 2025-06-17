<template>
  <div>
    <vxe-grid class="grid-jsx-header" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      columns: [],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions,
      headerSex: ''
    }
  },
  created () {
    this.gridOptions.columns = [
      { type: 'seq', width: 70 },
      {
        field: 'name',
        title: 'Name',
        width: 200,
        slots: {
          header: ({ column }) => {
            return <div class="first-col">
                <div class="first-col-top">名称{column.field}</div>
                <div class="first-col-bottom">序号</div>
              </div>
          }
        }
      },
      {
        title: 'Group1',
        children: [
          {
            field: 'sex',
            title: 'Sex',
            slots: {
              header: () => {
                return <vxe-input v-model={this.headerSex}></vxe-input>
              }
            }
          },
          { field: 'num', title: 'Number' },
          { field: 'age', title: 'Age' }
        ],
        slots: {
          header ({ column }) {
            return <span style="color: red;">个性化列头{column.field}</span>
          }
        }
      },
      { field: 'address', title: 'Address' }
    ]
  }
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
}
</style>
