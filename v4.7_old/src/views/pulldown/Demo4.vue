<template>
  <div>
    <vxe-pulldown ref="pulldownRef" popup-class-name="my-dropdown4" transfer>
      <template #header>
        <div class="my-headdown4">
          <vxe-button mode="text" status="primary">按钮1</vxe-button>
          <vxe-button mode="text" status="danger">按钮2</vxe-button>
        </div>
      </template>

      <template #default>
        <vxe-input v-model="searchName" suffix-icon="vxe-icon-table" placeholder="实现下拉分页表格" @keyup="keyupEvent" @focus="focusEvent" @suffix-click="suffixClick"></vxe-input>
      </template>

      <template #dropdown>
        <div class="my-bodydown4">
          <vxe-grid
            border
            auto-resize
            height="auto"
            :row-config="{isHover: true}"
            :loading="loading"
            :pager-config="pagerConfig"
            :data="tableData"
            :columns="tableColumn"
            @cell-click="cellClickEvent"
            @page-change="pageChangeEvent">
          </vxe-grid>
        </div>
      </template>

      <template #footer>
        <div class="my-footdown4">
          <vxe-button mode="text" status="primary">底部</vxe-button>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import { VxeGridEvents, VxePulldownInstance } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
}

const searchName = ref('')

const loading = ref(false)
const tableColumn = ref([
  { field: 'name', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' }
])
const tableData = ref<RowVO[]>([])

const tableList = ref<RowVO[]>([
  { name: 'Test1', role: '前端', sex: '男' },
  { name: 'Test2', role: '后端', sex: '男' },
  { name: 'Test3', role: '测试', sex: '男' },
  { name: 'Test4', role: '设计师', sex: '女' },
  { name: 'Test5', role: '前端', sex: '男' },
  { name: 'Test6', role: '前端', sex: '男' },
  { name: 'Test7', role: '前端', sex: '男' }
])

const pagerConfig = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 10
})

const pulldownRef = ref<VxePulldownInstance>()

const focusEvent = () => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    $pulldown.showPanel()
  }
}

const keyupEvent = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    if (searchName.value) {
      tableData.value = tableList.value.filter((row) => row.name.indexOf(searchName.value) > -1)
    } else {
      tableData.value = tableList.value.slice(0)
    }
  }, 100)
}

const suffixClick = () => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    $pulldown.togglePanel()
  }
}

const cellClickEvent: VxeGridEvents.CellClick = ({ row }) => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    searchName.value = row.name
    $pulldown.hidePanel()
  }
}

const pageChangeEvent: VxeGridEvents.PageChange = ({ currentPage, pageSize }) => {
  pagerConfig.currentPage = currentPage
  pagerConfig.pageSize = pageSize
}

onMounted(() => {
  keyupEvent()
})
</script>

<style lang="scss">
.my-dropdown4 {
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  .my-bodydown4 {
    width: 600px;
    height: 300px;
  }

  .my-footdown4 {
    border-top: 1px solid #e8eaec;
  }
}
</style>
