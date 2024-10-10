<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import type { VxeTreeSelectProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  region: string
  regionList: string[]
}

export default Vue.extend({
  data () {
    const regionEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeTreeSelectProps> = {
      name: 'VxeTreeSelect',
      options: [
        {
          label: '广东省',
          children: [
            { label: '深圳市', value: '1-1' },
            { label: '广州市', value: '1-2' }
          ]
        },
        {
          label: '北京',
          children: [
            { label: '东城区', value: '2-1' },
            { label: '西城区', value: '2-2' }
          ]
        }
      ]
    }

    const regionListEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeTreeSelectProps> = {
      name: 'VxeTreeSelect',
      props: {
        multiple: true
      },
      options: [
        {
          label: '广东省',
          children: [
            { label: '深圳市', value: '1-1' },
            { label: '广州市', value: '1-2' }
          ]
        },
        {
          label: '北京',
          children: [
            { label: '东城区', value: '2-1' },
            { label: '西城区', value: '2-2' }
          ]
        }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200, editRender: { name: 'VxeInput' } },
        { field: 'region', title: '下拉树单选', width: 200, editRender: regionEditRender },
        { field: 'regionList', title: '下拉树多选', width: 200, editRender: regionListEditRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', region: '', regionList: [] },
        { id: 10002, name: 'Test2', role: 'Test', region: '2-1', regionList: ['1-2', '2-1'] },
        { id: 10003, name: 'Test3', role: 'PM', region: '', regionList: [] }
      ]
    }

    return {
      gridOptions,
      regionEditRender,
      regionListEditRender
    }
  }
})
</script>
