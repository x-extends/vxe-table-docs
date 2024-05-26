<template>
  <div>
    <vxe-pulldown v-model="showPull">
      <template #default>
        <vxe-input v-model="searchName" placeholder="可搜索的下拉框" @focus="focusEvent" @keyup="keyupEvent"></vxe-input>
      </template>
      <template #dropdown>
        <div class="my-dropdown1">
          <div class="list-item1" v-for="item in list" :key="item.value" @click="selectEvent(item)">
            <i class="vxe-icon-user-fill"></i>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface ItemVO {
  label: string
  value: string
}

const mockData: ItemVO[] = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' },
  { label: '选项6', value: '6' },
  { label: '选项7', value: '7' },
  { label: '选项8', value: '8' },
  { label: '选项9', value: '9' },
  { label: '选项10', value: '10' },
  { label: '选项11', value: '11' },
  { label: '选项12', value: '12' }
]

const showPull = ref(false)
const searchName = ref('')
const list = ref<ItemVO[]>(mockData)

const focusEvent = () => {
  showPull.value = true
}

const keyupEvent = () => {
  list.value = searchName.value ? mockData.filter((item) => item.label.indexOf(searchName.value) > -1) : mockData
}

const selectEvent = (item: ItemVO) => {
  searchName.value = item.label
  showPull.value = false
  list.value = mockData
}
</script>

<style lang="scss" scoped>
.my-dropdown1 {
  height: 200px;
  overflow: auto;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
}
.list-item1:hover {
  background-color: #f5f7fa;
}
</style>
