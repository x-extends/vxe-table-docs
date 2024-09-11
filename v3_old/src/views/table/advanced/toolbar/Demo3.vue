<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="200"
      :print-config="{}"
      :custom-config="{mode: 'popup'}"
      :loading="loading"
      :data="tableData"
      @custom="toolbarCustomEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>

    <div>
      <p>工具栏位置随意放</p>
      <div>
        <vxe-toolbar
          custom
          print
          ref="toolbarRef"
          :buttons="toolbarButtons"
          :refresh="{query: findList}">
        </vxe-toolbar>
      </div>
      <p>工具栏位置随意放</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' }
      ],
      toolbarButtons: [
        { code: 'btn1', name: '新增' },
        { code: 'btn2', name: '删除' }
      ]
    }
  },
  mounted () {
    // 将表格和工具栏进行关联
    const $table = this.$refs.tableRef
    const $toolbar = this.$refs.toolbarRef
    if ($table && $toolbar) {
      $table.connect($toolbar)
    }
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          this.tableData = [
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' }
          ]
          this.loading = false
          resolve([])
        }, 300)
      })
    },
    toolbarCustomEvent (params) {
      console.log({ content: `点击了${params.type}`, status: 'info' })
    }
  }
}
</script>
