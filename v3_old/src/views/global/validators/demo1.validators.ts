import { VXETable } from 'vxe-table'

// 手机号校验
VXETable.validators.add('mobile', {
  itemValidatorMethod ({ itemValue }) {
    if (!/^1[3-9]\d{9}$/.test(itemValue)) {
      return new Error('手机号不正确')
    }
  }
})

// 邮箱校验
VXETable.validators.add('email', {
  itemValidatorMethod ({ itemValue }) {
    if (!/\w[-.\w]*@[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|cn)/.test(itemValue)) {
      return new Error('邮箱不正确')
    }
  }
})
