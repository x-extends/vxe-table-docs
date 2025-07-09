<template>
  <div>
    <vxe-pulldown ref="pulldownRef" destroy-on-close>
      <template #default>
        <vxe-input v-model="searchName" placeholder="可搜索的大数据下拉框" @focus="focusEvent" @keyup="keyupEvent"></vxe-input>
      </template>
      <template #dropdown>
        <vxe-list height="200" class="my-dropdown2" :data="list" auto-resize>
          <template #default="{ items }">
            <div class="list-item2" v-for="item in items" :key="item.value" @click="selectEvent(item)">
              <span>{{ item.label }}</span>
            </div>
          </template>
        </vxe-list>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxePulldownInstance } from 'vxe-pc-ui'

interface ItemVO {
  label: string
  value: string
}

const searchName = ref('')
const list = ref<ItemVO[]>([])
const mockData = ref<ItemVO[]>([])

const pulldownRef = ref<VxePulldownInstance>()

// 模拟后台
const mockList: ItemVO[] = []
const getList = (size: number): Promise<ItemVO[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let index = mockList.length; index < size; index++) {
          mockList.push({
            value: `${index}`,
            label: `row_${index}`
          })
        }
      }
      resolve(mockList.slice(0, size))
    }, 100)
  })
}

const focusEvent = () => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    $pulldown.showPanel()
  }
}

const keyupEvent = () => {
  list.value = searchName.value ? mockData.value.filter((item) => item.label.indexOf(searchName.value) > -1) : mockData.value
}

const selectEvent = (item: ItemVO) => {
  const $pulldown = pulldownRef.value
  if ($pulldown) {
    searchName.value = item.label
    $pulldown.hidePanel().then(() => {
      list.value = mockData.value
    })
  }
}

getList(2000).then(data => {
  mockData.value = data
  list.value = data
})
</script>

<style lang="scss" scoped>
.my-dropdown2 {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
}
.list-item2 {
  line-height: 22px;
}
.list-item2:hover {
  background-color: #f5f7fa;
}
</style>
