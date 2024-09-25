<template>
  <div>
    <p>
      <vxe-button @click="insertEvent">新增</vxe-button>
      <vxe-button @click="validAllEvent">校验全表单元格</vxe-button>
      <vxe-button @click="getInsertEvent">获取新增</vxe-button>
      <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
      <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
    </p>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      height: 300,
      editConfig: {
        trigger: 'click',
        mode: 'cell',
        showStatus: true
      },
      validConfig: {
        msgMode: 'full'
      },
      editRules: {
        name: [
          { required: true, message: '请输入名称' },
          {
            validator ({ cellValue }) {
              if (cellValue && (cellValue.length < 3 || cellValue.length > 50)) {
                return new Error('名称长度在 3 到 50 个字符之间')
              }
            }
          }
        ],
        role: [
          {
            validator ({ cellValue }) {
              if (cellValue && !['Develop', 'Test', 'Designer', 'PM'].includes(cellValue)) {
                return new Error('角色输入不正确')
              }
            }
          }
        ],
        sex: [
          { required: true, message: '性别必须填写' },
          { pattern: /^[0,1]{1}$/, message: '格式不正确' }
        ],
        age: [
          { pattern: '^[0-9]{0,3}$', message: '格式不正确' }
        ]
      },
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput', props: { type: 'integer' } } },
        { field: 'address', title: 'Address', editRender: { name: 'VxeInput' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
        { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    async validAllEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const errMap = await $grid.fullValidate(true)
        if (errMap) {
          const msgList: string[] = []
          Object.values(errMap).forEach((errList: any) => {
            errList.forEach((params: any) => {
              const { rowIndex, column, rules } = params
              rules.forEach((rule: any) => {
                msgList.push(`第 ${rowIndex + 1} 行 ${column.title} 校验错误：${rule.message}`)
              })
            })
          })
          VxeUI.modal.message({
            status: 'error',
            slots: {
              default () {
                return <div class="red" style="max-height: 400px;overflow: auto;">
                {
                  msgList.map(msg => <div>{ msg }</div>)
                }
              </div>
              }
            }
          })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    },
    async insertEvent   () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const { row: newRow } = await $grid.insert({})
        // 插入一条数据并触发校验
        const errMap = await $grid.validate(newRow)
        if (errMap) {
          // 校验失败
        }
      }
    },
    getInsertEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const insertRecords = $grid.getInsertRecords()
        VxeUI.modal.alert(insertRecords.length)
      }
    },
    getRemoveEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const removeRecords = $grid.getRemoveRecords()
        VxeUI.modal.alert(removeRecords.length)
      }
    },
    getUpdateEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const updateRecords = $grid.getUpdateRecords()
        VxeUI.modal.alert(updateRecords.length)
      }
    }
  }
})
</script>
