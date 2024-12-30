<template>
  <div>
    <div>
      <vxe-button @click="validEvent">校验变动数据</vxe-button>
    </div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #nameEdit="slotParams">
        <vxe-input v-model="slotParams.row.name" @change="changeEditEvent(slotParams)"></vxe-input>
      </template>
      <template #roleRole="slotParams">
        <vxe-input v-model="slotParams.row.role" clearable @change="changeEditEvent(slotParams)"></vxe-input>
      </template>
      <template #sexEdit="slotParams">
        <vxe-select v-model="slotParams.row.sex" :options="sexOptions" clearable @change="changeEditEvent(slotParams)"></vxe-select>
      </template>
      <template #sexDefault="{ row }">
        <span>{{ formatSexLabel(row.sex) }}</span>
      </template>
      <template #ageEdit="slotParams">
        <vxe-input v-model="slotParams.row.age" @change="changeEditEvent(slotParams)"></vxe-input>
      </template>
      <template #dateEdit="slotParams">
        <vxe-date-picker v-model="slotParams.row.date" @change="changeEditEvent(slotParams)"></vxe-date-picker>
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
      height: 400,
      editConfig: {
        trigger: 'click',
        mode: 'row',
        showStatus: true
      },
      editRules: {
        name: [
          { required: true, message: '必须填写' }
        ],
        role: [
          { required: true, message: '必须填写' }
        ],
        sex: [
          { required: true, message: '必须填写' }
        ],
        age: [
          { required: true, message: '必须填写' }
        ],
        date: [
          { required: true, message: '必须填写' }
        ]
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { }, slots: { edit: 'nameEdit' } },
        { field: 'role', title: 'Role', editRender: { }, slots: { edit: 'roleRole' } },
        { field: 'sex', title: 'Sex', editRender: { }, slots: { edit: 'sexEdit', default: 'sexDefault' } },
        { field: 'age', title: 'Age', editRender: { }, slots: { edit: 'ageEdit' } },
        { field: 'date', title: 'Date', editRender: { }, slots: { edit: 'dateEdit' } }
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

    const sexOptions = [
      { label: '女', value: '0' },
      { label: '男', value: '1' }
    ]

    return {
      gridOptions,
      sexOptions
    }
  },
  methods: {
    formatSexLabel (cellValue: string) {
      const item = this.sexOptions.find(item => item.value === cellValue)
      return item ? item.label : cellValue
    },
    changeEditEvent (slotParams: any) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.updateStatus(slotParams)
      }
    },
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
    }
  }
})
</script>
