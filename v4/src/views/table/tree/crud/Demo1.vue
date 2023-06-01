<template>
  <div>
    <vxe-toolbar ref="xToolbar" :refresh="{queryMethod: searchMethod}" export print custom>
      <template #buttons>
        <vxe-button @click="insertEvent">新增</vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      show-overflow
      keep-source
      ref="tableRef"
      :row-config="{keyField: 'id'}"
      :column-config="{resizable: true}"
      :print-config="{}"
      :export-config="{}"
      :loading="loading"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="size" title="Size" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.size" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="type" title="Type" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.type" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date" type="date" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="500">
        <template #default="{ row }">
          <vxe-button type="text" status="primary" @click="insertRow(row, 'current')">插入节点</vxe-button>
          <vxe-button type="text" status="primary" @click="insertRow(row, 'top')">顶部插入节点</vxe-button>
          <vxe-button type="text" status="primary" @click="insertRow(row, 'bottom')">尾部插入子节点</vxe-button>
          <vxe-button type="text" status="primary" @click="removeRow(row)">删除节点</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VXETable, VxeTableInstance, VxeToolbarInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const tableRef = ref<VxeTableInstance<RowVO>>()
const xToolbar = ref<VxeToolbarInstance>()

const findList = () => {
  loading.value = true
  return new Promise(resolve => {
    setTimeout(() => {
      tableData.value = [
        { id: 10000, parentId: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
        { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
        { id: 20045, parentId: 24300, name: 'vxe-table test abc4', type: 'html', size: 600, date: '2021-04-01' },
        { id: 10053, parentId: 24300, name: 'vxe-table test abc96', type: 'avi', size: 0, date: '2021-04-01' },
        { id: 24330, parentId: 10053, name: 'vxe-table test abc5', type: 'txt', size: 25, date: '2021-10-01' },
        { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
        { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24555, parentId: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-01' },
        { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
      ]
      loading.value = false
      resolve(null)
    }, 300)
  })
}

const searchMethod = () => {
  const $table = tableRef.value
  if ($table) {
    // 清除所有状态
    $table.clearAll()
    return findList()
  }
  return Promise.resolve()
}

const insertRow = async (currRow: RowVO, locat: string) => {
  const $table = tableRef.value
  if ($table) {
    const date = new Date()
    // 如果 null 则插入到目标节点顶部
    // 如果 -1 则插入到目标节点底部
    // 如果 row 则有插入到效的目标节点该行的位置
    if (locat === 'current') {
      const record = {
        name: '新数据',
        id: Date.now(),
        parentId: currRow.parentId, // 父节点必须与当前行一致
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      }
      const { row: newRow } = await $table.insertAt(record, currRow)
      await $table.setEditRow(newRow) // 插入子节点
    } else if (locat === 'top') {
      const record = {
        name: '新数据',
        id: Date.now(),
        parentId: currRow.id, // 需要指定父节点，自动插入该节点中
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      }
      const { row: newRow } = await $table.insert(record)
      await $table.setTreeExpand(currRow, true) // 将父节点展开
      await $table.setEditRow(newRow) // 插入子节点
    } else if (locat === 'bottom') {
      const record = {
        name: '新数据',
        id: Date.now(),
        parentId: currRow.id, // 需要指定父节点，自动插入该节点中
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      }
      const { row: newRow } = await $table.insertAt(record, -1)
      await $table.setTreeExpand(currRow, true) // 将父节点展开
      await $table.setEditRow(newRow) // 插入子节点
    }
  }
}

const removeRow = async (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    await $table.remove(row)
  }
}

const insertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const date = new Date()
    const record = {
      name: '新数据',
      id: Date.now(),
      parentId: null,
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
    const { row: newRow } = await $table.insert(record)
    await $table.setEditRow(newRow)
  }
}

const getInsertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const insertRecords = $table.getInsertRecords()
    VXETable.modal.alert(`新增：${insertRecords.length}`)
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
    VXETable.modal.alert(`更新：${updateRecords.length}`)
  }
}

nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = tableRef.value
  const $toolbar = xToolbar.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
  findList()
})
</script>
