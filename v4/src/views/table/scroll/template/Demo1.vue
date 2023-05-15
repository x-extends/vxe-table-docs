<template>
  <div>
    <vxe-grid ref="xGrid" class="my-grid88" v-bind="gridOptions">
      <template #toolbar_buttons>
        <button>按钮</button>
        <input type="text"/>
        <vxe-button>按钮1</vxe-button>
        <vxe-button>按钮2</vxe-button>
      </template>

      <template #name_header>
        <div class="first-col">
          <div class="first-col-top">名称</div>
          <div class="first-col-bottom">类型</div>
        </div>
      </template>

      <template #default_name="{ row }">
        <span style="color: red;">{{ row.name }}</span>,
        <button @click="showDetailEvent(row)">弹框</button>
      </template>

      <template #default_sex="{ row }">
        <a class="link" href="https://x-extends.github.io/vxe-table/">我是超链接：{{ row.sex }}</a>
      </template>

      <template #filter_sex="{ column, $panel }">
        <div v-for="(option, index) in column.filters" :key="index">
          <input type="type" v-model="option.data" @input="changeFilterEvent($event, option, $panel)" />
        </div>
      </template>

      <template #header_sex="{ column }">
        <span>
          <i>@</i>
          <span style="color: red;" @click="headerClickEvent">{{ column.title }}</span>
        </span>
      </template>

      <template #edit_sex="{ row }">
        <input type="text" v-model="row.sex" />
      </template>

      <template #default_address="{ row }">
        <span style="color: blue" @click="addressClickEvent(row)">{{ row.address }}</span>
      </template>

      <template #default_html2="{ row }">
        <span v-html="row.html2"></span>
      </template>

      <template #default_img1="{ row }">
        <img v-if="row.img1" :src="row.img1" style="height: 40px;"/>
        <span v-else>无</span>
      </template>
    </vxe-grid>

    <vxe-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>
      <template #default>
        <div v-if="selectRow">{{ selectRow.address }}</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VXETable, VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  sex: string
  num: number
  age: number
  num2: number
  rate: number
  img1: string
  html2: string
  address: string
}

const showDetails = ref(false)
const selectRow = ref<RowVO | null>(null)

const xGrid = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  loading: false,
  height: 400,
  columnConfig: {
    resizable: true
  },
  toolbarConfig: {
    custom: true,
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'Name', width: 200, resizable: false, slots: { header: 'name_header', default: 'default_name' } },
    {
      field: 'sex',
      title: 'Sex',
      showHeaderOverflow: true,
      filters: [{ data: '' }],
      filterMethod: ({ option, row }) => {
        return row.sex === option.data
      },
      editRender: {},
      slots: {
        default: 'default_sex',
        header: 'header_sex',
        filter: 'filter_sex',
        edit: 'edit_sex'
      }
    },
    { field: 'address', title: 'Address', slots: { default: 'default_address' } },
    { field: 'html2', title: 'Html片段', slots: { default: 'default_html2' } },
    { field: 'img1', title: '图片路径', slots: { default: 'default_img1' } }
  ]
})

const showDetailEvent = (row: RowVO) => {
  selectRow.value = row
  showDetails.value = true
}

const headerClickEvent = () => {
  VXETable.modal.alert('头部点击事件')
}

const addressClickEvent = (row: RowVO) => {
  VXETable.modal.alert(`address点击事件：${row.address}`)
}

const changeFilterEvent = (event: Event, option: any, $panel: any) => {
  $panel.changeOption(event, !!option.data, option)
}

const mockList = (size: number) => {
  return new Promise<RowVO[]>(resolve => {
    const list: RowVO[] = []
    for (let index = 0; index < size; index++) {
      list.push({
        name: `名称${index}`,
        sex: '0',
        num: 123,
        age: 18,
        num2: 234,
        rate: 3,
        img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif',
        html2: `<span style="color:red">HTML标签${index}</span>`,
        address: `test abc系列${index}`
      })
    }
    resolve(list)
  })
}

nextTick(() => {
  gridOptions.loading = true
  // 使用函数式加载
  mockList(400).then(data => {
    gridOptions.loading = false
    const $grid = xGrid.value
    if ($grid) {
      $grid.loadData(data)
    }
  })
})
</script>
