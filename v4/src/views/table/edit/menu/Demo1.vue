<template>
  <div>
    <p>
      <vxe-button @click="getInsertEvent">获取新增</vxe-button>
      <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
      <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      height="400"
      :column-config="{resizable: true}"
      :loading="loading"
      :data="tableData"
      :menu-config="menuConfig"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      @menu-click="contextMenuClickEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{autofocus: '.myinput'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text" class="myinput" />
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" transfer>
            <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.age" type="number"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  sex2: string[]
  num1: number
  age: number
  address: string
  date12: string
  date13: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)
const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
])

const menuConfig = reactive<VxeTablePropTypes.MenuConfig<RowVO>>({
  header: {
    options: [
      [
        { code: 'hideColumn', name: '隐藏列', disabled: false },
        { code: 'showAllColumn', name: '取消所有隐藏列', disabled: false }
      ]
    ]
  },
  body: {
    options: [
      [
        { code: 'copy', name: '复制', prefixConfig: { icon: 'vxe-icon-copy' }, disabled: false },
        { code: 'reload', name: '刷新', disabled: false },
        { code: 'insertAt', name: '插入', disabled: false },
        { code: 'remove', name: '删除', disabled: false },
        { code: 'save', name: '保存', prefixConfig: { icon: 'vxe-icon-save' }, disabled: false }
      ]
    ]
  },
  visibleMethod ({ options, column }) {
    const isDisabled = !column
    options.forEach(list => {
      list.forEach(item => {
        item.disabled = isDisabled
      })
    })
    return true
  }
})

const sexList = ref([
  { label: '', value: '' },
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

const formatSex = (row: RowVO) => {
  if (row.sex === '1') {
    return '男'
  }
  if (row.sex === '0') {
    return '女'
  }
  return ''
}

const findList = () => {
  loading.value = true
  tableData.value = []
  setTimeout(() => {
    const list = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['0'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Designer', sex: '1', sex2: ['1'], num1: 18, age: 26, address: 'Shenzhen', date12: '', date13: '' },
      { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['1'], num1: 35, age: 28, address: 'BeiJing', date12: '', date13: '2020-09-04' },
      { id: 10007, name: 'Test7', nickname: 'T7', role: 'Designer', sex: '1', sex2: ['1'], num1: 11, age: 24, address: 'BeiJing', date12: '2020-08-10', date13: '2020-04-22' },
      { id: 10008, name: 'Test8', nickname: 'T8', role: 'Designer', sex: '0', sex2: ['1'], num1: 30, age: 21, address: 'Shenzhen', date12: '', date13: '' },
      { id: 10009, name: 'Test9', nickname: 'T9', role: 'Designer', sex: '1', sex2: ['0'], num1: 25, age: 31, address: 'Guangzhou', date12: '', date13: '2020-04-10' },
      { id: 100010, name: 'Test10', nickname: 'T10', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 29, address: 'BeiJing', date12: '2020-04-18', date13: '2020-04-10' }
    ]
    tableData.value = list
    loading.value = false
  }, 500)
}

const contextMenuClickEvent: VxeTableEvents.MenuClick<RowVO> = ({ menu, row, column }) => {
  const $table = tableRef.value
  if ($table) {
    switch (menu.code) {
      case 'hideColumn':
        $table.hideColumn(column)
        break
      case 'showAllColumn':
        $table.resetColumn(true)
        break
      case 'copy':
        if (VxeUI.clipboard.copy(row[column.field])) {
          VxeUI.modal.message({ content: '已复制到剪贴板！', status: 'success' })
        }
        break
      case 'reload':
        findList()
        break
      case 'insertAt':
        $table.insertAt({}, row || -1).then(({ row }) => {
          $table.setEditCell(row, column || 'name')
        })
        break
      case 'remove':
        $table.remove(row)
        break
      case 'save':
        VxeUI.modal.message({ content: '保存成功', status: 'success' })
        findList()
        break
    }
  }
}

const getInsertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const insertRecords = $table.getInsertRecords()
    VxeUI.modal.alert(insertRecords.length)
  }
}

const getRemoveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const removeRecords = $table.getRemoveRecords()
    VxeUI.modal.alert(removeRecords.length)
  }
}

const getUpdateEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    VxeUI.modal.alert(updateRecords.length)
  }
}

findList()
</script>
