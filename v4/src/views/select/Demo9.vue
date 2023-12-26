<template>
  <div>
    <vxe-select v-model="val1" class="my-select9" placeholder="自定义选项样式" :options="opts1" clearable></vxe-select>

    <vxe-select v-model="val2" placeholder="自定义某一行模板" :options="opts2" clearable>
      <template #opt3="{ option }">
        <span style="color: red">
          <i class="vxe-icon-question-circle-fill"></i>
          <span>{{ option.label }}</span>
        </span>
      </template>

      <template #opt4="{ option }">
        <span style="color: green">
          <i class="vxe-icon-question-circle-fill"></i>
          <span>{{ option.label }}</span>
        </span>
      </template>
    </vxe-select>

    <vxe-select v-model="val3" placeholder="自定义插槽模板" :options="opts3" multiple clearable>
      <template #header>
        <vxe-button type="text" status="primary">按钮1</vxe-button>
        <vxe-button type="text" status="danger">按钮2</vxe-button>
      </template>

      <template #option="{ option }">
        <div>-- {{ option.label }} --</div>
      </template>

      <template #footer>
        <div class="selected-num9">已选 {{ val3.length }} 条</div>
      </template>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
const opts1 = ref([
  { label: '1111', value: '1' },
  { label: '2222', value: '2', className: 'red' },
  { label: '3333', value: '3', className: 'green' },
  { label: '4444', value: '4', className: 'red' },
  { label: '5555', value: '5' },
  { label: '6666', value: '6' }
])

const val2 = ref()
const opts2 = ref([
  { label: '1111', value: '1' },
  { label: '2222', value: '2' },
  { label: '3333', value: '3', slots: { default: 'opt3' } },
  { label: '4444', value: '4', slots: { default: 'opt4' } },
  { label: '5555', value: '5' },
  { label: '6666', value: '6' }
])

const val3 = ref([])
const opts3 = ref([
  { label: '1111', value: '1' },
  { label: '2222', value: '2' },
  { label: '3333', value: '3' },
  { label: '4444', value: '4' },
  { label: '5555', value: '5' },
  { label: '6666', value: '6' },
  { label: '7777', value: '7' },
  { label: '8888', value: '8' }
])
</script>

<style lang="scss" scoped>
::v-deep(.my-select9) {
  .red {
    color: red;
  }
  .green {
    color: green;
  }
}
.selected-num9 {
  line-height: 24px;
  text-align: right;
  padding: 0 4px;
}
</style>
