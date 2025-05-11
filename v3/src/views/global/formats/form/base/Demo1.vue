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
  status: string
  amount: number
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      border: true,
      titleWidth: 100,
      titleBackground: true,
      data: {
        name: 'test1',
        nickname: 'Testing',
        status: '1',
        sex: '1',
        amount: 10000000,
        age: '54'
      },
      items: [
        { field: 'name', title: '名称', span: 12 },
        { field: 'status', title: '状态', span: 12, formatter: 'mySwitch' },
        { field: 'amount', title: '金额', span: 12, formatter: 'myAmount' }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
