<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #tooltip="{ row, column, tooltipContent }">
        <div v-if="column.field === 'name'" style="width: 500px;">
          <vxe-grid v-bind="childGridOptions" :data="row.childList"></vxe-grid>
        </div>
        <div v-else>{{ tooltipContent }}</div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface ChildVO {
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
}

interface RowVO {
  name: string
  role: string
  date: string
  rate: number
  address: string
  childList: ChildVO[]
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 300,
  showOverflow: true,
  tooltipConfig: {
    theme: 'light',
    maxWidth: 600,
    contentMethod (params) {
      const { column } = params
      if (column.field === 'name') {
        // 当返回任意值时使用自定义模板来渲染
        return true
      }
      // 其他列返回null不做处理
      return null
    }
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: '名称（显示表格提示）', minWidth: 140, showOverflow: true },
    { field: 'role', title: '角色' },
    { field: 'date', title: '日期', width: 200 },
    { field: 'rate', title: 'Rate' },
    { field: 'address', title: '地址（默认显示提示）', width: 200, showOverflow: true }
  ],
  data: [
    {
      name: 'Test1',
      role: '前端',
      date: '2020-02-14',
      rate: 5,
      address: '地址 地址 地址地址地址 地址 地址地址',
      childList: [
        { attr1: '配置11', attr2: '配置22配置22配置22配置22', attr3: '配置33', attr4: '配置44', attr5: '配置55' }
      ]
    },
    {
      name: 'Test2',
      role: '后端',
      date: '2020-02-22',
      rate: 2,
      address: '地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址',
      childList: [
        { attr1: '数据11', attr2: '数据22', attr3: '数据33', attr4: '数据44', attr5: '数据55' },
        { attr1: '配置11', attr2: '配置22', attr3: '配置33配置33配置33', attr4: '配置44', attr5: '配置55配置55配置55' }
      ]
    },
    {
      name: 'Test3',
      role: '前端',
      date: '2020-01-01',
      rate: 0,
      address: '地址 地址 地址',
      childList: [
        { attr1: '数据11', attr2: '数据22', attr3: '数据33', attr4: '数据44', attr5: '数据55' },
        { attr1: '信息11', attr2: '信息22信息22信息22信息22', attr3: '信息33', attr4: '信息44', attr5: '信息55' },
        { attr1: '配置11', attr2: '配置22', attr3: '配置33', attr4: '配置44', attr5: '配置55' }
      ]
    },
    {
      name: 'Test4',
      role: '设计师',
      date: '2020-02-23',
      rate: 1,
      address: '地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址',
      childList: [
        { attr1: '数据11', attr2: '数据22数据22数据22数据22', attr3: '数据33', attr4: '数据44', attr5: '数据55数据55数据55数据55' },
        { attr1: '信息11', attr2: '信息22', attr3: '信息33', attr4: '信息44', attr5: '信息55' }
      ]
    },
    {
      name: 'Test5',
      role: '前端',
      date: '2020-01-20',
      rate: 3,
      address: '地址 地址 地址 地址 地址地址',
      childList: [
        { attr1: '信息11', attr2: '信息22', attr3: '信息33信息33', attr4: '信息44', attr5: '信息55' }
      ]
    }
  ]
})

const childGridOptions = reactive<VxeGridProps<RowVO>>({
  height: 300,
  columns: [
    { field: 'attr1', title: 'Attr1' },
    { field: 'attr2', title: 'Attr2' },
    { field: 'attr3', title: 'Attr3' },
    { field: 'attr4', title: 'Attr4' },
    { field: 'attr5', title: 'Attr5' }
  ]
})
</script>
