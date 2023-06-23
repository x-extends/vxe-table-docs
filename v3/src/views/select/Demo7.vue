<template>
  <div>
    <vxe-select v-model="val1" placeholder="分组" clearable transfer>
      <vxe-optgroup label="选项2">
        <vxe-option value="2-1" label="选项2-1"></vxe-option>
        <vxe-option value="2-2" label="选项2-2"></vxe-option>
        <vxe-option value="2-3" label="选项2-3"></vxe-option>
      </vxe-optgroup>
      <vxe-optgroup label="选项3">
        <vxe-option value="3-1" label="选项3-1"></vxe-option>
        <vxe-option value="3-2" label="选项3-2"></vxe-option>
      </vxe-optgroup>
    </vxe-select>

    <vxe-select v-model="val2" placeholder="分组配置式" :option-groups="opts2"></vxe-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null,
      val2: null,
      opts2: [
        {
          label: '组1',
          options: [
            { label: '1-1', value: '11' },
            { label: '1-2', value: '10' }
          ]
        },
        {
          label: '组2',
          options: [
            { label: '2-1', value: '21' },
            { label: '2-2', value: '22' }
          ]
        }
      ]
    }
  }
}
</script>
