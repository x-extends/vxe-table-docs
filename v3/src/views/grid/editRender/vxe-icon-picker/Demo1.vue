<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  icon1: string
  icon2: string
}

export default Vue.extend({
  data () {
    const icon2EditRender: VxeColumnPropTypes.EditRender<RowVO> = {
      name: 'VxeIconPicker',
      options: [
        'home', 'company', 'comment', 'setting', 'send', 'envelope', 'envelope-open', 'bell', 'search', 'print', 'pc', 'goods', 'chart-line', 'edit', 'delete', 'save', 'sunny', 'rmb', 'usd', 'user'
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput', props: { clearable: true } } },
        { field: 'icon1', title: '图标1', width: 100, editRender: { name: 'VxeIconPicker' } },
        { field: 'icon2', title: '图标2', width: 100, editRender: icon2EditRender }
      ],
      data: [
        { id: 10001, name: 'Test1', icon1: '', icon2: 'vxe-icon-home' },
        { id: 10002, name: 'Test2', icon1: 'vxe-icon-home', icon2: '' }
      ]
    }

    return {
      gridOptions,
      icon2EditRender
    }
  }
})
</script>
