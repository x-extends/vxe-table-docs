<template>
  <div class="demo-page-wrapper">
    <vxe-grid v-bind="gridOptions">
      <template #img11>
        <vxe-image src="https://vxeui.com/resource/productImg/m11.jpg" width="100%"></vxe-image>
      </template>

      <template #img12>
        <vxe-image src="https://vxeui.com/resource/productImg/m12.jpg" width="100%"></vxe-image>
      </template>

      <template #img21>
        <vxe-image src="https://vxeui.com/resource/productImg/m21.jpg" width="100%"></vxe-image>
      </template>

      <template #img22>
        <vxe-image src="https://vxeui.com/resource/productImg/m22.jpg" width="100%"></vxe-image>
      </template>

      <template #img31>
        <vxe-image src="https://vxeui.com/resource/productImg/m31.jpg" width="100%"></vxe-image>
      </template>

      <template #img32>
        <vxe-image src="https://vxeui.com/resource/productImg/m32.jpg" width="100%"></vxe-image>
      </template>

      <template #cell11="{ row }">
        <span v-if="hasCheckboxCell(row.product11)">{{ row.product11 ? '✔️' : '❌' }}</span>
        <span v-else>{{ row.product11 }}</span>
      </template>

      <template #cell12="{ row }">
        <span v-if="hasCheckboxCell(row.product12)">{{ row.product12 ? '✔️' : '❌' }}</span>
        <span v-else>{{ row.product12 }}</span>
      </template>

      <template #cell21="{ row }">
        <span v-if="hasCheckboxCell(row.product21)">{{ row.product21 ? '✔️' : '❌' }}</span>
        <span v-else>{{ row.product21 }}</span>
      </template>

      <template #cell22="{ row }">
        <span v-if="hasCheckboxCell(row.product22)">{{ row.product22 ? '✔️' : '❌' }}</span>
        <span v-else>{{ row.product22 }}</span>
      </template>

      <template #cell31="{ row }">
        <span v-if="hasCheckboxCell(row.product31)">{{ row.product31 ? '✔️' : '❌' }}</span>
        <span v-else>{{ row.product31 }}</span>
      </template>

      <template #cell32="{ row }">
        <span v-if="hasCheckboxCell(row.product32)">{{ row.product32 ? '✔️' : '❌' }}</span>
        <span v-else>{{ row.product32 }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  describe: string
  product11: string | boolean
  product12: string | boolean
  product21: string | boolean
  product22: string | boolean
  product31: string | boolean
  product32: string | boolean
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  showOverflow: true,
  height: '100%',
  toolbarConfig: {
    refresh: true,
    zoom: true
  },
  columns: [
    {
      field: 'brand',
      title: '品牌',
      children: [
        {
          field: 'code',
          title: '型号',
          children: [
            {
              field: 'imgUrl',
              title: '图片',
              children: [
                {
                  field: 'describe',
                  title: '价格'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      field: 'product1000',
      title: '大米科技',
      children: [
        {
          field: 'product1111',
          title: 'X6',
          children: [
            {
              field: 'product1110',
              title: '',
              slots: {
                header: 'img11'
              },
              children: [
                {
                  field: 'product11',
                  title: '4999',
                  align: 'center',
                  slots: {
                    default: 'cell11'
                  }
                }
              ]
            }
          ]
        },
        {
          field: 'product1211',
          title: 'X6 pro',
          children: [
            {
              field: 'product1210',
              title: '',
              slots: {
                header: 'img12'
              },
              children: [
                {
                  field: 'product12',
                  title: '5999',
                  align: 'center',
                  slots: {
                    default: 'cell12'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      field: 'product20',
      title: '遥先科技',
      children: [
        {
          field: 'product2111',
          title: 'Y8',
          children: [
            {
              field: 'product2110',
              title: '',
              slots: {
                header: 'img21'
              },
              children: [
                {
                  field: 'product21',
                  title: '8999',
                  align: 'center',
                  slots: {
                    default: 'cell21'
                  }
                }
              ]
            }
          ]
        },
        {
          field: 'product2211',
          title: 'Y8 plus',
          children: [
            {
              field: 'product2210',
              title: '',
              slots: {
                header: 'img22'
              },
              children: [
                {
                  field: 'product22',
                  title: '10999',
                  align: 'center',
                  slots: {
                    default: 'cell22'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      field: 'product30',
      title: '拼果科技',
      children: [
        {
          field: 'product3111',
          title: 'T7',
          children: [
            {
              field: 'product3110',
              title: '',
              slots: {
                header: 'img31'
              },
              children: [
                {
                  field: 'product31',
                  title: '7999',
                  align: 'center',
                  slots: {
                    default: 'cell31'
                  }
                }
              ]
            }
          ]
        },
        {
          field: 'product3211',
          title: 'T7 x',
          children: [
            {
              field: 'product3210',
              title: '',
              slots: {
                header: 'img32'
              },
              children: [
                {
                  field: 'product32',
                  title: '8999',
                  align: 'center',
                  slots: {
                    default: 'cell32'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  data: [
    { id: 10000, describe: 'AI智能交互', product11: '基础语音', product12: '神马语音大模型', product21: '基础语音', product22: '饕鬄语音大模型', product31: '基础语音', product32: '宙斯语音大模型' },
    { id: 10002, describe: '远程控制', product11: true, product12: true, product21: false, product22: true, product31: false, product32: true },
    { id: 10003, describe: '卫星通话', product11: false, product12: true, product21: true, product22: true, product31: false, product32: true },
    { id: 10004, describe: '指纹解锁', product11: true, product12: true, product21: true, product22: true, product31: true, product32: true },
    { id: 10005, describe: '防水等级', product11: 'IP67', product12: 'IP68', product21: 'IP67', product22: 'IP68', product31: 'IP67', product32: 'IP68' },
    { id: 10006, describe: '根据手机壳颜色换主题', product11: false, product12: true, product21: false, product22: false, product31: false, product32: false },
    { id: 10007, describe: '水冷散热', product11: false, product12: true, product21: false, product22: false, product31: false, product32: false },
    { id: 10008, describe: '信号加强', product11: true, product12: true, product21: true, product22: true, product31: true, product32: true },
    { id: 10009, describe: '蓝牙通话', product11: false, product12: true, product21: true, product22: true, product31: true, product32: true },
    { id: 10010, describe: '无线对讲', product11: false, product12: true, product21: true, product22: true, product31: true, product32: false },
    { id: 10011, describe: '重量', product11: '249克', product12: '282克', product21: '238克', product22: '256克', product31: '226克', product32: '244克' },
    { id: 10012, describe: '屏幕分辨率', product11: '2k', product12: '4k', product21: '2k', product22: '4k', product31: '2k', product32: '2k' },
    { id: 10013, describe: '拍照像素', product11: '5000万', product12: '1亿', product21: '5000万', product22: '8000万', product31: '3000万', product32: '5000万' },
    { id: 10014, describe: '自动报警', product11: false, product12: true, product21: true, product22: true, product31: false, product32: true },
    { id: 10015, describe: '无线支付', product11: true, product12: true, product21: true, product22: true, product31: false, product32: true },
    { id: 10016, describe: '游戏模式', product11: true, product12: true, product21: true, product22: true, product31: true, product32: true },
    { id: 10017, describe: '杜比音效', product11: false, product12: true, product21: true, product22: true, product31: true, product32: true },
    { id: 10018, describe: '智能居家', product11: true, product12: true, product21: true, product22: true, product31: true, product32: true },
    { id: 10019, describe: 'wifi8', product11: true, product12: true, product21: true, product22: true, product31: true, product32: true },
    { id: 10020, describe: '无线充电', product11: true, product12: true, product21: true, product22: true, product31: true, product32: true }
  ]
})

const hasCheckboxCell = (cellValue: string | boolean) => {
  if (XEUtils.isBoolean(cellValue)) {
    return true
  }
  return false
}
</script>
