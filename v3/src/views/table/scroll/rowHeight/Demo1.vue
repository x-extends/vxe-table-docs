<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="600"
      :row-config="{height: 120}"
      :scroll-y="{enabled: true, gt: 0}"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" title="序号" width="100"></vxe-column>
      <vxe-column field="img" title="图片" width="140" align="center">
        <template #default="{ row }">
          <vxe-image :src="row.imgUrl" height="100"></vxe-image>
        </template>
      </vxe-column>
      <vxe-column field="info" title="基本信息">
        <template #default="{ row }">
          <div class="label-ellipsis">{{ row.name }}</div>
          <div class="label-ellipsis">{{ row.num }}</div>
          <div class="label-ellipsis">{{ row.address }}</div>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Num" width="200"></vxe-column>
      <vxe-column field="address" title="Address" width="200"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  imgUrl: string
  info: string
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = []
    return {
      loading: false,
      tableData
    }
  },
  methods: {
    mockList (size: number) {
      const list: RowVO[] = []
      for (let i = 0; i < size; i++) {
        list.push({
          id: i,
          name: `名称${i} 名称名称 称`,
          imgUrl: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif',
          info: `info ${i}`,
          num: 20,
          address: 'shenzhen shen'
        })
      }
      return list
    },
    findList () {
      this.loading = true
      // 模拟后台接口
      setTimeout(() => {
        const data = this.mockList(600)
        this.loading = false
        this.tableData = data
      }, 350)
    }

  },
  created () {
    this.findList()
  }
})
</script>
