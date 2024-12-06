<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  amount: string
  address: string
}

export default Vue.extend({
  data () {
    const formOptions : VxeFormProps<FormDataVO> = {
      titleColon: true,
      titleWidth: 80,
      titleAlign: 'right',
      data: {
        name: 'test1',
        nickname: 'Testing',
        amount: '',
        address: ''
      },
      items: [
        { field: 'name', title: 'Name', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'amount', title: 'Amount', span: 24, itemRender: { name: 'MyFormItemAmount' } },
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
    }

    return {
      formOptions
    }
  }
})
</script>
