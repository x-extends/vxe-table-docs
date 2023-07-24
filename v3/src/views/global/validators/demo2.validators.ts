import { VXETable } from 'vxe-table'

// 手机号校验
VXETable.validators.add('mobile', {
  cellValidatorMethod ({ cellValue }) {
    if (!/^1[3-9]\d{9}$/.test(cellValue)) {
      return new Error('手机号不正确')
    }
  }
})

// 邮箱校验
VXETable.validators.add('email', {
  cellValidatorMethod ({ cellValue }) {
    if (!/\w[-.\w]*@[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|cn)/.test(cellValue)) {
      return new Error('邮箱不正确')
    }
  }
})
