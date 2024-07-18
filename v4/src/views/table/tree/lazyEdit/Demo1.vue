<template>
  <div>
    <p>
      <vxe-button @click="insertEvent">第二行插入子节点</vxe-button>
      <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :row-config="{keyField: 'id'}"
      :column-config="{resizable: true}"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :tree-config="treeConfig"
      :data="tableData">
      <vxe-column field="name" title="Name" width="260" tree-node :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" mode="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="size" title="Size" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.size" mode="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="type" title="Type" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.type" mode="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date" type="date"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
  hasChild?: boolean
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref([
  { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01', hasChild: true },
  { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: null, date: '2021-01-02', hasChild: true },
  { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
])

const treeConfig = reactive<VxeTablePropTypes.TreeConfig<RowVO>>({
  lazy: true,
  transform: true,
  hasChild: 'hasChild',
  loadMethod ({ row }) {
    // 异步加载子节点
    return new Promise(resolve => {
      setTimeout(() => {
        const childs = [
          { id: row.id + 100000, parentId: row.id, name: row.name + 'Test45', type: 'mp4', size: null, date: '2021-10-03', hasChild: true },
          { id: row.id + 150000, parentId: row.id, name: row.name + 'Test56', type: 'mp3', size: null, date: '2021-07-09', hasChild: false }
        ]
        resolve(childs)
      }, 500)
    })
  }
})

const insertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const id = Date.now()
    const record = {
      id: id,
      parentId: 10050,
      name: `name ${id}`,
      type: 'mp4',
      size: 1024,
      date: '2020-08-01'
    }
    $table.insert(record)
  }
}

const getUpdateEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    VxeUI.modal.alert(updateRecords.length)
  }
}
</script>
