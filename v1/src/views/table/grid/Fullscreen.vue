<template>
  <div>
    <p class="tip">
      通过 <grid-api-link prop="toolbar"/> 属性配置 <grid-api-link prop="zoom"/> 开启全屏缩放按钮或者直接调用相关方法，按 Esc 可退出全屏<br>
      还可以手动调用 <grid-api-link prop="maximize"/> 方法最大化表格、<grid-api-link prop="revert"/> 方法还原表格
    </p>

    <vxe-grid
      border
      resizable
      keep-source
      ref="xGrid"
      height="530"
      :pager-config="tablePage"
      :proxy-config="tableProxy"
      :columns="tableColumn"
      :toolbar="tableToolbar"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <template v-slot:toolbar_buttons>
        <vxe-button @click="$refs.xGrid.maximize()">表格最大化</vxe-button>
        <vxe-button @click="$refs.xGrid.revert()">表格还原</vxe-button>
        <vxe-button @click="$refs.xGrid.zoom()">切换表格最大化/还原</vxe-button>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import XEAjax from 'xe-ajax'
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tablePage: {
        pageSize: 15,
        perfect: true
      },
      tableProxy: {
        props: {
          result: 'result',
          total: 'page.total'
        },
        ajax: {
          // page 对象： { pageSize, currentPage }
          query: ({ page }) => XEAjax.get(`/api/user/page/list/${page.pageSize}/${page.currentPage}`),
          // body 对象： { removeRecords }
          delete: ({ body }) => XEAjax.post('/api/user/save', body),
          // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
          save: ({ body }) => XEAjax.post('/api/user/save', body)
        }
      },
      tableToolbar: {
        perfect: true,
        refresh: true,
        zoom: true,
        custom: true,
        slots: {
          buttons: 'toolbar_buttons'
        }
      },
      tableColumn: [
        { type: 'checkbox', width: 50 },
        { type: 'seq', width: 60 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
        { field: 'role', title: 'Role', editRender: { name: 'input' } },
        { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
      ],
      demoCodes: [
        `
        <vxe-grid
          border
          resizable
          keep-source
          ref="xGrid"
          height="530"
          :pager-config="tablePage"
          :proxy-config="tableProxy"
          :columns="tableColumn"
          :toolbar="tableToolbar"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
          <template v-slot:toolbar_buttons>
            <vxe-button @click="$refs.xGrid.maximize()">表格最大化</vxe-button>
            <vxe-button @click="$refs.xGrid.revert()">表格还原</vxe-button>
            <vxe-button @click="$refs.xGrid.zoom()">切换表格最大化/还原</vxe-button>
          </template>
        </vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              tablePage: {
                pageSize: 15,
                perfect: true
              },
              tableProxy: {
                // 配置响应的数据属性
                props: {
                  result: 'result',
                  total: 'page.total'
                },
                ajax: {
                  // page 对象： { pageSize, currentPage }
                  query: ({ page }) => XEAjax.get(\`/api/user/page/list/\${page.pageSize}/\${page.currentPage}\`), // 模拟请求
                  // body 对象： { removeRecords }
                  delete: ({ body }) => XEAjax.post('/api/user/save', body),
                  // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
                  save: ({ body }) => XEAjax.post('/api/user/save', body)
                }
              },
              tableToolbar: {
                perfect: true,
                refresh: true,
                zoom: true,
                custom: true,
                slots: {
                  buttons: 'toolbar_buttons'
                }
              },
              tableColumn: [
                { type: 'checkbox', width: 50 },
                { type: 'seq', width: 60 },
                { field: 'name', title: 'Name', editRender: { name: 'input' } },
                { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
                { field: 'role', title: 'Role', editRender: { name: 'input' } },
                { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
              ]
            }
          }
        }
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
