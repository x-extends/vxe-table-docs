<template>
  <div>
    <p class="tip">设置 <table-api-link prop="edit-config"/>={trigger: 'manual', mode: 'row'} 启用行编辑的功能，还可以配合 <table-api-link prop="revertData"/> 函数实现取消就还原数据<br></p>

    <vxe-table
      border
      show-overflow
      ref="xTable"
      :column-config="{resizable: true}"
      :loading="demo1.loading"
      :data="demo1.tableData"
      :edit-config="{trigger: 'manual', mode: 'row'}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.role" type="text" placeholder="请输入昵称"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" transfer>
            <vxe-option v-for="item in demo1.sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="sex2" title="多选下拉" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatMultiSex(row.sex2) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex2" multiple transfer>
            <vxe-option v-for="item in demo1.sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="num6" title="Number" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.num6" type="number" placeholder="请输入数值"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date13" title="Week" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date13" type="week" placeholder="请选择日期" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.address" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="160">
        <template #default="{ row }">
          <template v-if="$refs.xTable.isActiveByRow(row)">
            <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
            <vxe-button @click="cancelRowEvent(row)">取消</vxe-button>
          </template>
          <template v-else>
            <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
          </template>
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
import { defineComponent, reactive, ref } from 'vue'
import { VXETable, VxeTableInstance } from 'vxe-table'

export default defineComponent({
  setup () {
    const xTable = ref<VxeTableInstance>()

    interface ItemVO {
      id: number;
      name: string;
      nickname: string;
      [key: string]: any;
    }

    const demo1 = reactive({
      loading: false,
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
      ] as ItemVO[],
      sexList: [
        { label: '', value: '' },
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ]
    })

    const formatSex = (value: any) => {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    }

    const formatMultiSex = (values: any[]) => {
      if (values) {
        return values.map(val => formatSex(val)).join(',')
      }
      return ''
    }

    const isActiveStatus = (row: ItemVO) => {
      const $table = xTable.value
      if ($table) {
        return $table.isActiveByRow(row)
      }
    }

    const editRowEvent = (row: ItemVO) => {
      const $table = xTable.value
      if ($table) {
        $table.setActiveRow(row)
      }
    }

    const saveRowEvent = () => {
      const $table = xTable.value
      if ($table) {
        $table.clearActived().then(() => {
          demo1.loading = true
          setTimeout(() => {
            demo1.loading = false
            VXETable.modal.message({ content: '保存成功！', status: 'success' })
          }, 300)
        })
      }
    }

    const cancelRowEvent = (row: ItemVO) => {
      const $table = xTable.value
      if ($table) {
        $table.clearActived().then(() => {
          // 还原行数据
          $table.revertData(row)
        })
      }
    }

    return {
      xTable,
      demo1,
      formatSex,
      formatMultiSex,
      isActiveStatus,
      editRowEvent,
      saveRowEvent,
      cancelRowEvent,
      demoCodes: [
        `
        <vxe-table
          border
          show-overflow
          ref="xTable"
          :column-config="{resizable: true}"
          :loading="demo1.loading"
          :data="demo1.tableData"
          :edit-config="{trigger: 'manual', mode: 'row'}">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.name" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="role" title="Role" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.role" type="text" placeholder="请输入昵称"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="sex" title="Sex" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatSex(row.sex) }}</span>
            </template>
            <template #edit="{ row }">
              <vxe-select v-model="row.sex" transfer>
                <vxe-option v-for="item in demo1.sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
              </vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="sex2" title="多选下拉" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatMultiSex(row.sex2) }}</span>
            </template>
            <template #edit="{ row }">
              <vxe-select v-model="row.sex2" multiple transfer>
                <vxe-option v-for="item in demo1.sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
              </vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="num6" title="Number" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.num6" type="number" placeholder="请输入数值"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="date12" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="date13" title="Week" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date13" type="week" placeholder="请选择日期" transfer></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="address" title="Address" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.address" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column title="操作" width="160">
            <template #default="{ row }">
              <template v-if="$refs.xTable.isActiveByRow(row)">
                <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
                <vxe-button @click="cancelRowEvent(row)">取消</vxe-button>
              </template>
              <template v-else>
                <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
              </template>
            </template>
          </vxe-column>
        </vxe-table>
        `,
        `
        import { defineComponent, reactive, ref } from 'vue'
        import { VXETable, VxeTableInstance } from 'vxe-table'

        export default defineComponent({
          setup () {
            const xTable = ref<VxeTableInstance>()

            interface ItemVO {
              id: number;
              name: string;
              nickname: string;
              [key: string]: any;
            }

            const demo1 = reactive({
              loading: false,
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
              ] as ItemVO[],
              sexList: [
                { label: '', value: '' },
                { label: '男', value: '1' },
                { label: '女', value: '0' }
              ]
            })

            const formatSex = (value: any) => {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            }

            const formatMultiSex = (values: any[]) => {
              if (values) {
                return values.map(val => formatSex(val)).join(',')
              }
              return ''
            }

            const isActiveStatus = (row: ItemVO) => {
              const $table = xTable.value
              return $table.isActiveByRow(row)
            }

            const editRowEvent = (row: ItemVO) => {
              const $table = xTable.value
              $table.setActiveRow(row)
            }

            const saveRowEvent = () => {
              const $table = xTable.value
              $table.clearActived().then(() => {
                demo1.loading = true
                setTimeout(() => {
                  demo1.loading = false
                  VXETable.modal.message({ content: '保存成功！', status: 'success' })
                }, 300)
              })
            }

            const cancelRowEvent = (row: ItemVO) => {
              const $table = xTable.value
              $table.clearActived().then(() => {
                // 还原行数据
                $table.revertData(row)
              })
            }

            return {
              xTable,
              demo1,
              formatSex,
              formatMultiSex,
              isActiveStatus,
              editRowEvent,
              saveRowEvent,
              cancelRowEvent
            }
          }
        })
        `
      ]
    }
  }
})
</script>
