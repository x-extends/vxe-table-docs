<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #form>
        <vxe-form ref="formRef" v-bind="formOptions">
          <template #action>
            <vxe-button status="primary" @click="searchEvent">搜索</vxe-button>
            <vxe-button @click="resetEvent">重置</vxe-button>
          </template>
        </vxe-form>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'
import { VxeFormProps, VxeFormInstance } from 'vxe-pc-ui'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

interface FormDataVO {
  name: string
  role: string
  sex: string
  num: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showOverflow: true,
      border: true,
      height: 500,
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

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 'auto',
      data: {
        name: '',
        role: '',
        sex: '',
        num: '',
        address: ''
      },
      items: [
        { field: 'name', title: '名称', itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', itemRender: { name: 'VxeInput' } },
        { slots: { default: 'action' } }
      ]
    }

    return {
      gridOptions,
      formOptions
    }
  },
  methods: {
    async searchEvent () {
      console.log('search form', this.formOptions.data)
    },
    resetEvent () {
      const $form = this.$refs.formRef as VxeFormInstance
      if ($form) {
        $form.reset()
      }
      console.log('reset form')
    }
  }
})
</script>
