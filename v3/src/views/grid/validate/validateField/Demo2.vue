<template>
  <div>
    <vxe-button status="primary" @click="batchValidField('role')">校验一整列 role</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="validField(row)">校验 role</vxe-button>
        <vxe-button mode="text" status="primary" @click="validMultiFiled(row)">校验 name,role</vxe-button>
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
      height: 300,
      editConfig: {
        trigger: 'click',
        mode: 'cell',
        showStatus: true
      },
      validConfig: {
        msgMode: 'full'
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
        { title: '操作', width: 260, slots: { default: 'action' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: '', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: '', role: '', sex: '', age: 32, address: 'Shanghai' },
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
    async validField (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const errMap = await $grid.fullValidateField(row, 'role')
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    },
    async validMultiFiled (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const errMap = await $grid.fullValidateField(row, ['name', 'role'])
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    },
    async batchValidField (field: string) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const data = $grid.getFullData()
        const errMap = await $grid.fullValidateField(data, field)
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
