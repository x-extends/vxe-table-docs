<template>
  <div>
    <vxe-toolbar export :refresh="{query: findList}">
      <template #buttons>
        <vxe-button>
          <template #default>新增操作</template>
          <template #dropdowns>
            <vxe-button type="text" @click="insertEvent()">从第一行插入</vxe-button>
            <vxe-button type="text" @click="insertEvent(-1)">从最后插入</vxe-button>
            <vxe-button type="text" @click="insertActiveEvent1">插入到 100 行</vxe-button>
            <vxe-button type="text" @click="insertActiveEvent2">插入到 300 行</vxe-button>
          </template>
        </vxe-button>
        <vxe-button>
          <template #default>删除操作</template>
          <template #dropdowns>
            <vxe-button type="text" @click="removeCheckRowEvent">删除选中</vxe-button>
            <vxe-button type="text" @click="removeRowEvent1">删除第一行</vxe-button>
            <vxe-button type="text" @click="removeRowEvent2">删除最后一行</vxe-button>
            <vxe-button type="text" @click="removeRowEvent3">删除第 100 行</vxe-button>
          </template>
        </vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="xTable"
      height="500"
      :column-config="{resizable: true}"
      :export-config="{}"
      :loading="loading"
      :checkbox-config="{checkField: 'checked'}"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable width="200" :edit-render="{autofocus: '.vxe-input--inner'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.age" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.sex" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="rate" title="Rate" width="200"></vxe-column>
      <vxe-column field="region" title="Region" width="200"></vxe-column>
      <vxe-column field="time" title="Time" width="200"></vxe-column>
      <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>
      <vxe-column field="updateTime" title="UpdateTime" width="200"></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="200"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="200"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="200"></vxe-column>
      <vxe-column field="attr4" title="Attr4" width="200"></vxe-column>
      <vxe-column field="attr5" title="Attr5" width="200"></vxe-column>
      <vxe-column field="attr6" title="Attr6" width="200"></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="200"></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="200"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="200"></vxe-column>
      <vxe-column field="createTime" title="CreateTime" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VXETable, VxeTableInstance } from 'vxe-table'

interface RowVO {
  checked: boolean
  name: string
  sex: string
  num: number
  age: number
  num2: number
  rate: number
  address: string
}

const loading = ref(false)

const xTable = ref<VxeTableInstance<RowVO>>()

const mockList = (size: number) => {
  const list: RowVO[] = []
  for (let index = 0; index < size; index++) {
    list.push({
      checked: false,
      name: `名称${index}`,
      sex: '0',
      num: 123,
      age: 18,
      num2: 234,
      rate: 3,
      address: 'shenzhen'
    })
  }
  return list
}

const findList = () => {
  loading.value = true
  return new Promise<void>(resolve => {
    setTimeout(() => {
      const data = mockList(600)
      // 阻断 vue 对大数组的监听，避免 vue 绑定大数据造成短暂的卡顿
      const $table = xTable.value
      if ($table) {
        $table.loadData(data)
      }
      resolve()
      loading.value = false
    }, 300)
  })
}

const insertEvent = (rowOrIndex?: RowVO | number) => {
  const $table = xTable.value
  if ($table) {
    const record = {
      checked: false
    }
    $table.insertAt(record, rowOrIndex).then(({ row }) => {
      $table.setEditRow(row)
    })
  }
}

const insertActiveEvent1 = () => {
  const $table = xTable.value
  if ($table) {
    insertEvent($table.getData(100))
  }
}

const insertActiveEvent2 = () => {
  const $table = xTable.value
  if ($table) {
    insertEvent($table.getData(300))
  }
}

const removeCheckRowEvent = () => {
  const $table = xTable.value
  if ($table) {
    $table.removeCheckboxRow()
  }
}

const removeRowEvent1 = () => {
  const $table = xTable.value
  if ($table) {
    $table.remove($table.getData(0))
  }
}

const removeRowEvent2 = () => {
  const $table = xTable.value
  if ($table) {
    $table.remove($table.getData($table.getData().length - 1))
  }
}

const removeRowEvent3 = () => {
  const $table = xTable.value
  if ($table) {
    $table.remove($table.getData(100))
  }
}

const getInsertEvent = () => {
  const $table = xTable.value
  if ($table) {
    const insertRecords = $table.getInsertRecords()
    VXETable.modal.alert(insertRecords.length)
  }
}

const getRemoveEvent = () => {
  const $table = xTable.value
  if ($table) {
    const removeRecords = $table.getRemoveRecords()
    VXETable.modal.alert(removeRecords.length)
  }
}

const getUpdateEvent = () => {
  const $table = xTable.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    VXETable.modal.alert(updateRecords.length)
  }
}

findList()
</script>
