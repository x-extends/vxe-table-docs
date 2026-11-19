<template>
  <div>
    <vxe-button @click="selectRowEvent(tableData[8], true)">选中Test9</vxe-button>
    <vxe-button @click="selectRowEvent(tableData[8], false)">取消选中Test9</vxe-button>

    <vxe-table
      ref="tableRef"
      border
      :data="tableData"
      :row-config="rowConfig"
      :tree-config="treeConfig"
      :checkbox-config="checkboxConfig"
    >
      <vxe-column type="checkbox" min-width="200" tree-node>
        <template #header="{ checked, indeterminate }">
          <span class="custom-checkbox" @click.stop="toggleAllCheckboxEvent">
            <i v-if="indeterminate" class="vxe-icon-square-minus"></i>
            <i v-else-if="checked" class="vxe-icon-square-checked"></i>
            <i v-else class="vxe-icon-checkbox-unchecked"></i>
            <span style="color: red;">全选</span>
          </span>
        </template>
        <template #checkbox="{ row, checked, indeterminate, disabled }">
          <span class="custom-checkbox" @click.stop="toggleCheckboxEvent(row, disabled)">
            <i v-if="indeterminate" :class="disabled ? 'vxe-icon-square-minus-fill' : 'vxe-icon-square-minus'"></i>
            <i v-else-if="checked" :class="disabled ? 'vxe-icon-square-checked-fill': 'vxe-icon-checkbox-checked'"></i>
            <i v-else-if="disabled" class="vxe-icon-square-fill"></i>
            <i v-else class="vxe-icon-checkbox-unchecked"></i>
            <span style="color: red;">{{ row.name }}</span>
          </span>
        </template>
      </vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const tableRef = ref<VxeTableInstance>()

const rowConfig = reactive<VxeTablePropTypes.RowConfig<RowVO>>({
  keyField: 'id',
  isHover: true
})

const treeConfig = reactive<VxeTablePropTypes.TreeConfig<RowVO>>({
  transform: true,
  rowField: 'id',
  parentField: 'parentId'
})

const checkboxConfig = reactive<VxeTablePropTypes.CheckboxConfig<RowVO>>({
  checkMethod ({ row }) {
    return ![20045, 23671, 24566, 23666].includes(row.id)
  }
})

const tableData = ref<RowVO[]>([
  { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
  { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
  { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: 0, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 500, date: '2021-06-01' },
  { id: 23672, parentId: 23677, name: 'Test12', type: 'pdf', size: 1024, date: '2021-08-01' },
  { id: 23688, parentId: 23666, name: 'Test13', type: 'txt', size: 400, date: '2021-06-01' },
  { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-07-01' },
  { id: 23682, parentId: 23688, name: 'Test15', type: 'html', size: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24577, parentId: null, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 25100, parentId: 24577, name: 'Test19', type: 'avi', size: 224, date: '2020-10-01' },
  { id: 25120, parentId: 25100, name: 'Test20', type: 'js', size: 300, date: '2021-06-01' },
  { id: 25111, parentId: 25100, name: 'Test21', type: 'xlsx', size: 2048, date: '2021-06-01' }
])

const toggleAllCheckboxEvent = () => {
  const $table = tableRef.value
  if ($table) {
    // 默认强制勾选子级
    // $table.toggleAllCheckboxRow()

    // 高级用法：如果设置 force=false，则不强制设置子级，会自动根据设置的规则来决定是否勾选
    $table.toggleAllCheckboxRow({
      force: false
    })
  }
}

const toggleCheckboxEvent = (row: RowVO, disabled: boolean) => {
  if (disabled) {
    return
  }
  const $table = tableRef.value
  if ($table) {
    // 默认强制勾选子级
    // $table.toggleCheckboxRow(row)

    // 高级用法：如果设置 force=false，则不强制设置子级，会自动根据设置的规则来决定是否勾选
    $table.toggleCheckboxRow(row, {
      force: false
    })
  }
}

const selectRowEvent = (row: RowVO, checked: boolean) => {
  const $table = tableRef.value
  if ($table) {
    // 默认强制设置状态（包括子级）
    $table.setCheckboxRow(row, checked)

    // 高级用法：如果设置 force=false，则不强制设置子级，会自动根据设置的规则来决定是否勾选
    // $table.setCheckboxRow(row, {
    //   checked: checked,
    //   force: false
    // })
  }
}
</script>
