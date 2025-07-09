<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <template v-if="hasEditStatus(row)">
          <vxe-button v-if="hasEditStatus(row)" mode="text" status="success" icon="vxe-icon-save" @click="saveRow(row)">保存</vxe-button>
          <vxe-button mode="text" @click="cancelRow(row)">取消</vxe-button>
        </template>
        <template v-else>
          <vxe-button mode="text" status="primary" icon="vxe-icon-edit" @click="editRow(row)">编辑</vxe-button>
        </template>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

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
      keepSource: true,
      height: 500,
      editConfig: {
        trigger: 'manual',
        mode: 'row',
        showStatus: true
      },
      editRules: {
        name: [
          { required: true, message: '必须填写' }
        ],
        role: [
          { required: true, message: '必须填写' }
        ]
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'role', title: 'Role', editRender: { name: 'VxeInput' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
        { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } },
        { field: 'action', title: '操作', width: 140, slots: { default: 'action' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
        { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    hasEditStatus (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (!$grid) {
        return false
      }
      // 判断编辑状态
      return $grid.isEditByRow(row)
    },
    async editRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (!$grid) {
        return
      }
      const updateRecords = $grid.getUpdateRecords()
      const updateRow = updateRecords[0]
      // 判断是否存在未保存的数据
      if (updateRow) {
        const type = await VxeUI.modal.confirm({
          title: '温馨提示',
          content: '数据未保存，是否需要保存？',
          cancelButtonText: '放弃更改，不保存',
          confirmButtonText: '保存'
        })
        if (type === 'confirm') {
          await this.saveRow(updateRow)
          await $grid.setEditRow(row, true)
        } else if (type === 'cancel') {
          this.cancelRow(updateRow)
          await $grid.setEditRow(row, true)
        }
      } else {
        await $grid.setEditRow(row, true)
      }
    },
    async saveRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (!$grid) {
        return
      }
      if (!$grid.isUpdateByRow(row)) {
        VxeUI.modal.message({
          content: '数据未改动',
          status: 'warning'
        })
        return
      }
      const errMap = await $grid.validate(row)
      if (!errMap) {
        const newRecord = {}
        // 取消编辑状态
        await $grid.clearEdit(row)
        // 更新行数据并重置为初始状态
        await $grid.reloadRow(row, newRecord)
        VxeUI.modal.message({
          content: '保存成功',
          status: 'success'
        })
      }
    },
    async cancelRow (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (!$grid) {
        return
      }
      // 取消编辑状态
      await $grid.clearEdit(row)
      // 还原数据
      await $grid.revertData(row)
    }
  }
})
</script>
