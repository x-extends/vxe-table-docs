<template>
  <div>
    <p class="tip">可编辑表格</p>

    <vxe-grid ref="xGrid" v-bind="gridOptions" @page-change="handlePageChange">
      <template #operate="{ row }">
        <template v-if="$refs.xGrid.isActiveByRow(row)">
          <vxe-button icon="fa fa-save" status="primary" title="保存" circle @click="saveRowEvent(row)"></vxe-button>
        </template>
        <template v-else>
          <vxe-button icon="fa fa-edit" title="编辑" circle @click="editRowEvent(row)"></vxe-button>
        </template>
        <vxe-button icon="fa fa-trash" title="删除" circle @click="removeRowEvent(row)"></vxe-button>
        <vxe-button icon="fa fa-eye" title="查看" circle></vxe-button>
        <vxe-button icon="fa fa-gear" title="设置" circle></vxe-button>
      </template>

      <template #name_edit="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #nickname_edit="{ row }">
        <vxe-input v-model="row.nickname"></vxe-input>
      </template>
      <template #sex_default="{ row }">
        <span>{{ formatSex(row.sex) }}</span>
      </template>
      <template #sex_edit="{ row }">
        <vxe-select v-model="row.sex" type="text" transfer>
          <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
        </vxe-select>
      </template>
      <template #role_edit="{ row }">
        <vxe-input v-model="row.role"></vxe-input>
      </template>
      <template #describe_edit="{ row }">
        <vxe-input v-model="row.describe"></vxe-input>
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
export default {
  data () {
    return {
      gridOptions: {
        border: true,
        resizable: true,
        keepSource: true,
        showOverflow: true,
        height: 530,
        loading: false,
        pagerConfig: {
          total: 0,
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 20, 50, 100, 200, 500]
        },
        editConfig: {
          // 设置触发编辑为手动模式
          trigger: 'manual',
          // 设置为整行编辑模式
          mode: 'row',
          // 显示修改状态和新增状态
          showStatus: true,
          // 自定义可编辑列头的图标
          icon: 'fa fa-file-text-o'
        },
        columns: [
          { type: 'seq', width: 60 },
          { type: 'checkbox', width: 50 },
          { field: 'name', title: 'Name', editRender: { autofocus: '.vxe-input--inner' }, slots: { edit: 'name_edit' } },
          { field: 'nickname', title: 'Nickname', editRender: { autofocus: '.vxe-input--inner' }, slots: { edit: 'nickname_edit' } },
          { field: 'sex', title: 'Sex', editRender: {}, slots: { default: 'sex_default', edit: 'sex_edit' } },
          { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },
          { field: 'describe', title: 'Describe', showOverflow: true, editRender: {}, slots: { edit: 'describe_edit' } },
          { title: '操作', width: 200, slots: { default: 'operate' } }
        ],
        data: []
      },
      sexList1: [
        { value: '1', label: '男' },
        { value: '0', label: '女' }
      ],
      demoCodes: [
        `
        <vxe-grid ref="xGrid" v-bind="gridOptions" @page-change="handlePageChange">
          <template #operate="{ row }">
            <template v-if="$refs.xGrid.isActiveByRow(row)">
              <vxe-button icon="fa fa-save" status="primary" title="保存" circle @click="saveRowEvent(row)"></vxe-button>
            </template>
            <template v-else>
              <vxe-button icon="fa fa-edit" title="编辑" circle @click="editRowEvent(row)"></vxe-button>
            </template>
            <vxe-button icon="fa fa-trash" title="删除" circle @click="removeRowEvent(row)"></vxe-button>
            <vxe-button icon="fa fa-eye" title="查看" circle></vxe-button>
            <vxe-button icon="fa fa-gear" title="设置" circle></vxe-button>
          </template>

          <template #name_edit="{ row }">
            <vxe-input v-model="row.name"></vxe-input>
          </template>
          <template #nickname_edit="{ row }">
            <vxe-input v-model="row.nickname"></vxe-input>
          </template>
          <template #sex_default="{ row }">
            <span>{{ formatSex(row.sex) }}</span>
          </template>
          <template #sex_edit="{ row }">
            <vxe-select v-model="row.sex" type="text" transfer>
              <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
            </vxe-select>
          </template>
          <template #role_edit="{ row }">
            <vxe-input v-model="row.role"></vxe-input>
          </template>
          <template #describe_edit="{ row }">
            <vxe-input v-model="row.describe"></vxe-input>
          </template>
        </vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              gridOptions: {
                border: true,
                resizable: true,
                keepSource: true,
                showOverflow: true,
                height: 530,
                loading: false,
                pagerConfig: {
                  total: 0,
                  currentPage: 1,
                  pageSize: 10,
                  pageSizes: [10, 20, 50, 100, 200, 500]
                },
                editConfig: {
                  // 设置触发编辑为手动模式
                  trigger: 'manual',
                  // 设置为整行编辑模式
                  mode: 'row',
                  // 显示修改状态和新增状态
                  showStatus: true,
                  // 自定义可编辑列头的图标
                  icon: 'fa fa-file-text-o'
                },
                columns: [
                  { type: 'seq', width: 60 },
                  { type: 'checkbox', width: 50 },
                  { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },
                  { field: 'nickname', title: 'Nickname', editRender: {}, slots: { edit: 'nickname_edit' } },
                  { field: 'sex', title: 'Sex', editRender: {}, slots: { default: 'sex_default', edit: 'sex_edit' } },
                  { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },
                  { field: 'describe', title: 'Describe', showOverflow: true, editRender: {}, slots: { edit: 'describe_edit' } },
                  { title: '操作', width: 200, slots: { default: 'operate' } }
                ],
                data: []
              },
              sexList1: [
                { value: '1', label: '男' },
                { value: '0', label: '女' }
              ]
              }
            }
          },
          created () {
            this.findList()
          },
          methods: {
            findList () {
              this.gridOptions.loading = true
              setTimeout(() => {
                this.gridOptions.loading = false
                this.gridOptions.pagerConfig.total = 10
                this.gridOptions.data = [
                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },
                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },
                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },
                  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },
                  { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }
                ]
              }, 300)
            },
            formatSex (value) {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            },
            searchEvent () {
              this.gridOptions.pagerConfig.currentPage = 1
              this.findList()
            },
            handlePageChange ({ currentPage, pageSize }) {
              this.gridOptions.pagerConfig.currentPage = currentPage
              this.gridOptions.pagerConfig.pageSize = pageSize
              this.findList()
            },
            editRowEvent (row) {
              const $grid = this.$refs.xGrid
              $grid.setActiveRow(row)
            },
            saveRowEvent () {
              const $grid = this.$refs.xGrid
              $grid.clearActived().then(() => {
                this.gridOptions.loading = true
                setTimeout(() => {
                  this.gridOptions.loading = false
                  this.$XModal.message({ content: '保存成功！', status: 'success' })
                }, 300)
              })
            },
            async removeRowEvent (row) {
              const type = await this.$XModal.confirm('您确定要删除该数据?')
              const $grid = this.$refs.xGrid
              if (type === 'confirm') {
                $grid.remove(row)
              }
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.findList()
  },
  methods: {
    findList () {
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.loading = false
        this.gridOptions.pagerConfig.total = 10
        this.gridOptions.data = [
          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
          { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
          { id: 10006, name: 'Test6', nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },
          { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },
          { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },
          { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },
          { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }
        ]
      }, 300)
    },
    formatSex (value) {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    },
    searchEvent () {
      this.gridOptions.pagerConfig.currentPage = 1
      this.findList()
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.gridOptions.pagerConfig.currentPage = currentPage
      this.gridOptions.pagerConfig.pageSize = pageSize
      this.findList()
    },
    editRowEvent (row) {
      const $grid = this.$refs.xGrid
      $grid.setActiveRow(row)
    },
    saveRowEvent () {
      const $grid = this.$refs.xGrid
      $grid.clearActived().then(() => {
        this.gridOptions.loading = true
        setTimeout(() => {
          this.gridOptions.loading = false
          this.$XModal.message({ content: '保存成功！', status: 'success' })
        }, 300)
      })
    },
    async removeRowEvent (row) {
      const type = await this.$XModal.confirm('您确定要删除该数据?')
      const $grid = this.$refs.xGrid
      if (type === 'confirm') {
        $grid.remove(row)
      }
    }
  }
}
</script>
