<template>
  <div>
    <p>
      <vxe-button @click="insertEvent">新增</vxe-button>
      <vxe-button @click="removeSelectEvent()">删除选中</vxe-button>
      <vxe-button @click="fullValidEvent">快速校验全量数据</vxe-button>
      <vxe-button @click="selectValidEvent">选中行校验</vxe-button>
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
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name" :edit-render="{name: '$input'}"></vxe-column>
        <vxe-column field="role" title="Role" :edit-render="{name: '$input'}"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="分组2">
        <vxe-colgroup title="分组21">
          <vxe-column field="sex" title="Sex" :edit-render="{name: '$input'}"></vxe-column>
          <vxe-column field="age" title="Age" :edit-render="{name: '$input'}"></vxe-column>
          <vxe-column field="date" title="Date" :edit-render="{name: '$input'}"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VXETable, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
  { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
])

const validRules = ref<VxeTablePropTypes.EditRules<RowVO>>({
  name: [
    { required: true, message: '请输入名称' },
    {
      validator ({ cellValue }) {
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
})

const removeSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.removeCheckboxRow()
  }
}

const fullValidEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const errMap = await $table.validate(true)
    if (errMap) {
      VXETable.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VXETable.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}

const selectValidEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    if (selectRecords.length > 0) {
      const errMap = await $table.validate(selectRecords)
      if (errMap) {
        VXETable.modal.message({ status: 'error', content: '校验不通过！' })
      } else {
        VXETable.modal.message({ status: 'success', content: '校验成功！' })
      }
    } else {
      VXETable.modal.message({ status: 'warning', content: '未选中数据！' })
    }
  }
}

const insertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const { row: newRow } = await $table.insert({})
    // 插入一条数据并触发校验
    const errMap = await $table.validate(newRow)
    if (errMap) {
      // 校验失败
    }
  }
}

const getSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    VXETable.modal.alert(selectRecords.length)
  }
}

const getInsertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const insertRecords = $table.getInsertRecords()
    VXETable.modal.alert(insertRecords.length)
  }
}

const getRemoveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const removeRecords = $table.getRemoveRecords()
    VXETable.modal.alert(removeRecords.length)
  }
}

const getUpdateEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    VXETable.modal.alert(updateRecords.length)
  }
}
</script>
