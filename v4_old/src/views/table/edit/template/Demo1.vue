<template>
  <div>
    <vxe-table
      border
      show-overflow
      ref="tableRef"
      :loading="loading"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell', icon: 'vxe-icon-question-circle-fill'}"
      @checkbox-change="checkboxChangeEvent"
      @checkbox-all="checkboxChangeEvent">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{autofocus: '.vxe-input--inner'}">
        <template #edit="slotParams">
          <vxe-input type="text" v-model="slotParams.row.role" @input="updateCellStatus(slotParams)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{autofocus: '.custom-input'}">
        <template #edit="{ row }">
          <vxe-pulldown ref="xDown1" transfer>
            <template #default>
              <vxe-input v-model="row.name" placeholder="下拉容器" @click="clickDownEvent"></vxe-input>
            </template>
            <template #dropdown>
              <ul class="my-downpanel1">
                <li v-for="item in downList" :key="item.value" @click="changeNameEvent(item, row)">
                  <i class="vxe-icon-question-circle-fill"></i>
                  <span>{{ item.label }}</span>
                </li>
              </ul>
            </template>
          </vxe-pulldown>
        </template>
      </vxe-column>
      <vxe-colgroup title="分组">
        <vxe-column field="age" title="Age" :edit-render="{autofocus: '.vxe-input--inner'}">
          <template #edit="slotParams">
            <vxe-input type="number" v-model="slotParams.row.age" @input="updateCellStatus(slotParams)"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="num" title="Money" :edit-render="{autofocus: '.vxe-input--inner'}">
          <template #edit="slotParams">
            <vxe-input type="number" v-model="slotParams.row.num" @input="updateCellStatus(slotParams)"></vxe-input>
          </template>
          <template #default="{ row }">￥{{ row.num }}</template>
        </vxe-column>
      </vxe-colgroup>
      <vxe-column field="attr1" title="不同行渲染" :edit-render="{}">
        <template #edit="slotParams">
          <template v-if="slotParams.rowIndex === 0">
            <vxe-input type="date" v-model="slotParams.row.attr1" placeholder="请选择日期" @input="updateCellStatus(slotParams)" transfer></vxe-input>
          </template>
          <template v-else-if="slotParams.rowIndex === 1">
            <vxe-select v-model="slotParams.row.attr1" placeholder="请选择下拉" transfer>
              <vxe-option value="选项1" label="选项1"></vxe-option>
              <vxe-option value="选项2" label="选项2"></vxe-option>
              <vxe-option value="选项3" label="选项3"></vxe-option>
            </vxe-select>
          </template>
          <template v-else-if="slotParams.rowIndex === 2">
            <vxe-input type="number" v-model="slotParams.row.attr1" placeholder="请输入数值"></vxe-input>
          </template>
          <template v-else>
            <vxe-input type="text" v-model="slotParams.row.attr1" placeholder="请输入内容"></vxe-input>
          </template>
        </template>
      </vxe-column>
    </vxe-table>

    <vxe-pager
      v-model:current-page="pageVO.currentPage"
      v-model:page-size="pageVO.pageSize"
      :total="pageVO.total"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
      <template #left>
        <span class="page-left">
          <vxe-checkbox v-model="isAllChecked" :indeterminate="isIndeterminate" @change="changeAllEvent"></vxe-checkbox>
          <span class="select-count">自定义模板 {{ selectRecords.length }} 条</span>
          <vxe-button>修改</vxe-button>
          <vxe-button>管理</vxe-button>
          <vxe-button>删除</vxe-button>
          <vxe-button size="small">
            <template #default>更多操作</template>
            <template #dropdowns>
              <vxe-button mode="text">批量修改</vxe-button>
              <vxe-button mode="text">批量管理</vxe-button>
              <vxe-button mode="text">批量删除</vxe-button>
            </template>
          </vxe-button>
        </span>
      </template>
      <template #right>
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
      </template>
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxePulldownInstance } from 'vxe-pc-ui'
import { VxeTableInstance } from 'vxe-table'

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

const loading = ref(false)
const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
])

const isAllChecked = ref(false)
const isIndeterminate = ref(false)
const selectRecords = ref<RowVO[]>([])
const downList = ref([
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 }
])

const pageVO = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 10

})

const tableRef = ref<VxeTableInstance<RowVO>>()
const xDown1 = ref<VxePulldownInstance>()

const updateCellStatus = (slotParams) => {
  const $table = tableRef.value
  if ($table) {
    $table.updateStatus(slotParams)
  }
}

const checkboxChangeEvent = () => {
  const $table = tableRef.value
  if ($table) {
    isAllChecked.value = $table.isAllCheckboxChecked()
    isIndeterminate.value = $table.isAllCheckboxIndeterminate()
    selectRecords.value = $table.getCheckboxRecords()
  }
}

const changeAllEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllCheckboxRow(isAllChecked.value)
    selectRecords.value = $table.getCheckboxRecords()
  }
}

const clickDownEvent = () => {
  const $pulldown1 = xDown1.value
  if ($pulldown1) {
    $pulldown1.showPanel()
  }
}

const changeNameEvent = (item: any, row: RowVO) => {
  const $pulldown1 = xDown1.value
  row.name = item.label
  if ($pulldown1) {
    $pulldown1.hidePanel()
  }
}

loading.value = true
setTimeout(() => {
  const list = [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['0'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
    { id: 10004, name: 'Test5', nickname: 'T5', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 26, address: 'Shenzhen', date12: '', date13: '' },
    { id: 10004, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 28, address: 'BeiJing', date12: '', date13: '2020-09-04' },
    { id: 10004, name: 'Test7', nickname: 'T7', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 30, address: 'BeiJing', date12: '', date13: '2020-04-10' }
  ]
  loading.value = false
  tableData.value = list
}, 100)
</script>
