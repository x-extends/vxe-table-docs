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
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number | null
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
        mode: 'row',
        showStatus: true
      },
      editRules: {
        name: [
          { required: true, message: '必须填写' }
        ],
        nickname: [
          { required: true, message: '必须填写' }
        ],
        role: [
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
        { type: 'checkbox', fixed: 'left', width: 60 },
        { type: 'seq', fixed: 'left', width: 70 },
        { field: 'name', title: 'Name', fixed: 'left', width: 180, editRender: { name: 'VxeInput' } },
        {
          title: '基础信息',
          children: [
            { field: 'nickname', title: 'Nickname', minWidth: 260, editRender: { name: 'VxeInput' } },
            { field: 'role', title: 'Role', minWidth: 260, editRender: { name: 'VxeInput' } }
          ]
        },
        { field: 'sex', title: 'Sex', minWidth: 300, editRender: { name: 'VxeInput' } },
        { field: 'attr1', title: 'Attr1', minWidth: 250, editRender: { name: 'VxeInput' } },
        { field: 'attr2', title: 'Attr2', minWidth: 300, editRender: { name: 'VxeInput' } },
        { field: 'address', title: 'Address', minWidth: 500, editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', minWidth: 200, editRender: { name: 'VxeInput' } },
        { field: 'date', title: 'Date', fixed: 'right', width: 160, editRender: { name: 'VxeInput' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: null, address: 'test abc' },
        { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '', age: null, address: 'Shanghai' },
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
