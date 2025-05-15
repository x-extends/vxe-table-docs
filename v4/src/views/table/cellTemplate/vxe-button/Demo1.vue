<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="300"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="action1" title="按钮1" width="200">
        <template #default>
          <vxe-button mode="text" @click="viewEvent">查看</vxe-button>
          <vxe-button mode="text" status="error" @click="delEvent">删除</vxe-button>
          <vxe-button mode="text" content="更多">
            <template #dropdowns>
              <vxe-button mode="text" @click="downloadEvent">下载</vxe-button>
              <vxe-button mode="text">导出数据</vxe-button>
              <vxe-button mode="text">导入数据</vxe-button>
            </template>
          </vxe-button>
        </template>
      </vxe-column>
      <vxe-column field="action2" title="按钮2" width="120">
        <template #default="{ row }">
          <vxe-button mode="text" content="配置式下拉" trigger="click" :options="downBtns" @dropdown-click="dropdownClickEvent($event, row)"></vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeButtonPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop' },
  { id: 10002, name: 'Test2', role: 'Test' },
  { id: 10003, name: 'Test3', role: 'PM' },
  { id: 10004, name: 'Test4', role: 'PM' },
  { id: 10005, name: 'Test5', role: 'Develop' },
  { id: 10006, name: 'Test6', role: 'Test' },
  { id: 10007, name: 'Test7', role: 'Test' },
  { id: 10008, name: 'Test8', role: 'Develop' },
  { id: 10009, name: 'Test9', role: 'Develop' },
  { id: 100010, name: 'Test10', role: 'PM' }
])

const downBtns = ref<VxeButtonPropTypes.Options>([
  { name: '1', content: '下拉按钮1' },
  { name: '2', content: '下拉按钮2' },
  { name: '3', content: '下拉按钮3' }
])

const dropdownClickEvent = (params, row) => {
  VxeUI.modal.message({
    content: `点击了 ${params.name} id=${row.id}`,
    status: 'success'
  })
}

const viewEvent = () => {
  VxeUI.modal.message({
    content: '点击了查看',
    status: 'success'
  })
}

const delEvent = () => {
  VxeUI.modal.confirm({
    title: '操作提示',
    content: '请您确认是否删除？'
  })
}

const downloadEvent = () => {
  VxeUI.modal.message({
    content: '点击了下载',
    status: 'success'
  })
}
</script>
