import XEUtils from 'xe-utils'

/**
 * 将数字金额转换为中文大写
 */
export function amountToChinese (num: number | string): string {
  let amount = XEUtils.toNumber(num)

  if (amount === 0) {
    return '零元整'
  }

  // 处理负数
  const isNegative = amount < 0
  amount = Math.abs(amount)

  // 分离整数和小数部分
  const amountStr = amount.toFixed(2)
  const [integerPart, decimalPart] = amountStr.split('.')

  // 中文大写数字
  const digitsMap: Record<string, string> = {
    0: '零',
    1: '壹',
    2: '贰',
    3: '叁',
    4: '肆',
    5: '伍',
    6: '陆',
    7: '柒',
    8: '捌',
    9: '玖'
  }

  // 单位（每4位一组）
  const unitGroups = ['', '万', '亿', '万亿', '亿亿']

  // 每组的单位（千、百、十）
  const units = ['', '拾', '佰', '仟']

  // 转换整数部分
  function convertIntegerPart (numStr: string): string {
    if (numStr === '0') return ''

    let result = ''
    // 按4位一组分组
    const groups: string[] = []
    let temp = numStr
    while (temp.length > 4) {
      groups.unshift(temp.slice(-4))
      temp = temp.slice(0, -4)
    }
    if (temp) {
      groups.unshift(temp)
    }

    groups.forEach((group, groupIndex) => {
      if (group === '0000') {
        // 整组为零，跳过但记录需要补零
        result += '零'
        return
      }

      let groupResult = ''
      let needZero = false // 是否需要在前面补零

      for (let i = 0; i < group.length; i++) {
        const digit = group[i]
        const position = group.length - 1 - i // 当前位数
        const unitIndex = position % 4

        if (digit !== '0') {
          // 如果上一个字符是0或者需要补零，且当前不是第一位
          if (needZero || (i > 0 && group[i - 1] === '0')) {
            // 避免多个零之间重复加"零"
            if (!groupResult.endsWith('零')) {
              groupResult += '零'
            }
            needZero = false
          }
          groupResult += digitsMap[digit]
          if (units[unitIndex]) {
            groupResult += units[unitIndex]
          }
        } else {
          needZero = true
        }
      }

      // 处理组之间的零
      if (groupResult && result && !result.endsWith('零')) {
        // 如果之前的组以零结尾，就不需要再加零
      }

      // 添加组单位
      if (groupResult && groupIndex < groups.length - 1) {
        groupResult += unitGroups[groups.length - 1 - groupIndex]
      }

      // 合并结果，处理相邻组的零
      if (groupResult) {
        if (result.endsWith('零')) {
          result = result.slice(0, -1) // 去掉多余的零
        }
        result += groupResult
      }
    })

    return result
  }

  // 转换小数部分
  function convertDecimalPart (numStr: string): string {
    if (!numStr || numStr === '00') return ''

    let result = ''
    const [jiao, fen] = numStr.split('').map(d => digitsMap[d])

    if (jiao !== '零') {
      result += jiao + '角'
    } else if (fen !== '零') {
      result += '零'
    }

    if (fen !== '零') {
      result += fen + '分'
    }

    return result
  }

  // 组装结果
  let result = ''

  // 整数部分
  const integerResult = convertIntegerPart(integerPart)
  if (integerResult) {
    result += integerResult + '元'
  } else if (decimalPart !== '00') {
    // 整数部分为零且有小数
    result = '零'
  }

  // 小数部分
  const decimalResult = convertDecimalPart(decimalPart)
  result += decimalResult

  // 如果只有整数没有小数，添加"整"
  if (decimalPart === '00') {
    result += '整'
  }

  // 处理负数
  if (isNegative) {
    result = '负' + result
  }

  return result
}
