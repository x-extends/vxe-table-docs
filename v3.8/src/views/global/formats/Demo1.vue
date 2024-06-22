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
        columns: [
          { type: 'seq', width: 50 },
          { field: 'name', title: 'name' },
          { field: 'amount2', title: 'Amount2', formatter: 'myAmount' },
          { field: 'amount4', title: 'Amount4', formatter: ['myAmount', 4] },
          { field: 'status', title: 'Status', formatter: 'mySwitch' }
        ],
        data: [
          { id: 10001, name: 'Test1', nickname: 'T1', status: 0, amount2: 192, amount4: 225 },
          { id: 10002, name: 'Test2', nickname: 'T2', status: 1, amount2: 100.35678, amount4: 100.7686342 },
          { id: 10003, name: 'Test3', nickname: 'T3', status: 0, amount2: 634.7945893, amount4: 671.69834 },
          { id: 10004, name: 'Test4', nickname: 'T4', status: 1, amount2: 23, amount4: 324 }
        ]
      }
    }
  }
}
</script>
