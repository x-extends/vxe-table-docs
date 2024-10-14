<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="imgUrl" title="图片" width="80">
        <template #default="{ row }">
          <vxe-image :src="row.imgUrl" width="36" height="36"></vxe-image>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  imgUrl: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
      { id: 10002, name: 'Test2', role: 'Test', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
      { id: 10003, name: 'Test3', role: 'PM', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' }
    ]

    return {
      tableData
    }
  }
})
</script>
