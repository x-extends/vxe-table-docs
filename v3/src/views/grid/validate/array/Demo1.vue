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
import { VxeUI, VxeGridProps, VxeGridInstance, VxeColumnPropTypes, VxeSelectProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  roleList: string[]
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const roleListEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps> = {
      name: 'VxeSelect',
      props: {
        multiple: true
      },
      options: [
        { label: 'Develop', value: 'develop' },
        { label: 'Test', value: 'test' },
        { label: 'PM', value: 'pm' }
      ]
    }

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
        roleList: [
          { required: true, type: 'array', message: '至少选一个' }
        ]
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'roleList', title: 'Role', editRender: roleListEditRender },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
        { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } }
      ],
      data: [
        { id: 10001, name: 'Test1', roleList: ['develop'], sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: '', roleList: ['develop', 'test'], sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', roleList: ['pm'], sex: '', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', roleList: ['develop'], sex: '', age: 23, address: 'test abc' },
        { id: 10005, name: '', roleList: [], sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', roleList: ['pm'], sex: '1', age: 21, address: 'test abc' }
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
