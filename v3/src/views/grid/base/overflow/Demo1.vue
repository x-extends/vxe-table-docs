<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #rateAddress>
        <span>标题显示原生 title ___________________________</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  date: string
  rate: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showFooter: true,
      rowConfig: {
        isHover: true
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: '名称', showOverflow: 'ellipsis' },
        { field: 'role', title: '角色', showOverflow: true },
        { field: 'date', title: '标题溢出，显示为 tooltip 标题溢出标题溢出标题溢出标题溢出标题溢出标题溢出标题溢出', showHeaderOverflow: true, showOverflow: 'title', showFooterOverflow: true },
        { field: 'rate', title: 'Rate', showHeaderOverflow: 'title', slots: { header: 'rateAddress' } },
        { field: 'address', title: '长标题长标题长标题长标题长标题长标题长标题长标题长标题', width: 160 }
      ],
      data: [
        { name: 'Test1', role: '前端', date: '内容显示原生 title 内容显示原生 title', rate: 5, address: 'address1' },
        { name: '内容超出隐藏，不显示提示信息xxxxxxxxxxxxxxxxxxx', role: '后端', date: '2020-02-22', rate: 2, address: 'address2\ntooltip文本换行\n换行xx' },
        { name: 'Test3', role: '内容超出一行显示为 tooltip xxxxxxxxxxxxxx 内容超出一行显示为 tooltip xxxxxxxxxxxxxx', date: '2020-01-01', rate: 0, address: 'address3\ntooltip文本换行\n换行xx' },
        { name: 'Test4', role: '设计师', date: '2020-02-23', rate: 1, address: 'address4' },
        { name: 'Test5', role: '前端', date: '2020-01-20', rate: 3, address: 'address5\ntooltip文本换行\n换行xx' }
      ],
      footerData: [
        { seq: '合计', date: '说明 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx长文本内容长文本内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', rate: '不想换行不想换行不想换行不想换行不想换行不想换行不想换行不想换行' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
