<template>
  <div>
    <p>
      <vxe-button @click="loadList(5)">加载5行</vxe-button>
      <vxe-button @click="loadList(500)">加载500行</vxe-button>
      <vxe-button @click="loadList(5000)">加载5k行</vxe-button>
      <vxe-button @click="loadList(10000)">加载1w行</vxe-button>
      <vxe-button @click="loadList(50000)">加载5w行</vxe-button>
      <vxe-button @click="loadList(100000)">加载10w行</vxe-button>
      <vxe-button @click="loadList(300000)">加载30w行</vxe-button>
    </p>
    <vxe-table
      border
      show-overflow
      show-header-overflow
      show-footer-overflow
      ref="tableRef"
      height="600"
      :loading="loading"
      :column-config="{resizable: true}"
      :virtual-y-config="{enabled: true, gt: 0}"
      :virtual-x-config="{enabled: true, gt: 0}">
      <vxe-column field="col0" title="列0" width="160"></vxe-column>
      <vxe-column field="col1" title="列1" width="100"></vxe-column>
      <vxe-column field="col2" title="列2" width="160"></vxe-column>
      <vxe-column field="col3" title="列3" width="200"></vxe-column>
      <vxe-column field="col4" title="列4" width="140"></vxe-column>
      <vxe-column field="col5" title="列5" width="300"></vxe-column>
      <vxe-column field="col6" title="列6" width="160"></vxe-column>
      <vxe-column field="col7" title="列7" width="120"></vxe-column>
      <vxe-column field="col8" title="列8" width="400"></vxe-column>
      <vxe-column field="col9" title="列9" width="160"></vxe-column>
      <vxe-column field="col10" title="列10" width="160"></vxe-column>
      <vxe-column field="col11" title="列11" width="180"></vxe-column>
      <vxe-column field="col12" title="列12" width="160"></vxe-column>
      <vxe-column field="col13" title="列13" width="80"></vxe-column>
      <vxe-column field="col14" title="列14" width="120"></vxe-column>
      <vxe-column field="col15" title="列15" width="360"></vxe-column>
      <vxe-column field="col16" title="列16" width="150"></vxe-column>
      <vxe-column field="col17" title="列17" width="380"></vxe-column>
      <vxe-column field="col18" title="列18" width="100"></vxe-column>
      <vxe-column field="col19" title="列19" width="290"></vxe-column>
      <vxe-column field="col20" title="列20" width="80"></vxe-column>
      <vxe-column field="col21" title="列21" width="100"></vxe-column>
      <vxe-column field="col22" title="列22" width="120"></vxe-column>
      <vxe-column field="col23" title="列23" width="270"></vxe-column>
      <vxe-column field="col24" title="列24" width="330"></vxe-column>
      <vxe-column field="col25" title="列25" width="460"></vxe-column>
      <vxe-column field="col26" title="列26" width="280"></vxe-column>
      <vxe-column field="col27" title="列27" width="220"></vxe-column>
      <vxe-column field="col28" title="列28" width="120"></vxe-column>
      <vxe-column field="col29" title="列29" width="180"></vxe-column>
      <vxe-column field="col30" title="列30" width="500"></vxe-column>
      <vxe-column field="col31" title="列31" width="600"></vxe-column>
      <vxe-column field="col32" title="列32" width="100"></vxe-column>
      <vxe-column field="col33" title="列33" width="490"></vxe-column>
      <vxe-column field="col34" title="列34" width="100"></vxe-column>
      <vxe-column field="col35" title="列35" width="150"></vxe-column>
      <vxe-column field="col36" title="列36" width="800"></vxe-column>
      <vxe-column field="col37" title="列37" width="400"></vxe-column>
      <vxe-column field="col38" title="列38" width="800"></vxe-column>
      <vxe-column field="col39" title="列39" width="360"></vxe-column>
      <vxe-column field="col40" title="列40" width="420"></vxe-column>
      <vxe-column field="col41" title="列41" width="100"></vxe-column>
      <vxe-column field="col42" title="列42" width="120"></vxe-column>
      <vxe-column field="col43" title="列43" width="280"></vxe-column>
      <vxe-column field="col44" title="列44" width="170"></vxe-column>
      <vxe-column field="col45" title="列45" width="370"></vxe-column>
      <vxe-column field="col46" title="列46" width="120"></vxe-column>
      <vxe-column field="col47" title="列47" width="170"></vxe-column>
      <vxe-column field="col48" title="列48" width="400"></vxe-column>
      <vxe-column field="col49" title="列49" width="220"></vxe-column>
      <vxe-column field="col50" title="列50" width="170"></vxe-column>
      <vxe-column field="col51" title="列51" width="160"></vxe-column>
      <vxe-column field="col52" title="列52" width="100"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { VxeUI, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  [key: string]: string | number
}

export default Vue.extend({
  data () {
    return {
      loading: false
    }
  },
  methods: {
    // 模拟行数据
    loadList (rowSize: number) {
      const $table = this.$refs.tableRef as VxeTableInstance
      this.loading = true
      setTimeout(() => {
        const dataList: RowVO[] = []
        for (let i = 0; i < rowSize; i++) {
          const item: RowVO = {
            id: 10000 + i
          }
          for (let j = 0; j < 20; j++) {
            item[`col${j}`] = `值_${i}_${j}`
          }
          dataList.push(item)
        }
        this.loading = false
        if ($table) {
          const startTime = Date.now()
          $table.reloadData(dataList).then(() => {
            VxeUI.modal.message({
              content: `加载时间 ${Date.now() - startTime} 毫秒`,
              status: 'success'
            })
          })
        }
      }, 50)
    }
  },
  mounted () {
    this.loadList(50)
  }
})
</script>
