<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" @cell-click="cellClickEvent">
      <template #name_edit="{ row, column }">
        <vxe-input v-model="row[column.field]" :disabled="disabledName"></vxe-input>
      </template>

      <template #sex_edit="{ row, column }">
        <vxe-input v-model="row[column.field]" :disabled="disabledName"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      loading: false,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' }, slots: { edit: 'name_edit' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' }, slots: { edit: 'sex_edit' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    const disabledName = false

    return {
      gridOptions,
      disabledName
    }
  },
  methods: {
    cellClickEvent ({ row, column }) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const editInfo = $grid.getEditCell()
        // 如果是已经是编辑状态
        if (editInfo && editInfo.row === row && editInfo.column.field === column.field) {
          return
        }
      }
      // 模拟异步判断
      this.gridOptions.loading = true
      this.disabledName = true
      setTimeout(() => {
        this.disabledName = row.name === 'Test2'
        this.gridOptions.loading = false
      }, 300)
    }
  }
})
</script>
