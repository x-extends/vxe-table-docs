<template>
  <div>
    <vxe-select v-model="val1" placeholder="加载中" :options="opts1" loading></vxe-select>
    <vxe-select v-model="val2" placeholder="空数据" :options="opts2"></vxe-select>
    <vxe-select v-model="val3" placeholder="禁用选项" :options="opts3"></vxe-select>
    <vxe-select v-model="val4" placeholder="禁用分组" :option-groups="opts4" transfer></vxe-select>
    <vxe-select v-model="val5" placeholder="多选" :options="opts5" multiple clearable transfer></vxe-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null,
      opts1: [],
      val2: null,
      opts2: [],
      val3: null,
      opts3: [
        { label: '1111', value: '1', disabled: true },
        { label: '2222', value: '2', disabled: false },
        { label: '3333', value: '3', disabled: false },
        { label: '4444', value: '4', disabled: false },
        { label: '5555', value: '5', disabled: true },
        { label: '6666', value: '6', disabled: true },
        { label: '7777', value: '7', disabled: false },
        { label: '8888', value: '8', disabled: false },
        { label: '9999', value: '9', disabled: false },
        { label: '1010', value: '10', disabled: false },
        { label: '1111', value: '11', disabled: false }
      ],
      val4: null,
      opts4: [
        {
          label: '组1',
          disabled: true,
          options: [
            { label: '1-1', value: '11', disabled: false },
            { label: '1-2', value: '10', disabled: false }
          ]
        },
        {
          label: '组2',
          disabled: false,
          options: [
            { label: '2-1', value: '21', disabled: true },
            { label: '2-2', value: '22', disabled: false }
          ]
        },
        {
          label: '组3',
          disabled: false,
          options: [
            { label: '3-1', value: '31', disabled: false },
            { label: '3-2', value: '32', disabled: false }
          ]
        }
      ],
      val5: [],
      opts5: [
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
