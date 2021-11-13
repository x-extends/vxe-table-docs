<template>
  <div>
    <p class="tip">实现简单的唯一下拉选项列表<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="insertEvent()">新增</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      resizable
      show-overflow
      ref="xTable"
      max-height="400"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @edit-actived="editActivedEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatRole(row.role) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.role" clearable transfer @change="roleChangeEvent">
            <vxe-option v-for="item in roleList" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="date13" title="Date" :edit-render="{name: '$input', props: {type: 'date'}}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date13" type="date" transfer></vxe-input>
        </template>
      </vxe-column>
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
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: '1', age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: '2', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
      ],
      roleList: [
        { label: '前端', value: '1', disabled: false },
        { label: '后端', value: '2', disabled: false },
        { label: '项目经理', value: '3', disabled: false },
        { label: '设计师', value: '4', disabled: false },
        { label: '运维', value: '5', disabled: false }
      ],
      demoCodes: [
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="insertEvent()">新增</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          resizable
          show-overflow
          ref="xTable"
          max-height="400"
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'row'}"
          @edit-actived="editActivedEvent">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{name: 'input'}">
            <template #edit="{ row }">
              <vxe-input v-model="row.name" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="role" title="Role" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatRole(row.role) }}</span>
            </template>
            <template #edit="{ row }">
              <vxe-select v-model="row.role" clearable transfer @change="roleChangeEvent">
                <vxe-option v-for="item in roleList" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></vxe-option>
              </vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="date13" title="Date" :edit-render="{name: '$input', props: {type: 'date'}}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date13" type="date" transfer></vxe-input>
            </template>
          </vxe-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: '1', age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: '2', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
              ],
              roleList: [
                { label: '前端', value: '1', disabled: false },
                { label: '后端', value: '2', disabled: false },
                { label: '项目经理', value: '3', disabled: false },
                { label: '设计师', value: '4', disabled: false },
                { label: '运维', value: '5', disabled: false }
              ]
            }
          },
          created () {
            this.$nextTick(() => {
              this.updateRoleList()
            })
          },
          methods: {
            formatRole (value) {
              const item = this.roleList.find(item => item.value === value)
              return item ? item.label : value
            },
            insertEvent () {
              const $table = this.$refs.xTable
              const record = {}
              $table.insert(record)
            },
            updateRoleList () {
              const $table = this.$refs.xTable
              // 获取表格中的全量数据
              const { fullData } = $table.getTableData()
              this.roleList.forEach(item => {
                if (item.value) {
                  // 如果当前选项已经被选过，则禁用
                  item.disabled = fullData.some(row => row.role === item.value)
                }
              })
            },
            roleChangeEvent ({ row }) {
              this.updateRoleList()
            },
            editActivedEvent ({ row }) {
              // 激活编辑时检查剩余选项是否可选择
              this.updateRoleList()
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      this.updateRoleList()
    })
  },
  methods: {
    formatRole (value) {
      const item = this.roleList.find(item => item.value === value)
      return item ? item.label : value
    },
    insertEvent () {
      const $table = this.$refs.xTable
      const record = {}
      $table.insert(record)
    },
    updateRoleList () {
      const $table = this.$refs.xTable
      // 获取表格中的全量数据
      const { fullData } = $table.getTableData()
      this.roleList.forEach(item => {
        if (item.value) {
          // 如果当前选项已经被选过，则禁用
          item.disabled = fullData.some(row => row.role === item.value)
        }
      })
    },
    roleChangeEvent () {
      this.updateRoleList()
    },
    editActivedEvent () {
      // 激活编辑时检查剩余选项是否可选择
      this.updateRoleList()
    }
  }
}
</script>
