<template>
  <div>
    <p class="tip">
      显示/隐藏列功能，通过表格设置 <table-api-link prop="id"/> 和 <table-api-link prop="custom-config"/>={storage: true} 参数开启将列个性化 localStorage 保存功能<br>
      通过 <table-api-link prop="custom"/> 事件实现显示/隐藏列服务端保存，通过 <table-api-link prop="resizable-change"/> 事件实现列宽状态服务端保存
    </p>

    <vxe-toolbar custom>
      <template v-slot:buttons>
        <vxe-button>按钮1</vxe-button>
        <vxe-button>按钮2</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      resizable
      id="toolbar_demo5"
      height="400"
      :custom-config="{storage: true, checkMethod: checkColumnMethod}"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="role" title="Role"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        <vxe-toolbar custom>
          <template v-slot:buttons>
            <vxe-button>按钮1</vxe-button>
            <vxe-button>按钮2</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          resizable
          id="toolbar_demo5"
          height="400"
          :custom-config="{storage: true, checkMethod: checkColumnMethod}"
          :data="tableData">
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="role" title="Role"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 20)
          },
          methods: {
            checkColumnMethod ({ column }) {
              if (column.property === 'role') {
                return false
              }
              return true
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = window.MOCK_DATA_LIST.slice(0, 20)
  },
  methods: {
    checkColumnMethod ({ column }) {
      if (column.property === 'role') {
        return false
      }
      return true
    }
  }
}
</script>
