<template>
  <div>
    <p>
      <vxe-button @click="insertEvent">新增</vxe-button>
      <vxe-button @click="removeSelectEvent()">删除选中</vxe-button>
      <vxe-button @click="validAllEvent">校验全表单元格</vxe-button>
      <vxe-button @click="getSelectEvent">获取选中</vxe-button>
      <vxe-button @click="getInsertEvent">获取新增</vxe-button>
      <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
      <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      keep-source
      height="300"
      ref="tableRef"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
      :valid-config="{msgMode: 'full'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name" :edit-render="{name: 'VxeInput'}"></vxe-column>
        <vxe-column field="role" title="Role" :edit-render="{name: 'VxeInput'}"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="分组2">
        <vxe-colgroup title="分组21">
          <vxe-column field="sex" title="Sex" :edit-render="{name: 'VxeInput'}"></vxe-column>
          <vxe-column field="age" title="Age" :edit-render="{name: 'VxeInput'}"></vxe-column>
          <vxe-column field="date" title="Date" :edit-render="{name: 'VxeInput'}"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script>
import VXETable from 'vxe-table'

export default {
  data () {
    const nameValid = ({ cellValue }) => {
      // 模拟服务端校验
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (cellValue && (cellValue.length < 3 || cellValue.length > 50)) {
            reject(new Error('名称长度在 3 到 50 个字符之间'))
          } else {
            resolve()
          }
        }, 100)
      })
    }
    const roleValid = ({ cellValue }) => {
      if (cellValue && !['Develop', 'Test', 'Designer', 'PM'].includes(cellValue)) {
        return new Error('角色输入不正确')
      }
    }
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
        { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
      ],
      validRules: {
        name: [
          { required: true, message: 'app.body.valid.rName' },
          { validator: nameValid }
        ],
        role: [
          { validator: roleValid }
        ],
        sex: [
          { required: true, message: '性别必须填写' },
          { pattern: /^[0,1]{1}$/, message: '格式不正确' }
        ],
        age: [
          { pattern: '^[0-9]{0,3}$', message: '格式不正确' }
        ]
      }
    }
  },
  methods: {
    async validAllEvent () {
      const $table = this.$refs.tableRef
      const errMap = await $table.fullValidate(true)
      if (errMap) {
        const msgList = []
        Object.values(errMap).forEach(errList => {
          errList.forEach(params => {
            const { rowIndex, column, rules } = params
            rules.forEach(rule => {
              msgList.push(`第 ${rowIndex + 1} 行 ${column.title} 校验错误：${rule.message}`)
            })
          })
        })
        VXETable.modal.message({
          status: 'error',
          slots: {
            default () {
              return [
                <div class="red" style="max-height: 400px;overflow: auto;">
                  {
                    msgList.map(msg => <div>{ msg }</div>)
                  }
                </div>
              ]
            }
          }
        })
      } else {
        VXETable.modal.message({ status: 'success', content: '校验成功！' })
      }
    },
    async insertEvent () {
      const $table = this.$refs.tableRef
      const { row: newRow } = await $table.insert()
      // 插入一条数据并触发校验
      const errMap = await $table.validate(newRow)
      if (errMap) {
        // 校验不通过
      }
    },
    removeSelectEvent  () {
      const $table = this.$refs.tableRef
      if ($table) {
        $table.removeCheckboxRow()
      }
    },
    getSelectEvent () {
      const $table = this.$refs.tableRef
      const selectRecords = $table.getCheckboxRecords()
      VXETable.modal.alert(selectRecords.length)
    },
    getInsertEvent () {
      const $table = this.$refs.tableRef
      const insertRecords = $table.getInsertRecords()
      VXETable.modal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      const $table = this.$refs.tableRef
      const removeRecords = $table.getRemoveRecords()
      VXETable.modal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      const $table = this.$refs.tableRef
      const updateRecords = $table.getUpdateRecords()
      VXETable.modal.alert(updateRecords.length)
    }
  }
}
</script>
