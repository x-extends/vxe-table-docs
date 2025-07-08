<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="nameEditRender"></vxe-column>
      <vxe-column field="age" title="数字" width="200" :edit-render="{ name: 'input', attrs: { type: 'number' } }"></vxe-column>
      <vxe-column field="date" title="日期" width="200" :edit-render="{ name: 'input', attrs: { type: 'date' } }"></vxe-column>
      <vxe-column field="month" title="月份" width="200" :edit-render="{ name: 'input', attrs: { type: 'month' } }"></vxe-column>
      <vxe-column field="week" title="周" width="200" :edit-render="{ name: 'input', attrs: { type: 'week' } }"></vxe-column>
      <vxe-column field="time" title="时间" width="200" :edit-render="{ name: 'input', attrs: { type: 'time' } }"></vxe-column>
      <vxe-column field="color" title="颜色" width="200" :edit-render="{ name: 'input', attrs: { type: 'color' } }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
  time: string
  month: string
  week: string
  color: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, date: '', time: '', month: '', week: '', color: '', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, date: '', time: '', month: '', week: '', color: '', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, date: '2024-06-06', time: '10:30', month: '2024-06', week: '', color: '#571414', address: 'Shanghai' }
    ]

    const nameEditRender: VxeColumnPropTypes.EditRender<RowVO> = {
      name: 'input',
      events: {
        input (cellParams, event: InputEvent) {
          const { row, column } = cellParams
          const inputEl = event.currentTarget as HTMLInputElement
          console.log('input', row, column.field, 'value=', inputEl.value)
        }
      }
    }

    return {
      tableData,
      nameEditRender
    }
  }
})
</script>
