<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #nameItem="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #sexItem="{ data }">
        <vxe-input v-model="data.sex"></vxe-input>
      </template>

      <template #ageItem="{ data }">
        <vxe-input v-model="data.age"></vxe-input>
      </template>

      <template #actionItem>
        <vxe-button status="primary" @click="searchEvent">搜索</vxe-button>
        <vxe-button @click="resetEvent">重置</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps, VxeGridPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

const defaultData = {
  id: '',
  name: '',
  role: '',
  sex: '',
  num: '',
  address: ''
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { formConfig: VxeGridPropTypes.FormConfig } = {
      showOverflow: true,
      border: true,
      height: 500,
      formConfig: {
        data: XEUtils.clone(defaultData, true),
        items: [
          { field: 'name', title: '名称', span: 8, itemRender: {}, slots: { default: 'nameItem' } },
          { field: 'sex', title: '性别', span: 8, itemRender: { }, slots: { default: 'sexItem' } },
          { field: 'age', title: '年龄', span: 8, itemRender: {}, slots: { default: 'ageItem' } },
          { span: 24, align: 'center', itemRender: {}, slots: { default: 'actionItem' } }
        ]
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'num', title: 'Num' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
        { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
        { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
        { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
        { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
        { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
        { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
        { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    async searchEvent () {
      console.log('search grid form', this.gridOptions.formConfig.data)
    },
    resetEvent  () {
      this.gridOptions.formConfig.data = XEUtils.clone(defaultData, true)
      console.log('reset grid form')
    }
  }
})
</script>
