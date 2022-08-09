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
      show-overflow
      ref="xTable"
      max-height="400"
      :column-config="{resizable: true}"
      :data="demo1.tableData"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @edit-actived="editActivedEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
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
            <vxe-option v-for="item in demo1.roleList" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="date13" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date13" type="date" transfer></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>

  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, ref } from 'vue'
import { VxeTableInstance } from 'vxe-table'

export default defineComponent({
  setup () {
    const xTable = ref<VxeTableInstance>()

    const demo1 = reactive({
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
    })

    const formatRole = (value: any) => {
      const item = demo1.roleList.find(item => item.value === value)
      return item ? item.label : value
    }

    const insertEvent = () => {
      const $table = xTable.value
      if ($table) {
        const record = {}
        $table.insert(record)
      }
    }

    const updateRoleList = () => {
      const $table = xTable.value
      if ($table) {
        // 获取表格中的全量数据
        const { fullData } = $table.getTableData()
        demo1.roleList.forEach(item => {
          if (item.value) {
            // 如果当前选项已经被选过，则禁用
            item.disabled = fullData.some(row => row.role === item.value)
          }
        })
      }
    }

    const roleChangeEvent = () => {
      updateRoleList()
    }

    const editActivedEvent = () => {
      // 激活编辑时检查剩余选项是否可选择
      updateRoleList()
    }

    nextTick(() => {
      updateRoleList()
    })

    return {
      xTable,
      demo1,
      formatRole,
      insertEvent,
      roleChangeEvent,
      editActivedEvent,
      demoCodes: [
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="insertEvent()">新增</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          show-overflow
          ref="xTable"
          max-height="400"
          :column-config="{resizable: true}"
          :data="demo1.tableData"
          :edit-config="{trigger: 'click', mode: 'row'}"
          @edit-actived="editActivedEvent">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{}">
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
                <vxe-option v-for="item in demo1.roleList" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></vxe-option>
              </vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="date13" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date13" type="date" transfer></vxe-input>
            </template>
          </vxe-column>
        </vxe-table>
        `,
        `
        import { defineComponent, nextTick, reactive, ref } from 'vue'
        import { VxeTableInstance } from 'vxe-table'

        export default defineComponent({
          setup () {
            const xTable = ref<VxeTableInstance>()

            const demo1 = reactive({
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
            })

            const formatRole = (value: any) => {
              const item = demo1.roleList.find(item => item.value === value)
              return item ? item.label : value
            }

            const insertEvent = () => {
              const $table = xTable.value
              const record = {}
              $table.insert(record)
            }

            const updateRoleList = () => {
              const $table = xTable.value
              // 获取表格中的全量数据
              const { fullData } = $table.getTableData()
              demo1.roleList.forEach(item => {
                if (item.value) {
                  // 如果当前选项已经被选过，则禁用
                  item.disabled = fullData.some(row => row.role === item.value)
                }
              })
            }

            const roleChangeEvent = () => {
              updateRoleList()
            }

            const editActivedEvent = () => {
              // 激活编辑时检查剩余选项是否可选择
              updateRoleList()
            }

            nextTick(() => {
              updateRoleList()
            })

            return {
              xTable,
              demo1,
              formatRole,
              insertEvent,
              roleChangeEvent,
              editActivedEvent
            }
          }
        })
        `
      ]
    }
  }
})
</script>
