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

<script>
// 模拟后台
const mockList = []
function getList (size) {
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

export default {
  data () {
    return {
      mockData: [],
      searchName: '',
      list: []
    }
  },
  created () {
    getList(2000).then(data => {
      this.mockData = data
      this.list = data
    })
  },
  methods: {
    focusEvent () {
      const $pulldown = this.$refs.pulldownRef
      if ($pulldown) {
        $pulldown.showPanel()
      }
    },
    keyupEvent () {
      this.list = this.searchName ? this.mockData.filter((item) => item.label.indexOf(this.searchName) > -1) : this.mockData
    },
    selectEvent (item) {
      const $pulldown = this.$refs.pulldownRef
      if ($pulldown) {
        this.searchName = item.label
        $pulldown.hidePanel().then(() => {
          this.list = this.mockData
        })
      }
    }
  }
}
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
