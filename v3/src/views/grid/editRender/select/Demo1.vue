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
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

export default Vue.extend({
  data () {
    const sexEditRender: VxeColumnPropTypes.EditRender = {
      name: 'select',
      options: []
    }

    const typeEditRender: VxeColumnPropTypes.EditRender = {
      name: 'select',
      optionGroups: [
        { label: '', value: '' },
        {
          label: '分类1',
          options: [
            { label: '苹果', value: '1-1' },
            { label: '雪梨', value: '1-2' }
          ]
        },
        {
          label: '分类2',
          options: [
            { label: '草莓', value: '2-1' },
            { label: '猕猴桃', value: '2-2' }
          ]
        }
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
        { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'input' } },
        { field: 'sex', title: '下拉框', width: 200, editRender: sexEditRender },
        { field: 'type', title: '下拉框分组', width: 200, editRender: typeEditRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '', sexList: [], type: '', typeList: [] },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', sexList: [], type: '', typeList: [] }
      ]
    }

    return {
      gridOptions,
      sexEditRender,
      typeEditRender
    }
  },
  created () {
    // 模拟后端接口
    setTimeout(() => {
      this.sexEditRender.options = [
        { label: '', value: '' },
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }, 300)
  }
})
</script>
