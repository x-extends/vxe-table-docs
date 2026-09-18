<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  amount1: number | null
  amount2: number | null
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleColon: true,
  titleWidth: 80,
  titleAlign: 'right',
  data: {
    name: 'test1',
    nickname: 'Testing',
    amount1: null,
    amount2: null,
    address: ''
  },
  items: [
    { field: 'name', title: 'Name', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'amount1', title: 'Amount1', span: 24, itemRender: { name: 'MyFormItemAmount' } },
    { field: 'amount2', title: 'Amount2', span: 24, itemRender: { name: 'MyFormItemAmount', props: { digits: 4 } } },
    {
      align: 'center',
      span: 24,
      itemRender: {
        name: 'VxeButtonGroup',
        options: [
          { type: 'submit', content: '提交', status: 'primary' },
          { type: 'reset', content: '重置' }
        ]
      }
    }
  ]
})
</script>
