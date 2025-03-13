<template>
  <div>
    <vxe-button status="primary" @click="listToGroup()">取消分组</vxe-button>
    <vxe-button status="primary" @click="listToGroup(['name', 'type'])">按名称+类型分组</vxe-button>
    <vxe-button status="primary" @click="listToGroup(['type', 'date'])">按类型+时间分组</vxe-button>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: string
  date: string
  children?: RowVO[]
}

const allList = [
  { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: '1024', date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: '0', date: '2021-04-01' },
  { id: 24300, parentId: null, name: 'Test3', type: 'avi', size: '1024', date: '2020-03-01' },
  { id: 20045, parentId: null, name: 'Test4', type: 'html', size: '600', date: '2021-04-01' },
  { id: 10053, parentId: null, name: 'Test5', type: 'avi', size: '0', date: '2021-04-01' },
  { id: 24330, parentId: null, name: 'Test6', type: 'txt', size: '25', date: '2021-10-01' },
  { id: 21011, parentId: null, name: 'Test7', type: 'pdf', size: '512', date: '2020-01-01' },
  { id: 22200, parentId: null, name: 'Test8', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: '2048', date: '2020-11-01' },
  { id: 23677, parentId: null, name: 'Test9', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23671, parentId: null, name: 'Test3', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23672, parentId: null, name: 'Test6', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23688, parentId: null, name: 'Test8', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23681, parentId: null, name: 'Test2', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23682, parentId: null, name: 'Test8', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'Test1', type: 'avi', size: '224', date: '2020-10-01' },
  { id: 24566, parentId: null, name: 'Test2', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 24577, parentId: null, name: 'Test1', type: 'js', size: '1024', date: '2021-06-01' }
]

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & {
      treeConfig: VxeTablePropTypes.TreeConfig<RowVO>
    } = {
      height: 400,
      border: 'inner',
      showOverflow: true,
      treeConfig: {
        transform: true,
        rowField: 'id',
        parentField: 'parentId'
      },
      columns: [
        { field: 'name', title: 'Name', treeNode: true },
        { field: 'size', title: 'Size' },
        { field: 'type', title: 'Type' },
        { field: 'date', title: 'Date' }
      ],
      data: allList
    }

    return {
      gridOptions,
      idKey: 1
    }
  },
  methods: {
    handleGroupByField  (list: RowVO[], fields: string[]) {
      if (fields && fields.length) {
        const result: RowVO[] = []
        XEUtils.each(XEUtils.groupBy(list, fields[0]), (childList, field) => {
          result.push({
            id: this.idKey++,
            parentId: null,
            name: field,
            type: '',
            size: '',
            date: '',
            children: this.handleGroupByField(childList, fields.slice(1))
          })
        })
        return XEUtils.toTreeArray(result, { key: 'id', parentKey: 'parentId', children: 'children', clear: true })
      }
      return list
    },
    listToGroup  (fields?: string[]) {
      if (fields) {
        this.gridOptions.treeConfig.transform = true
        this.gridOptions.data = this.handleGroupByField(allList, fields)
      } else {
        this.gridOptions.treeConfig.transform = false
        this.gridOptions.data = allList
      }
    }
  }
})
</script>
