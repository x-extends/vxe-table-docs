<template>
  <div>
    <p class="tip">
      通过设置 <table-api-link prop="edit-config"/>.<table-api-link prop="autoClear"/> 关闭默认的单元格清除激活行为<br>
      <span class="red">（注：如果设置为手动模式则不会自动关闭激活状态，需要手动调用 clearActived 关闭编辑状态）</span>
    </p>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="xTable"
      :loading="demo1.loading"
      :data="demo1.tableData"
      :edit-config="{trigger: 'manual', mode: 'row', autoClear: false, showStatus: true}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
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
      <vxe-column field="date12" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="num1" title="Num" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.num1" type="number" placeholder="请输入数值"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.address" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作">
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
    const demo1 = reactive({
      loading: false,
      tableData: [] as any[],
      sexList: [] as any[]
    })

    const xTable = ref({} as VxeTableInstance)

    const formatSex = (value: any) => {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    }

    const editRowEvent = async (row: any) => {
      const $table = xTable.value
      await $table.setActiveRow(row)
    }

    const saveRowEvent = async (row: any) => {
      const $table = xTable.value
      await $table.clearActived()
      // 重新加载行
      await $table.reloadRow(row, {})
      VXETable.modal.message({ content: 'success', status: 'success' })
    }

    const cancelRowEvent = async (row: any) => {
      const $table = xTable.value
      await $table.clearActived()
      // 还原数据
      await $table.revertData(row)
    }

    demo1.loading = true
    setTimeout(() => {
      const list = [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['0'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 26, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 28, address: 'BeiJing', date12: '', date13: '2020-09-04' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 30, address: 'BeiJing', date12: '', date13: '2020-04-10' }
      ]
      demo1.loading = false
      demo1.tableData = list
      demo1.sexList = [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ]
    }, 100)

    return {
      demo1,
      xTable,
      formatSex,
      editRowEvent,
      saveRowEvent,
      cancelRowEvent,
      demoCodes: [
        `
        <vxe-table
          border
          show-overflow
          keep-source
          ref="xTable"
          :loading="demo1.loading"
          :data="demo1.tableData"
          :edit-config="{trigger: 'manual', mode: 'row', autoClear: false, showStatus: true}">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.name" type="text"></vxe-input>
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
          <vxe-column field="date12" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="num1" title="Num" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.num1" type="number" placeholder="请输入数值"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="address" title="Address" :edit-render="{}">
            <template #edit="{ row }">
              <vxe-input v-model="row.address" type="text"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column title="操作">
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
            const demo1 = reactive({
              loading: false,
              tableData: [] as any[],
              sexList: [] as any[]
            })

            const xTable = ref({} as VxeTableInstance)

            const formatSex = (value: any) => {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            }

            const editRowEvent = async (row: any) => {
              const $table = xTable.value
              await $table.setActiveRow(row)
            }

            const saveRowEvent = async (row: any) => {
              const $table = xTable.value
              await $table.clearActived()
              // 重新加载行
              await $table.reloadRow(row, {})
              VXETable.modal.message({ content: 'success', status: 'success' })
            }

            const cancelRowEvent = async (row: any) => {
              const $table = xTable.value
              await $table.clearActived()
              // 还原数据
              await $table.revertData(row)
            }

            demo1.loading = true
            setTimeout(() => {
              const list = [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['0'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 26, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 28, address: 'BeiJing', date12: '', date13: '2020-09-04' },
                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 30, address: 'BeiJing', date12: '', date13: '2020-04-10' }
              ]
              demo1.loading = false
              demo1.tableData = list
              demo1.sexList = [
                { label: '女', value: '0' },
                { label: '男', value: '1' }
              ]
            }, 100)

            return {
              demo1,
              xTable,
              formatSex,
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
