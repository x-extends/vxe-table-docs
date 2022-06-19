<template>
  <div>
    <p class="tip">设置 <table-api-link prop="edit-config"/> 的 <table-api-link prop="activeMethod"/> 方法判断单元格是否禁用，例如：限制第二行不允许编辑</p>

    <vxe-grid v-bind="gridOptions1" @edit-disabled="editDisabledEvent">
      <template #name_edit="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #sex_edit="{ row }">
        <vxe-input v-model="row.sex"></vxe-input>
      </template>
      <template #age_edit="{ row }">
        <vxe-input v-model="row.age"></vxe-input>
      </template>
      <template #address_edit="{ row }">
        <vxe-input v-model="row.address"></vxe-input>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">配合  <table-api-link prop="edit-actived"/> 事件，实现行编辑中对列的权限控制，例如：限制 age 小于 27 或者 name 为 'x' 开头的列禁止编辑</p>

    <vxe-grid ref="xGrid2" v-bind="gridOptions2" @edit-actived="editActivedEvent">
      <template #name_edit="{ row }">
        <vxe-input v-model="row.name" :disabled="disabledName"></vxe-input>
      </template>
      <template #sex_edit="{ row }">
        <vxe-input v-model="row.sex" :disabled="disabledSex"></vxe-input>
      </template>
      <template #age_edit="{ row }">
        <vxe-input v-model="row.age" :disabled="disabledAge"></vxe-input>
      </template>
      <template #address_edit="{ row }">
        <vxe-input v-model="row.address"></vxe-input>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[3] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { VxeGridProps, VxeGridInstance, VxeGridEvents } from 'vxe-table'

export default defineComponent({
  setup () {
    const gridOptions1 = reactive<VxeGridProps>({
      border: true,
      showOverflow: true,
      editConfig: {
        trigger: 'click',
        mode: 'row',
        activeMethod ({ rowIndex }) {
          if (rowIndex === 1) {
            return false
          }
          return true
        }
      },
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },
        { field: 'sex', title: 'Sex', editRender: {}, slots: { edit: 'sex_edit' } },
        { field: 'age', title: 'Age', editRender: {}, slots: { edit: 'age_edit' } },
        { field: 'address', title: 'Address', editRender: {}, slots: { edit: 'address_edit' } }
      ],
      data: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
      ]
    })

    const editDisabledEvent: VxeGridEvents.EditDisabled = () => {
      console.log('禁止编辑')
    }

    const xGrid2 = ref<VxeGridInstance>()

    const gridOptions2 = reactive<VxeGridProps>({
      border: true,
      showOverflow: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },
        { field: 'sex', title: 'Sex', editRender: {}, slots: { edit: 'sex_edit' } },
        { field: 'age', title: 'Age', editRender: {}, slots: { edit: 'age_edit' } },
        { field: 'address', title: 'Address', editRender: {}, slots: { edit: 'address_edit' } }
      ],
      data: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'x1111', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
      ]
    })

    const disabledName = ref(false)
    const disabledSex = ref(false)
    const disabledAge = ref(false)

    const editActivedEvent: VxeGridEvents.EditDisabled = ({ row }) => {
      // name 为 'x' 开头的列禁止编辑
      disabledName.value = (row.name || '').indexOf('x') === 0
      // age 小于 27 的列禁止编辑
      disabledAge.value = row.age < 27
      // sex 值编辑为 1 的列禁止编辑
      disabledSex.value = row.sex === 'Women'
    }

    return {
      gridOptions1,
      editDisabledEvent,
      xGrid2,
      gridOptions2,
      disabledName,
      disabledSex,
      disabledAge,
      editActivedEvent,
      demoCodes: [
        `
        <vxe-grid v-bind="gridOptions1" @edit-disabled="editDisabledEvent">
          <template #name_edit="{ row }">
            <vxe-input v-model="row.name"></vxe-input>
          </template>
          <template #sex_edit="{ row }">
            <vxe-input v-model="row.sex"></vxe-input>
          </template>
          <template #age_edit="{ row }">
            <vxe-input v-model="row.age"></vxe-input>
          </template>
          <template #address_edit="{ row }">
            <vxe-input v-model="row.address"></vxe-input>
          </template>
        </vxe-grid>
        `,
        `
        import { defineComponent, reactive } from 'vue'
        import { VxeGridProps, VxeGridEvents } from 'vxe-table'

        export default defineComponent({
          setup () {
            const gridOptions1 = reactive<VxeGridProps>({
              border: true,
              showOverflow: true,
              editConfig: {
                trigger: 'click',
                mode: 'row',
                activeMethod ({ rowIndex }) {
                  if (rowIndex === 1) {
                    return false
                  }
                  return true
                }
              },
              columns: [
                { type: 'seq', width: 50 },
                { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },
                { field: 'sex', title: 'Sex', editRender: {}, slots: { edit: 'sex_edit' } },
                { field: 'age', title: 'Age', editRender: {}, slots: { edit: 'age_edit' } },
                { field: 'address', title: 'Address', editRender: {}, slots: { edit: 'address_edit' } }
              ],
              data: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'x1111', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
              ]
            })

            const editDisabledEvent: VxeGridEvents.EditDisabled = () => {
              console.log('禁止编辑')
            }

            return {
              gridOptions1,
              editDisabledEvent
            }
          }
        })
        `,
        `
        <vxe-grid ref="xGrid2" v-bind="gridOptions2" @edit-actived="editActivedEvent">
          <template #name_edit="{ row }">
            <vxe-input v-model="row.name" :disabled="disabledName"></vxe-input>
          </template>
          <template #sex_edit="{ row }">
            <vxe-input v-model="row.sex" :disabled="disabledSex"></vxe-input>
          </template>
          <template #age_edit="{ row }">
            <vxe-input v-model="row.age" :disabled="disabledAge"></vxe-input>
          </template>
          <template #address_edit="{ row }">
            <vxe-input v-model="row.address"></vxe-input>
          </template>
        </vxe-grid>
        `,
        `
        import { defineComponent, reactive, ref } from 'vue'
        import { VxeGridProps, VxeGridInstance, VxeGridEvents } from 'vxe-table'

        export default defineComponent({
          setup () {
            const xGrid2 = ref<VxeGridInstance>()

            const gridOptions2 = reactive<VxeGridProps>({
              border: true,
              showOverflow: true,
              editConfig: {
                trigger: 'click',
                mode: 'row'
              },
              columns: [
                { type: 'seq', width: 50 },
                { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },
                { field: 'sex', title: 'Sex', editRender: {}, slots: { edit: 'sex_edit' } },
                { field: 'age', title: 'Age', editRender: {}, slots: { edit: 'age_edit' } },
                { field: 'address', title: 'Address', editRender: {}, slots: { edit: 'address_edit' } }
              ],
              data: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'xest3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
              ]
            })

            const disabledName = ref(false)
            const disabledSex = ref(false)
            const disabledAge = ref(false)

            const editActivedEvent: VxeGridEvents.EditDisabled = ({ row }) => {
              // name 为 'x' 开头的列禁止编辑
              disabledName.value = (row.name || '').indexOf('x') === 0
              // age 小于 27 的列禁止编辑
              disabledAge.value = row.age < 27
              // sex 值编辑为 1 的列禁止编辑
              disabledSex.value = row.sex === 'Women'
            }

            return {
              xGrid2,
              gridOptions2,
              disabledName,
              disabledSex,
              disabledAge,
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
