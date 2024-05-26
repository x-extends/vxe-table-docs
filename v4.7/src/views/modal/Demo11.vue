<template>
  <div>
    <vxe-button content="自定义模板" @click="val1 = true"></vxe-button>
      <vxe-modal v-model="val1" width="600" show-footer>
        <template #title>
          <span style="color:red">自定义标题</span>
        </template>
        <template #corner>
          <vxe-icon name="bell-fill"></vxe-icon>
          <vxe-icon name="minus"></vxe-icon>
        </template>
        <template #default>
          <vxe-table
            show-overflow
            auto-resize
            height="300"
            :data="tableData">
            <vxe-column type="seq" width="60"></vxe-column>
            <vxe-column field="name" title="Name"></vxe-column>
            <vxe-column field="sex" title="Sex"></vxe-column>
            <vxe-column field="age" title="Age"></vxe-column>
          </vxe-table>
        </template>
        <template #footer>
          <vxe-button @click="cancelEvent">关闭</vxe-button>
          <vxe-button @click="cancelEvent">取消</vxe-button>
          <vxe-button status="primary" @click="confirmEvent">确定</vxe-button>
        </template>
      </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(false)
const tableData = ref([])

const cancelEvent = () => {
  val1.value = false
}

const confirmEvent = () => {
  val1.value = false
}
</script>
