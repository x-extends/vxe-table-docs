<template>
  <div>
    <vxe-button @click="addEvent">新增</vxe-button>
    <vxe-button @click="reloadEvent">刷新</vxe-button>
    <vxe-button @click="queryEvent">查询</vxe-button>
    <vxe-button @click="batchRemoveEvent">删除</vxe-button>
    <vxe-button @click="setPendingEvent">设置第2行尾标记状态</vxe-button>
    <vxe-button status="success" @click="saveEvent">保存</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="warning" @click="pendingRow(row)">标记</vxe-button>
        <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const list = [
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
  { id: 100011, name: 'Test11', nickname: 'T11', role: 'Develop', sex: 'Man', age: 49, address: 'Guangzhou' },
  { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Women', age: 45, address: 'Shanghai' },
  { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100014, name: 'Test14', nickname: 'T14', role: 'Test', sex: 'Man', age: 29, address: 'Shanghai' },
  { id: 100015, name: 'Test15', nickname: 'T15', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 100016, name: 'Test16', nickname: 'T16', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100017, name: 'Test17', nickname: 'T17', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { id: 100018, name: 'Test18', nickname: 'T18', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' },
  { id: 100019, name: 'Test19', nickname: 'T19', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 100020, name: 'Test20', nickname: 'T20', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100021, name: 'Test21', nickname: 'T21', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { id: 100022, name: 'Test22', nickname: 'T22', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' }
]

// 模拟接口
const findPageList = (pageSize: number, currentPage: number, queryObj: any) => {
  console.log(`调用查询接口 pageSize=${pageSize} currentPage=${currentPage}`, queryObj)
  return new Promise<{
    result: RowVO[]
    total: number
  }>(resolve => {
    setTimeout(() => {
      resolve({
        result: list.slice((currentPage - 1) * pageSize, currentPage * pageSize),
        total: list.length
      })
    }, 100)
  })
}

// 模拟接口
const deleteApi = (removeRecords: RowVO[]) => {
  console.log('调用删除接口', removeRecords)
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log(`已删除 ${removeRecords.length} 行`, removeRecords)
      resolve()
    }, 150)
  })
}

// 模拟接口
const saveApi = (pendingRecords: RowVO[], removeRecords: RowVO[], insertRecords: RowVO[], updateRecords: RowVO[]) => {
  console.log('调用保存接口', pendingRecords, insertRecords, updateRecords)
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log(`标记行 ${pendingRecords.length} 行`, pendingRecords)
      console.log(`删除行 ${removeRecords.length} 行`, removeRecords)
      console.log(`新增行 ${insertRecords.length} 行`, insertRecords)
      console.log(`更新行 ${updateRecords.length} 行`, updateRecords)
      resolve()
    }, 200)
  })
}
export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      height: 500,
      editConfig: {
        trigger: 'click',
        mode: 'row',
        showStatus: true
      },
      pagerConfig: {
        pageSize: 15
      },
      formConfig: {
        items: [
          { field: 'name', title: '名称', span: 8, itemRender: { name: 'VxeInput' } },
          { field: 'email', title: '邮件', span: 8, itemRender: { name: 'VxeInput' } },
          { field: 'nickname', title: '昵称', span: 8, itemRender: { name: 'VxeInput' } },
          { field: 'role', title: '角色', span: 8, folding: true, itemRender: { name: 'VxeInput' } },
          { field: 'age', title: '年龄', span: 8, folding: true, itemRender: { name: 'VxeInput' } },
          {
            span: 24,
            align: 'center',
            collapseNode: true,
            itemRender: {
              name: 'VxeButtonGroup',
              options: [
                { type: 'submit', content: '搜索', status: 'primary' },
                { type: 'reset', content: '重置' }
              ]
            }
          }
        ]
      },
      columns: [
        { type: 'checkbox', width: 50 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
        { field: 'role', title: 'Role', editRender: { name: 'input' } },
        { field: 'address', title: 'Address', editRender: { name: 'input' }, showOverflow: true },
        { title: '操作', slots: { default: 'action' } }
      ],
      proxyConfig: {
        form: true,
        response: {
          result: 'result', // 配置响应结果列表字段
          total: 'total' // 配置响应结果总页数字段
        },
        ajax: {
          query: ({ page, form }) => {
            // 默认接收 Promise<{ result: [], page: { total: 100 } }>
            return findPageList(page.pageSize, page.currentPage, form)
          },
          delete: ({ body }) => {
            // 接收 Promise<any>
            return deleteApi(body.removeRecords)
          },
          save: ({ body }) => {
            // 接收 Promise<any>
            return saveApi(body.pendingRecords, body.removeRecords, body.insertRecords, body.updateRecords)
          }
        }
      }
    }

    return {
      gridOptions
    }
  },
  methods: {
    addEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.insert({}).then(({ row }) => {
          $grid.setEditRow(row)
        })
      }
    },
    pendingRow  (row: RowVO) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.togglePendingRow(row)
      }
    },
    removeRow  (row: RowVO) {
      VxeUI.modal.confirm({
        title: '删除提醒',
        content: '请确认要删除该行吗？'
      }).then(type => {
        if (type === 'confirm') {
          const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
          if ($grid) {
            $grid.remove(row)
          }
        }
      })
    },
    reloadEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.commitProxy('reload')
      }
    },
    queryEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.commitProxy('query')
      }
    },
    batchRemoveEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.commitProxy('delete')
      }
    },
    setPendingEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const row = $grid.getData(1)
        $grid.setPendingRow(row, true)
      }
    },
    saveEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.commitProxy('save')
      }
    }
  }
})
</script>
