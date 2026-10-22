<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增</vxe-button>
    <vxe-button status="success" @click="validEvent">校验变动数据</vxe-button>
    <vxe-button status="success" @click="fullValidEvent">校验全量数据</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #name_default="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>

      <template #sex_default="{ row }">
        <vxe-select v-model="row.sex" :options="sexList"></vxe-select>
      </template>

      <template #age_default="{ row }">
        <vxe-input v-model="row.age"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

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
    const sexList = [
      { label: '男', value: 'Man' },
      { label: '女', value: 'Women' }
    ]

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'manual',
        mode: 'row',
        showStatus: true
      },
      validConfig: {
        msgMode: 'full'
      },
      editRules: {
        name: [
          { required: true, message: '必须填写' }
        ],
        sex: [
          { required: true, message: '必须填写' }
        ]
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' }, slots: { default: 'name_default' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeSelect', options: sexList }, slots: { default: 'sex_default' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput' }, slots: { default: 'age_default' } }
      ],
      data: []
    }

    return {
      gridOptions,
      sexList
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      // 模拟后端接口
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.data = [
          { id: 10001, name: '', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: '', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ]
        this.gridOptions.loading = false
      }, 200)
    },
    async addEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (!$grid) {
        return
      }
      const record = {}
      await $grid.insert(record)
    },
    async validEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (!$grid) {
        return
      }
      const errMap = await $grid.fullValidate()
      if (errMap) {
        VxeUI.modal.message({
          status: 'error',
          content: '校验不通过！'
        })
        return
      }
      const updateRecords = $grid.getUpdateRecords()
      if (updateRecords.length > 0) {
        console.log('保存数据', updateRecords)
        this.loadList()
        VxeUI.modal.message({
          content: '保存成功',
          status: 'success'
        })
      } else {
        VxeUI.modal.message({
          content: '数据未改动',
          status: 'warning'
        })
      }
    },
    async fullValidEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (!$grid) {
        return
      }
      const errMap = await $grid.fullValidate(true)
      if (errMap) {
        VxeUI.modal.message({
          status: 'error',
          content: '校验不通过！'
        })
        return
      }
      const updateRecords = $grid.getUpdateRecords()
      if (updateRecords.length > 0) {
        console.log('保存数据', updateRecords)
        this.loadList()
        VxeUI.modal.message({
          content: '保存成功',
          status: 'success'
        })
      } else {
        VxeUI.modal.message({
          content: '数据未改动',
          status: 'warning'
        })
      }
    }
  }
})
</script>
