<template>
  <div>
    <p class="tip">数据代理、固定列、服务端排序、服务端筛选、服务端分页，导出不分页的所有数据，对于分页场景下，如果想要保留选中状态，可以通过设置 <table-api-link prop="radio-config"/> 的 <table-api-link prop="reserve"/> 属性</p>

    <vxe-grid ref="xGrid" v-bind="gridOptions">

      <!--将表单放在工具栏中-->
      <template #toolbar_buttons>
        <vxe-form :data="formData" @submit="searchEvent" @reset="resetEvent">
          <vxe-form-item field="name">
            <template>
              <vxe-input v-model="formData.name" type="text" placeholder="请输入名称"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item>
            <template>
              <vxe-button type="submit" status="primary" content="查询"></vxe-button>
              <vxe-button type="reset" content="重置"></vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>

      <!--自定义空数据模板-->
      <template #empty>
        <span style="color: red;">
          <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import XEUtils from 'xe-utils'

export default {
  data () {
    return {
      formData: {
        name: ''
      },
      gridOptions: {
        resizable: true,
        showOverflow: true,
        border: 'inner',
        height: 548,
        rowId: 'id',
        printConfig: {
          columns: [
            { field: 'name' },
            { field: 'email' },
            { field: 'nickname' },
            { field: 'age' },
            { field: 'amount' }
          ]
        },
        sortConfig: {
          trigger: 'cell',
          remote: true,
          defaultSort: {
            field: 'name',
            order: 'desc'
          }
        },
        filterConfig: {
          remote: true
        },
        pagerConfig: {
          pageSize: 15,
          pageSizes: [5, 15, 20, 50, 100, 200, 500, 1000]
        },
        exportConfig: {
          // 默认选中类型
          type: 'xlsx',
          // 局部自定义类型
          types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
          // 自定义数据量列表
          modes: ['current', 'all']
        },
        radioConfig: {
          labelField: 'id',
          reserve: true,
          highlight: true
        },
        proxyConfig: {
          seq: true, // 启用动态序号代理
          sort: true, // 启用排序代理
          filter: true, // 启用筛选代理
          props: {
            result: 'result', // 配置响应结果列表字段
            total: 'page.total' // 配置响应结果总页数字段
          },
          ajax: {
            // 接收 Promise 对象
            query: ({ page, sorts, filters }) => {
              const queryParams = Object.assign({}, this.formData)
              // 处理排序条件
              const firstSort = sorts[0]
              if (firstSort) {
                queryParams.sort = firstSort.field
                queryParams.order = firstSort.order
              }
              // 处理筛选条件
              filters.forEach(({ field, values }) => {
                queryParams[field] = values.join(',')
              })
              return fetch(`${this.serveApiUrl}/api/pub/page/list/${page.pageSize}/${page.currentPage}?${XEUtils.serialize(queryParams)}`).then(response => response.json())
            },
            // 被某些特殊功能所触发，例如：导出数据 mode=all 时，会触发该方法并对返回的数据进行导出
            queryAll: () => fetch(`${this.serveApiUrl}/api/pub/all`).then(response => response.json())
          }
        },
        toolbarConfig: {
          export: true,
          print: true,
          custom: true,
          slots: {
            buttons: 'toolbar_buttons'
          }
        },
        columns: [
          { type: 'seq', width: 60, fixed: 'left' },
          { type: 'radio', title: 'ID', width: 120, fixed: 'left' },
          { field: 'name', title: 'Name', minWidth: 160, sortable: true },
          { field: 'email', title: 'Email', minWidth: 160 },
          { field: 'nickname', title: 'Nickname', sortable: true, minWidth: 160 },
          { field: 'age', title: 'Age', visible: false, sortable: true, width: 100 },
          {
            field: 'role',
            title: 'Role',
            sortable: true,
            minWidth: 160,
            filters: [
              { label: '前端开发', value: '前端', checked: true },
              { label: '后端开发', value: '后端' },
              { label: '测试', value: '测试' },
              { label: '程序员鼓励师', value: '程序员鼓励师' }
            ],
            filterMultiple: false
          },
          { field: 'amount', title: 'Amount', width: 140, formatter: this.formatAmount },
          { field: 'updateDate', title: 'Update Date', visible: false, width: 160, sortable: true, formatter: this.formatDate },
          { field: 'createDate', title: 'Create Date', visible: false, width: 160, sortable: true, formatter: this.formatDate }
        ]
      },
      demoCodes: [
        `
        <vxe-grid ref="xGrid" v-bind="gridOptions">

          <!--将表单放在工具栏中-->
          <template #toolbar_buttons>
            <vxe-form :data="formData" @submit="searchEvent" @reset="resetEvent">
              <vxe-form-item field="name">
                <template>
                  <vxe-input v-model="formData.name" type="text" placeholder="请输入名称"></vxe-input>
                </template>
              </vxe-form-item>
              <vxe-form-item>
                <template>
                  <vxe-button type="submit" status="primary" content="查询"></vxe-button>
                  <vxe-button type="reset" content="重置"></vxe-button>
                </template>
              </vxe-form-item>
            </vxe-form>
          </template>

          <!--自定义空数据模板-->
          <template #empty>
            <span style="color: red;">
              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">
              <p>没有更多数据了！</p>
            </span>
          </template>
        </vxe-grid>
        `,
        `
        import { mapState } from 'vuex'
        import XEUtils from 'xe-utils'
        
        export default {
          data () {
            return {
              formData: {
                name: ''
              },
              gridOptions: {
                resizable: true,
                showOverflow: true,
                border: 'inner',
                height: 548,
                rowId: 'id',
                printConfig: {
                  columns: [
                    { field: 'name' },
                    { field: 'email' },
                    { field: 'nickname' },
                    { field: 'age' },
                    { field: 'amount' }
                  ]
                },
                sortConfig: {
                  trigger: 'cell',
                  remote: true,
                  defaultSort: {
                    field: 'name',
                    order: 'desc'
                  }
                },
                filterConfig: {
                  remote: true
                },
                pagerConfig: {
                  pageSize: 15,
                  pageSizes: [5, 15, 20, 50, 100, 200, 500, 1000]
                },
                exportConfig: {
                  // 默认选中类型
                  type: 'xlsx',
                  // 局部自定义类型
                  types: ['xlsx', 'csv', 'html', 'xml', 'txt'],
                  // 自定义数据量列表
                  modes: ['current', 'all']
                },
                radioConfig: {
                  labelField: 'id',
                  reserve: true,
                  highlight: true
                },
                proxyConfig: {
                  seq: true, // 启用动态序号代理
                  sort: true, // 启用排序代理
                  filter: true, // 启用筛选代理
                  props: {
                    result: 'result', // 配置响应结果列表字段
                    total: 'page.total' // 配置响应结果总页数字段
                  },
                  ajax: {
                    // 接收 Promise 对象
                    query: ({ page, sorts, filters }) => {
                      const queryParams = Object.assign({}, this.formData)
                      // 处理排序条件
                      const firstSort = sorts[0]
                      if (firstSort) {
                        queryParams.sort = firstSort.field
                        queryParams.order = firstSort.order
                      }
                      // 处理筛选条件
                      filters.forEach(({ field, values }) => {
                        queryParams[field] = values.join(',')
                      })
                      return fetch(\`\${this.serveApiUrl}/api/pub/page/list/\${page.pageSize}/\${page.currentPage}?\${XEUtils.serialize(queryParams)}\`).then(response => response.json())
                    },
                    // 被某些特殊功能所触发，例如：导出数据 mode=all 时，会触发该方法并对返回的数据进行导出
                    queryAll: () => fetch(\`\${this.serveApiUrl}/api/pub/all\`).then(response => response.json())
                  }
                },
                toolbarConfig: {
                  export: true,
                  print: true,
                  custom: true,
                  slots: {
                    buttons: 'toolbar_buttons'
                  }
                },
                columns: [
                  { type: 'seq', width: 60, fixed: 'left' },
                  { type: 'radio', title: 'ID', width: 120, fixed: 'left' },
                  { field: 'name', title: 'Name', minWidth: 160, sortable: true },
                  { field: 'email', title: 'Email', minWidth: 160 },
                  { field: 'nickname', title: 'Nickname', sortable: true, minWidth: 160 },
                  { field: 'age', title: 'Age', visible: false, sortable: true, width: 100 },
                  {
                    field: 'role',
                    title: 'Role',
                    sortable: true,
                    minWidth: 160,
                    filters: [
                      { label: '前端开发', value: '前端', checked: true },
                      { label: '后端开发', value: '后端' },
                      { label: '测试', value: '测试' },
                      { label: '程序员鼓励师', value: '程序员鼓励师' }
                    ],
                    filterMultiple: false
                  },
                  { field: 'amount', title: 'Amount', width: 140, formatter: this.formatAmount },
                  { field: 'updateDate', title: 'Update Date', visible: false, width: 160, sortable: true, formatter: this.formatDate },
                  { field: 'createDate', title: 'Create Date', visible: false, width: 160, sortable: true, formatter: this.formatDate }
                ]
              }
            }
          },
          computed: {
            ...mapState([
              'serveApiUrl'
            ])
          },
          methods: {
            searchEvent () {
              const $grid = this.$refs.xGrid
              $grid.commitProxy('query')
            },
            resetEvent () {
              const $grid = this.$refs.xGrid
              $grid.commitProxy('reload')
            },
            formatAmount ({ cellValue }) {
              return cellValue ? \`￥\${XEUtils.commafy(XEUtils.toNumber(cellValue), { digits: 2 })}\` : ''
            },
            formatDate ({ cellValue }) {
              return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
            }
          }
        }
        `
      ]
    }
  },
  computed: {
    ...mapState([
      'serveApiUrl'
    ])
  },
  methods: {
    searchEvent () {
      const $grid = this.$refs.xGrid
      $grid.commitProxy('query')
    },
    resetEvent () {
      const $grid = this.$refs.xGrid
      $grid.commitProxy('reload')
    },
    formatAmount ({ cellValue }) {
      return cellValue ? `￥${XEUtils.commafy(XEUtils.toNumber(cellValue), { digits: 2 })}` : ''
    },
    formatDate ({ cellValue }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
    }
  }
}
</script>
