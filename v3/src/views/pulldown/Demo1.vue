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

<script>
export default {
  data () {
    return {
      mockData: [
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
      ],
      showPull: false,
      searchName: '',
      list: []
    }
  },
  created () {
    this.list = this.mockData
  },
  methods: {
    focusEvent () {
      this.showPull = true
    },
    keyupEvent () {
      this.list = this.searchName ? this.mockData.filter((item) => item.label.indexOf(this.searchName.value) > -1) : this.mockData
    },
    selectEvent (item) {
      this.searchName = item.label
      this.showPull = false
      this.list = this.mockData
    }
  }
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
