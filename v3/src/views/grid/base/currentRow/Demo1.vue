<template>
  <div>
    <vxe-switch v-model="toolbarConfig.custom"></vxe-switch>

    <vxe-grid v-bind="gridOptions" height="500"></vxe-grid>
  </div>
</template>

<script>
export default {
  data () {
    const toolbarConfig = {
      custom: true
    }
    const gridOptions = {
      border: true,
      rowConfig: {
        keyField: 'id'
      },
      virtualYConfig: {
        enabled: true, // 是否开启纵向虚拟滚动
        gt: 0 // 指定大于指定行时自动启动纵向虚拟滚动，如果为 0 则总是启用
      },
      columnConfig: {
        resizable: true
      },
      toolbarConfig,
      customConfig: {
        immediate: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 120 },
        { field: 'sex', title: 'Sex', minWidth: 80 },
        { field: 'age', title: 'Age', minWidth: 80 },
        { field: 'role', title: 'Role', minWidth: 120 },
        { field: 'address', title: 'Address', minWidth: 160 },
        { field: 'company', title: 'Company', minWidth: 140 },
        { field: 'dept', title: 'Dept', minWidth: 120 },
        { field: 'email', title: 'Email', minWidth: 180 },
        { field: 'phone', title: 'Phone', minWidth: 130 },
        { field: 'status', title: 'Status', minWidth: 100 },
        { field: 'city', title: 'City', minWidth: 100 },
        { field: 'country', title: 'Country', minWidth: 110 },
        { field: 'level', title: 'Level', minWidth: 90 },
        { field: 'score', title: 'Score', minWidth: 90 },
        { field: 'amount', title: 'Amount', minWidth: 110 },
        { field: 'currency', title: 'Currency', minWidth: 100 },
        { field: 'orderNo', title: 'OrderNo', minWidth: 130 },
        { field: 'contractNo', title: 'ContractNo', minWidth: 140 },
        { field: 'supplier', title: 'Supplier', minWidth: 140 },
        { field: 'buyer', title: 'Buyer', minWidth: 120 },
        { field: 'project', title: 'Project', minWidth: 130 },
        { field: 'category', title: 'Category', minWidth: 110 },
        { field: 'priority', title: 'Priority', minWidth: 100 },
        { field: 'source', title: 'Source', minWidth: 100 },
        { field: 'remark', title: 'Remark', minWidth: 160 },
        { field: 'createBy', title: 'CreateBy', minWidth: 110 },
        { field: 'createTime', title: 'CreateTime', minWidth: 160 },
        { field: 'updateBy', title: 'UpdateBy', minWidth: 110 },
        { field: 'updateTime', title: 'UpdateTime', minWidth: 160 }
      ],
      data: Array.from({ length: 200 }, (_, i) => {
        const n = i + 1
        const sex = n % 2 ? 'Man' : 'Women'
        const roles = ['Develop', 'Test', 'PM', 'Designer']
        const cities = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen']
        const statuses = ['Open', 'Doing', 'Done', 'Closed']
        return {
          id: 10000 + n,
          name: `Test${n}`,
          sex,
          age: 20 + (n % 20),
          role: roles[n % roles.length],
          address: `${cities[n % cities.length]} Street ${n}`,
          company: `Company ${n % 30 + 1}`,
          dept: `Dept ${n % 8 + 1}`,
          email: `test${n}@example.com`,
          phone: `138${String(n).padStart(8, '0')}`,
          status: statuses[n % statuses.length],
          city: cities[n % cities.length],
          country: 'China',
          level: `L${n % 5 + 1}`,
          score: 60 + (n % 41),
          amount: (n * 137).toFixed(2),
          currency: n % 3 ? 'CNY' : 'USD',
          orderNo: `SO${String(n).padStart(6, '0')}`,
          contractNo: `CT${String(n).padStart(6, '0')}`,
          supplier: `Supplier ${n % 25 + 1}`,
          buyer: `Buyer ${n % 12 + 1}`,
          project: `Project ${n % 10 + 1}`,
          category: `Cat ${n % 6 + 1}`,
          priority: ['Low', 'Medium', 'High'][n % 3],
          source: ['Web', 'App', 'Import'][n % 3],
          remark: `Remark ${n}`,
          createBy: `User${n % 15 + 1}`,
          createTime: `2026-09-01 ${String(n % 24).padStart(2, '0')}:00:00`,
          updateBy: `User${n % 15 + 1}`,
          updateTime: `2026-09-03 ${String(n % 24).padStart(2, '0')}:30:00`
        }
      })
    }
    return {
      gridOptions,
      toolbarConfig
    }
  }
}
</script>
