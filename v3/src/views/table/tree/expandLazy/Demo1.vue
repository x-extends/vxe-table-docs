<template>
  <div>
    <vxe-table
      border
      :column-config="{resizable: true}"
      :tree-config="{transform: true}"
      :expand-config="expandConfig"
      :data="tableData">
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column type="expand" width="80">
        <template #content="{ row }">
          <div class="expand-wrapper">
            <vxe-grid :columns="row.childCols" :data="row.childData"></vxe-grid>
          </div>
        </template>
      </vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTablePropTypes, VxeColumnProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface ChildVO {
  name: string
  role: string
  age: number
  sex: string
}

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
  childCols?: VxeColumnProps[]
  childData?: ChildVO[]
}

// 模拟后台接口
const getColumnApi = () => {
  return new Promise<VxeColumnProps[]>(resolve => {
    const data: VxeColumnProps[] = XEUtils.sample([
      { type: 'seq', title: 'Sequence' },
      { field: 'name', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'age', title: 'Age' },
      { field: 'sex', title: 'Sex' }
    ], XEUtils.random(3, 5))
    setTimeout(() => {
      resolve(data)
    }, 300)
  })
}

// 模拟后台接口
const getDataApi = () => {
  return new Promise<ChildVO[]>(resolve => {
    const data: ChildVO[] = XEUtils.sample([
      { name: 'TEST1', role: 'Develop', age: 20, sex: '女' },
      { name: 'TEST2', role: 'Develop', age: 22, sex: '女' },
      { name: 'TEST3', role: 'Develop', age: 24, sex: '男' },
      { name: 'TEST4', role: 'Develop', age: 26, sex: '女' },
      { name: 'TEST5', role: 'Develop', age: 28, sex: '男' },
      { name: 'TEST6', role: 'Develop', age: 30, sex: '男' }
    ], XEUtils.random(0, 4))
    setTimeout(() => {
      resolve(data)
    }, 250)
  })
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01', childCols: [], childData: [] },
      { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', childCols: [], childData: [] },
      { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01', childCols: [], childData: [] },
      { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01', childCols: [], childData: [] },
      { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: 0, date: '2021-04-01', childCols: [], childData: [] },
      { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01', childCols: [], childData: [] },
      { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01', childCols: [], childData: [] },
      { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01', childCols: [], childData: [] },
      { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01', childCols: [], childData: [] },
      { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] },
      { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', childCols: [], childData: [] }
    ]

    const expandConfig: VxeTablePropTypes.ExpandConfig<RowVO> = {
      lazy: true,
      async loadMethod ({ row }) {
        row.childCols = await getColumnApi()
        row.childData = await getDataApi()
      }
    }

    return {
      tableData,
      expandConfig
    }
  }
})
</script>

<style lang="scss" scoped>
.expand-wrapper {
  padding: 20px;
}
</style>
