<template>
  <div>
    <vxe-table
      border
      height="500"
      :tree-config="treeConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="300" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type" :filters="typeOptions"></vxe-column>
      <vxe-column field="date" title="Date" :filters="dateOptions"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

export default Vue.extend({
  data () {
    const treeConfig: VxeTablePropTypes.TreeConfig<RowVO> = {
      transform: true,
      rowField: 'id',
      parentField: 'parentId'
    }

    const typeOptions = [
      { label: 'mp3', value: 'mp3' },
      { label: 'mp4', value: 'mp4' },
      { label: 'html', value: 'html' },
      { label: 'js', value: 'js' },
      { label: 'css', value: 'css' }
    ]

    const dateOptions = [
      { label: '2020-08-22', value: '2020-08-22' },
      { label: '2021-06-11', value: '2021-06-11' }
    ]

    const tableData: RowVO[] = [
      { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-22' },
      { id: 10050, parentId: null, name: 'Abc2', type: 'mp4', size: 0, date: '2021-06-11' },
      { id: 24300, parentId: 10050, name: 'Test3', type: 'js', size: 256, date: '2020-08-22' },
      { id: 20045, parentId: 24300, name: 'Abc4', type: 'html', size: 600, date: '2021-06-11' },
      { id: 10053, parentId: 24300, name: 'Test5', type: 'js', size: 0, date: '2021-06-11' },
      { id: 24330, parentId: 10053, name: 'Abc6', type: 'js', size: 25, date: '2020-08-22' },
      { id: 21011, parentId: 10053, name: 'Test7', type: 'css', size: 512, date: '2021-06-11' },
      { id: 22200, parentId: 10053, name: 'Abc8', type: 'mp4', size: 1024, date: '2020-08-22' },
      { id: 23666, parentId: null, name: 'Test9', type: 'mp4', size: 4086, date: '2020-08-22' },
      { id: 23677, parentId: 23666, name: 'Abc10', type: 'js', size: 7226, date: '2021-06-11' },
      { id: 23671, parentId: 23677, name: 'Test11', type: 'html', size: 8340, date: '2020-08-22' },
      { id: 23672, parentId: 23677, name: 'Abc12', type: 'css', size: 512, date: '2021-06-11' },
      { id: 23688, parentId: 23666, name: 'Test13', type: 'mp4', size: 256, date: '2021-06-11' },
      { id: 23681, parentId: 23688, name: 'Test14', type: 'mp3', size: 10240, date: '2020-08-22' },
      { id: 23682, parentId: 23688, name: 'Abc15', type: 'js', size: 4086, date: '2021-06-11' },
      { id: 24555, parentId: null, name: 'Abc16', type: 'css', size: 224, date: '2020-08-22' },
      { id: 24566, parentId: 24555, name: 'Abc17', type: 'html', size: 1024, date: '2021-06-11' },
      { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 9600, date: '2021-06-11' }
    ]

    return {
      treeConfig,
      typeOptions,
      dateOptions,
      tableData
    }
  }
})
</script>
