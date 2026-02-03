<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>

      <template #edit_role="{ row, column }">
        <vxe-input v-model="row.role" clearable show-word-count @input="roleInput($event, row, column)"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { }, slots: { edit: 'edit_name' } },
        { field: 'num', title: '数字', editRender: { }, slots: { edit: 'edit_role' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Women', address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    roleInput (eventParams, row, column) {
      console.log('change', row, column.field, eventParams.value)
    }
  }
})
</script>
