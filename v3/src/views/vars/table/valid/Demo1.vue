<template>
  <div>
    <div>
      字体：<vxe-radio-group v-model="validFontSize">
        <vxe-radio-button checked-value="12px" content="12px"></vxe-radio-button>
        <vxe-radio-button checked-value="13px" content="13px"></vxe-radio-button>
        <vxe-radio-button checked-value="14px" content="14px"></vxe-radio-button>
        <vxe-radio-button checked-value="15px" content="15px"></vxe-radio-button>
        <vxe-radio-button checked-value="16px" content="16px"></vxe-radio-button>
      </vxe-radio-group>
      边距：<vxe-radio-group v-model="validPadding">
        <vxe-radio-button checked-value="2px" content="2px"></vxe-radio-button>
        <vxe-radio-button checked-value="4px" content="4px"></vxe-radio-button>
        <vxe-radio-button checked-value="6px" content="6px"></vxe-radio-button>
        <vxe-radio-button checked-value="8px" content="8px"></vxe-radio-button>
        <vxe-radio-button checked-value="10px" content="10px"></vxe-radio-button>
      </vxe-radio-group>
    </div>
    <div>
      <vxe-button status="primary" @click="fullValidEvent">校验</vxe-button>
    </div>
    <vxe-grid
      ref="gridRef"
      v-bind="gridOptions"
      :style="{
        '--vxe-ui-table-validate-error-font-size': validFontSize,
        '--vxe-ui-table-validate-error-padding': validPadding
      }">
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
        { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } }
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

    const validFontSize = '14px'
    const validPadding = '6px'

    return {
      gridOptions,
      validFontSize,
      validPadding
    }
  },
  methods: {
    async fullValidEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const errMap = await $grid.fullValidate(true)
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
