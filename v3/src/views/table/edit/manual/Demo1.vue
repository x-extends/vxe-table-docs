<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="400"
      ref="tableRef"
      :loading="loading"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'VxeInput', props: { type: 'integer' }}"></vxe-column>
      <vxe-column title="操作" width="160">
        <template #default="{ row }">
          <template v-if="hasEditStatus(row)">
            <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
            <vxe-button @click="cancelRowEvent()">取消</vxe-button>
          </template>
          <template v-else>
            <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
          </template>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const editConfig: VxeTablePropTypes.EditConfig<RowVO> = {
      trigger: 'manual',
      mode: 'row'
    }

    return {
      tableData,
      editConfig,
      loading: false
    }
  },
  methods: {
    hasEditStatus  (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        return $table.isEditByRow(row)
      }
    },
    editRowEvent (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.setEditRow(row)
      }
    },
    saveRowEvent (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.clearEdit().then(() => {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            VxeUI.modal.message({ content: `保存成功！name=${row.name}`, status: 'success' })
          }, 300)
        })
      }
    },
    cancelRowEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.clearEdit()
      }
    }
  }
})
</script>
