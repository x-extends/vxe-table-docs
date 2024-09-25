<template>
  <div>
    <vxe-button status="primary" @click="insertEvent">新增</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import { VxeInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  rate: number
  num: number
  address: string
}

const meanNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return (count / list.length).toFixed(2)
}

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count.toFixed(2)
}

export default Vue.extend({
  data () {
    const ageEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {}

    const numEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {}

    const rateEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {}

    const gridOptions: VxeGridProps<RowVO> = {}

    return {
      gridOptions,
      ageEditRender,
      numEditRender,
      rateEditRender
    }
  },
  created () {
    this.ageEditRender = {
      name: 'VxeNumberInput',
      props: {
        type: 'integer',
        min: 1,
        max: 120
      },
      events: {
        change: this.updateFooterEvent
      }
    }

    this.numEditRender = {
      name: 'VxeNumberInput',
      events: {
        change: this.updateFooterEvent
      }
    }

    this.rateEditRender = {
      name: 'VxeNumberInput',
      events: {
        change: this.updateFooterEvent
      }
    }

    this.gridOptions = {
      border: true,
      showOverflow: true,
      showFooter: true,
      height: 400,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 60 },
        {
          title: '统计信息',
          children: [
            { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
            { field: 'age', title: 'Age', editRender: this.ageEditRender },
            { field: 'num', title: 'Num', editRender: this.numEditRender },
            { field: 'rate', title: 'Rate', editRender: this.rateEditRender }
          ]
        }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', age: 10, num: 28, rate: 5, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', age: 34, num: 22, rate: 4, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', age: 56, num: 32, rate: 3, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' },
        { id: 10005, name: 'Test5', role: 'PM', age: 56, num: 32, rate: 4, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' }
      ],
      footerMethod ({ columns, data }) {
        return [
          columns.map((column, columnIndex) => {
            if (columnIndex === 0) {
              return '平均'
            }
            if (['age'].includes(column.field)) {
              return meanNum(data, column.field)
            } else if (['rate', 'num'].includes(column.field)) {
              return meanNum(data, column.field)
            }
            return null
          }),
          columns.map((column, columnIndex) => {
            if (columnIndex === 0) {
              return '和值'
            }
            if (['rate', 'num'].includes(column.field)) {
              return `￥${sumNum(data, column.field)}`
            }
            return null
          })
        ]
      }
    }
  },
  methods: {
    async insertEvent  () {
      const record = {
        name: 'New name'
      }
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const { row: newRow } = await $grid.insert(record)
        $grid.setEditCell(newRow, 'age')
      }
    },
    // 在值发生改变时更新表尾合计
    updateFooterEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.updateFooter()
      }
    }
  }
})
</script>
