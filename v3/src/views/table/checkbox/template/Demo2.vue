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

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Women', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Test', sex: 'Women', age: 38, address: 'Shenzhen' },
      { id: 10007, name: 'Test7', role: 'Develop', sex: 'Women', age: 29, address: 'Shenzhen' }
    ]

    const rowConfig: VxeTablePropTypes.RowConfig<RowVO> = {
      keyField: 'id',
      isHover: true
    }

    const treeConfig: VxeTablePropTypes.TreeConfig<RowVO> = {
      transform: true,
      rowField: 'id',
      parentField: 'parentId'
    }

    const checkboxConfig: VxeTablePropTypes.CheckboxConfig<RowVO> = {
      checkMethod ({ row }) {
        return ![20045, 23671, 24566, 23666].includes(row.id)
      }
    }

    return {
      tableData,
      rowConfig,
      treeConfig,
      checkboxConfig
    }
  },
  methods: {
    toggleAllCheckboxEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        // 默认强制切换状态（包括子级）
        // $table.toggleAllCheckboxRow()

        // 高级用法：如果设置 force=false，则不强制设置子级，会自动根据设置的规则来决定是否勾选
        $table.toggleAllCheckboxRow({
          force: false
        })
      }
    },
    toggleCheckboxEvent (row: RowVO, disabled: boolean) {
      if (disabled) {
        return
      }
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        // 默认强制切换状态（包括子级）
        // $table.toggleCheckboxRow(row)

        // 高级用法：如果设置 force=false，则不强制设置子级，会自动根据设置的规则来决定是否勾选
        $table.toggleCheckboxRow(row, {
          force: false
        })
      }
    },
    selectRowEvent (row: RowVO, checked: boolean) {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        // 默认强制勾选（包括子级）
        $table.setCheckboxRow(row, checked)

        // 高级用法：如果设置 force=false，则不强制设置子级，会自动根据设置的规则来决定是否勾选
        // $table.setCheckboxRow(row, {
        //   checked: checked,
        //   force: false
        // })
      }
    }
  }
})
</script>
