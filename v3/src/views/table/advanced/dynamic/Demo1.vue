<template>
  <div>
    <p>
      <vxe-button @click="addColumn()">最后增加一列</vxe-button>
      <vxe-button @click="removeColumn()">删除最后一列</vxe-button>
      <vxe-button @click="updateSexFilter()">修改sex列筛选条件</vxe-button>
      <vxe-button @click="toggleFixedColumn(0, 'left')">切换第一列固定</vxe-button>
      <vxe-button @click="toggleFixedColumn(1, 'left')">切换第二列固定</vxe-button>
      <vxe-button @click="updateWidthColumn(2, 500)">修改第三列宽度</vxe-button>
      <vxe-button @click="updateWidthColumn(3, 500)">修改第四列宽度</vxe-button>
    </p>

    <vxe-table
      border
      height="300"
      :data="tableData">
      <vxe-column
        v-for="config in tableColumn"
        :key="config.key"
        :type="config.type"
        :field="config.field"
        :title="config.title"
        :fixed="config.fixed"
        :width="config.width"
        :filters="config.filters">
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableColumn: [
        { key: 0, type: 'seq', width: 60, fixed: null },
        { key: 1, type: 'checkbox', width: 50, fixed: null },
        { key: 2, field: 'name', title: 'Name', width: 200 },
        { key: 3, field: 'nickname', title: 'Nickname', width: 300 },
        { key: 4, field: 'sex', title: 'Sex', width: 200, filters: [{ value: '1', label: '男' }] },
        { key: 5, field: 'role', title: 'Role', width: 200 },
        { key: 6, field: 'address', title: 'Address', width: 300 }
      ],
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0 ', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0 ', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0 ', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', age: 35, address: 'test abc' }
      ]
    }
  },
  methods: {
    addColumn () {
      const uniqueId = Date.now()
      this.tableColumn.push({
        key: this.tableColumn.length + 1,
        field: `new_${uniqueId}`,
        title: `新列_${uniqueId}`,
        width: 200
      })
    },
    removeColumn () {
      this.tableColumn.pop()
    },
    updateSexFilter () {
      // 修改筛选列表，并默认设置为选中状态
      this.tableColumn[4].filters = [
        { value: '1', label: '男', checked: false },
        { value: '0', label: '女', checked: true }
      ]
    },
    toggleFixedColumn  (index, value) {
      this.tableColumn[index].fixed = this.tableColumn[index].fixed ? null : value
    },
    updateWidthColumn  (index, value) {
      this.tableColumn[index].width = value
    }
  }
}
</script>
