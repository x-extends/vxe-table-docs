<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="expandAllEvent">展开所有</vxe-button>
        <vxe-button @click="clearExpandEvent">收起所有</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      height: 800,
      loading: false,
      treeConfig: {
        transform: true
      },
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', width: 300, treeNode: true },
        { field: 'id', title: 'Id', width: 120 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'attr1', title: 'Attr1', width: 120 },
        { field: 'attr2', title: 'Attr2', width: 160 },
        { field: 'attr3', title: 'Attr3', width: 120 },
        { field: 'attr4', title: 'Attr4', width: 100 },
        { field: 'attr5', title: 'Attr5', width: 140 },
        { field: 'attr6', title: 'Attr6', width: 120 }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  methods: {
    loadList () {
      this.gridOptions.loading = true
      fetch('/resource/json/provinces_list.json').then(res => res.json()).then((data: RowVO[]) => {
        this.gridOptions.data = data
        this.gridOptions.loading = false
      })
    },
    expandAllEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setAllTreeExpand(true)
      }
    },
    clearExpandEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.clearTreeExpand()
      }
    }
  },
  created () {
    this.loadList()
  }
})
</script>
