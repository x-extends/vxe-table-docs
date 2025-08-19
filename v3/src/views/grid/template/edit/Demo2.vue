<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
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
    const gridOptions: VxeGridProps<RowVO> = {}

    const sexOptions = [
      { label: '男', value: '1' },
      { label: '女', value: '0' }
    ]

    return {
      gridOptions,
      sexOptions
    }
  },
  created () {
    this.gridOptions = {
      border: true,
      showOverflow: true,
      editConfig: {
        mode: 'cell',
        trigger: 'click'
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { field: 'name', title: 'Name' },
        {
          field: 'sex',
          title: 'Sex',
          editRender: {},
          slots:
        {
          edit: ({ row }) => {
            return <vxe-select v-model={row.sex} options={this.sexOptions}></vxe-select>
          },
          default: ({ row }) => {
            return <span>{ this.formatSex(row) }</span>
          }
        }
        },
        {
          field: 'num',
          title: 'Number',
          editRender: {},
          slots: {
            edit: ({ row }) => {
              return <vxe-input v-model={row.num}></vxe-input>
            }
          }
        },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
      ]
    }
  },
  methods: {
    formatSex  (row: RowVO) {
      return row.sex === '1' ? '男' : '女'
    }
  }
})
</script>
