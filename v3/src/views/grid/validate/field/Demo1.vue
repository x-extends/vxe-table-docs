<template>
  <div>
    <div>
      <vxe-button @click="validEvent">校验变动数据</vxe-button>
      <vxe-button @click="fullValidEvent">校验全量数据</vxe-button>
    </div>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  startDate: string
  endDate: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      height: 300,
      editConfig: {
        trigger: 'click',
        mode: 'row',
        showStatus: true
      },
      editRules: {
        _startAndEnd: [
          { to: 'startDate', required: true, message: '请选择开始时间' },
          { to: 'endDate', required: true, message: '请选择结束时间' }
        ]
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: '_startAndEnd', title: '多字段校验', editRender: { name: 'VxeDateRangePicker', startField: 'startDate', endField: 'endDate' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
        { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } }
      ],
      data: [
        { id: 10001, name: 'Test1', startDate: '', endDate: '', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: '', startDate: '2026-03-01', endDate: '2026-04-01', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', startDate: '', endDate: '', sex: '', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', startDate: '2026-01-01', endDate: '2026-01-10', sex: '', age: 23, address: 'test abc' },
        { id: 10005, name: '', startDate: '2026-08-14', endDate: '2026-08-26', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', startDate: '2026-10-10', endDate: '026-12-10', sex: '1', age: 21, address: 'test abc' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    async validEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const errMap = await $grid.validate()
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    },
    async fullValidEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const errMap = await $grid.validate(true)
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    }
  }
})
</script>
