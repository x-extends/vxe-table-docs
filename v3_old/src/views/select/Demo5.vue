<template>
  <div>
    <vxe-select v-model="val1" placeholder="可搜索" clearable filterable>
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2"></vxe-option>
      <vxe-option value="3" label="选项3"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
      <vxe-option value="5" label="选项5"></vxe-option>
      <vxe-option value="6" label="选项6"></vxe-option>
      <vxe-option value="7" label="选项7"></vxe-option>
      <vxe-option value="8" label="选项8"></vxe-option>
    </vxe-select>

    <vxe-select v-model="val2" placeholder="可搜索" :options="opts2" clearable filterable></vxe-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null,
      val2: null,
      opts2: [
        { value: 1001, label: 'table' },
        { value: 1002, label: 'grid' },
        { value: 1003, label: 'button' },
        { value: 1004, label: 'toolbar' },
        { value: 1005, label: 'tooltip' },
        { value: 1006, label: 'pager' },
        { value: 1007, label: 'print' },
        { value: 1008, label: 'export' },
        { value: 1009, label: 'import' },
        { value: 1010, label: 'select' },
        { value: 1012, label: 'checkbox' },
        { value: 1013, label: 'group' }
      ]
    }
  }
}
</script>
