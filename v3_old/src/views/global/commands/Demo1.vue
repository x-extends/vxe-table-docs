<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gridOptions: {
        border: true,
        height: 300,
        toolbarConfig: {
          buttons: [
            { code: 'myExport', name: '点击导出' },
            { code: 'myLink', name: '点击跳转' }
          ]
        },
        columns: [
          { type: 'seq', width: 50 },
          { field: 'name', title: 'name' },
          { field: 'sex', title: 'sex' },
          { field: 'address', title: 'Address' }
        ],
        data: [
          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' }
        ]
      }
    }
  }
}
</script>
