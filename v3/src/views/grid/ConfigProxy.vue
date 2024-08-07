<template>
  <div>
    <p class="tip">数据代理简单示例</p>

    <vxe-grid
      resizable
      keep-source
      show-overflow
      height="528"
      :filter-config="{remote: true}"
      :toolbar-config="tableToolbar"
      :pager-config="tablePage"
      :columns="tableColumn"
      :form-config="tableForm"
      :proxy-config="tableProxy"
      :checkbox-config="{labelField: 'id', highlight: true, range: true}"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
    </vxe-grid>

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
      validRules: {
        name: [
          { required: true, message: '名称必须填写' },
          { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
        ],
        role: [
          { required: true, message: '角色必须填写' }
        ]
      },
      sortConfig: {
        remote: true
      },
      tablePage: {
        pageSize: 15,
        pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]
      },
      tableProxy: {
        form: true,
        sort: true,
        filter: true,
        ajax: {
          // 接收 Promise
          query: () => {
            return new Promise(resolve => {
              setTimeout(() => {
                const list = [
                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
                  { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: 'Women', age: 26, address: 'test abc' },
                  { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Man', age: 34, address: 'Guangzhou' },
                  { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 22, address: 'Shenzhen' }
                ]
                resolve(list)
              }, 100)
            })
          },
          // body 对象： { removeRecords }
          delete: () => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve({})
              }, 100)
            })
          },
          // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
          save: () => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve({})
              }, 100)
            })
          }
        }
      },
      tableToolbar: {
        buttons: [
          { code: 'insert_edit', name: 'Add' },
          { code: 'mark_cancel', name: '删除/取消' },
          { code: 'save', name: 'Save' }
        ],
        refresh: true,
        custom: true
      },
      tableForm: {
        titleWidth: 100,
        titleAlign: 'right',
        items: [
          { field: 'name', title: '名称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入名称' } } },
          { field: 'role', title: '角色', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入角色' } } },
          { field: 'nickname', title: '昵称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入昵称' } } },
          {
            field: 'sex',
            title: '性别',
            span: 8,
            folding: true,
            itemRender: {
              name: 'VxeSelect',
              options: [
                { value: '0', label: '女' },
                { value: '1', label: '男' }
              ],
              props: {
                placeholder: '请选择性别'
              }
            }
          },
          { field: 'age', title: '年龄', span: 8, folding: true, itemRender: { name: 'VxeInput', props: { type: 'number', placeholder: '请输入年龄' } } },
          { span: 24, align: 'center', collapseNode: true, itemRender: { name: 'FormItemButtonGroup' } }
        ]
      },
      tableColumn: [
        { type: 'seq', width: 60, fixed: 'left' },
        { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },
        { field: 'name', title: 'Name', sortable: true, editRender: { name: 'input' } },
        { field: 'age', title: 'Age', sortable: true, editRender: { name: 'input' } },
        {
          field: 'type',
          title: 'Type',
          slots: {
            default (params) {
              const { row, column } = params
              const rest = [
                { value: '1', label: '成功' },
                { value: '2', label: '失败' },
                { value: '3', label: '拒接' }
              ]
              const cellValue = row[column.field]
              const item = rest.find(item => item.value === cellValue)
              return [
                <span style={ `color:${cellValue === '1' ? 'green' : 'red'}` }>{ item ? item.label : '' }</span>
              ]
            }
          }
        },
        {
          field: 'status',
          title: 'Status',
          editRender: {
            name: 'VxeSelect',
            options: [
              { value: '1', label: '红' },
              { value: '2', label: '黄' },
              { value: '3', label: '蓝' },
              { value: '4', label: '绿' },
              { value: '5', label: '青' }
            ]
          }
        },
        {
          field: 'sex',
          title: 'Sex',
          editRender: {
            name: 'VxeSelect',
            options: [
              { value: '0', label: '女' },
              { value: '1', label: '男' }
            ]
          }
        },
        {
          field: 'role',
          title: 'Role',
          sortable: true,
          width: 200,
          filters: [
            { label: '前端开发', value: '前端' },
            { label: '后端开发', value: '后端' },
            { label: '测试', value: '测试' },
            { label: '程序员鼓励师', value: '程序员鼓励师' }
          ],
          filterMultiple: false,
          editRender: { name: 'input' }
        },
        { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
      ],
      demoCodes: [
        `
        <vxe-grid v-bind="xGridOptions"></vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              xGridOptions: {
                resizable: true,
                showOverflow: true,
                height: 528,
                filterConfig: {
                  remote: true
                },
                checkboxConfig: {
                  labelField: 'id',
                  highlight: true,
                  range: true
                },
                editConfig: {
                  trigger: 'click',
                  mode: 'row',
                  showStatus: true
                },
                editRules: {
                  name: [
                    { required: true, message: '名称必须填写' },
                    { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
                  ],
                  role: [
                    { required: true, message: '角色必须填写' }
                  ]
                },
                sortConfig: {
                  remote: true
                },
                pagerConfig: {
                  pageSize: 15,
                  pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]
                },
                proxyConfig: {
                  sort: true,
                  filter: true,
                  ajax: {
                    query: {
                      url: '/api/user/page/list/{{page.pageSize}}/{{page.currentPage}}'
                    },
                    delete: {
                      url: '/api/user/save'
                    },
                    save: {
                      url: '/api/user/save'
                    }
                  }
                },
                toolbarConfig: {
                  buttons: [
                    { code: 'insert_edit', name: 'Add' },
                    { code: 'mark_cancel', name: '删除/取消' },
                    { code: 'save', name: 'Save' }
                  ],
                  refresh: true,
                  custom: true
                },
                formConfig: {
                  titleWidth: 100,
                  titleAlign: 'right',
                  items: [
                    { field: 'name', title: '名称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入名称' } } },
                    { field: 'role', title: '角色', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入角色' } } },
                    { field: 'nickname', title: '昵称', span: 8, itemRender: { name: 'input', attrs: { placeholder: '请输入昵称' } } },
                    // 表单项渲染，自动读取字典配置
                    { field: 'sex', title: '性别', span: 8, folding: true, itemRender: { name: 'VxeSelect', options: { dict: 'SEX_ALL' } } },
                    { field: 'age', title: '年龄', span: 8, folding: true, itemRender: { name: 'input', attrs: { type: 'number', placeholder: '请输入年龄' } } },
                    { span: 24, align: 'center', collapseNode: true, itemRender: { name: 'FormItemButtonGroup' } }
                  ]
                },
                columns: [
                  { type: 'seq', width: 60, fixed: 'left' },
                  { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },
                  { field: 'name', title: 'Name', sortable: true, editRender: { name: 'input' } },
                  { field: 'age', title: 'Age', sortable: true, editRender: { name: 'input' } },
                  // 单元格渲染，自动读取字典配置
                  { field: 'type', title: 'Type', cellRender: { name: 'DICT', props: { code: 'OPERATE_STATUS' } } },
                  // 单元格编辑渲染，自动读取字典配置
                  { field: 'status', title: 'Status', editRender: { name: 'VxeSelect', options: { dict: 'COLOR_STATUS' } } },
                  // 单元格编辑渲染，自动请求异步配置
                  { field: 'sex', title: 'Sex', sortable: true, editRender: { name: 'VxeSelect', options: { url: '/api/conf/sex/list' } } },
                  // 筛选渲染，自动请求异步配置
                  { field: 'role', title: 'Role', sortable: true, width: 200, filters: { url: '/api/conf/role/list' }, filterMultiple: false, editRender: { name: 'input' } },
                  { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
                ]
              }
            }
          }
        }
        `
      ]
    }
  }
}
</script>
