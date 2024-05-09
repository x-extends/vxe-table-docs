<template>
  <div>
    <h2>{{ $t('app.aside.nav.button') }}</h2>
    <p class="tip">使用任意的第三方字体图标，例如：<a class="link" href="https://fontawesome.dashgame.com/" target="_blank">font-awesome</a>、<a class="link" href="https://www.iconfont.cn/" target="_blank">inconfont</a>...</p>

    <h3>{{ $t('使用第三方图标') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-button icon="fa fa-plus" content="第三方图标"></vxe-button>
          <vxe-button status="primary" content="主要图标颜色" icon="fa fa-save"></vxe-button>
          <vxe-button status="success" content="成功图标颜色" icon="fa fa-check"></vxe-button>
          <vxe-button status="info" content="信息图标颜色" icon="fa fa-info"></vxe-button>
          <vxe-button status="warning" content="警告图标颜色" icon="fa fa-warning"></vxe-button>
          <vxe-button status="danger" content="危险图标颜色" icon="fa fa-trash-o"></vxe-button>
        </p>

        <p>
          <vxe-button content="默认图标颜色" icon="fa fa-download"></vxe-button>
          <vxe-button content="主要图标颜色" icon="fa fa-save my-primary"></vxe-button>
          <vxe-button content="成功图标颜色" icon="fa fa-check my-success"></vxe-button>
          <vxe-button content="信息图标颜色" icon="fa fa-info my-info"></vxe-button>
          <vxe-button content="警告图标颜色" icon="fa fa-warning my-warning"></vxe-button>
          <vxe-button content="危险图标颜色" icon="fa fa-trash-o my-danger"></vxe-button>
        </p>

        <p>
          <vxe-button content="使用第三方图标" mode="text" icon="fa fa-plus"></vxe-button>
          <vxe-button content="主要图标颜色" mode="text" status="primary" icon="fa fa-save"></vxe-button>
          <vxe-button content="成功图标颜色" mode="text" status="success" icon="fa fa-check"></vxe-button>
          <vxe-button content="信息图标颜色" mode="text" status="info" icon="fa fa-info"></vxe-button>
          <vxe-button content="警告图标颜色" mode="text" status="warning" icon="fa fa-warning"></vxe-button>
          <vxe-button content="危险图标颜色" mode="text" status="danger" icon="fa fa-trash-o"></vxe-button>
        </p>

        <p>
          <vxe-button mode="text" icon="fa fa-plus"></vxe-button>
          <vxe-button mode="text" icon="fa fa-refresh"></vxe-button>
          <vxe-button content="图标按钮" status="primary" icon="fa fa-download"></vxe-button>
          <vxe-button content="自定义按钮颜色" status="my-purple" icon="fa fa-save"></vxe-button>
          <vxe-button content="自定义图标颜色" icon="fa fa-graduation-cap my-green"></vxe-button>
          <vxe-button content="自定义图标" icon="my-icn"></vxe-button>
        </p>
      </template>
      <template v-slot:highlight>
        <pre><pre-code class="xml">{{ demoCodes[0] }}</pre-code></pre>
      </template>
    </demo-block>

    <!-- <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="css">{{ demoCodes[1] }}</pre-code>
    </pre> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data  () {
    return {
      demoCodes: [
        `
        <p>
          <vxe-button icon="fa fa-plus" content="第三方图标"></vxe-button>
          <vxe-button status="primary" content="主要图标颜色" icon="fa fa-save"></vxe-button>
          <vxe-button status="success" content="成功图标颜色" icon="fa fa-check"></vxe-button>
          <vxe-button status="info" content="信息图标颜色" icon="fa fa-info"></vxe-button>
          <vxe-button status="warning" content="警告图标颜色" icon="fa fa-warning"></vxe-button>
          <vxe-button status="danger" content="危险图标颜色" icon="fa fa-trash-o"></vxe-button>
        </p>

        <p>
          <vxe-button content="默认图标颜色" icon="fa fa-download"></vxe-button>
          <vxe-button content="主要图标颜色" icon="fa fa-save my-primary"></vxe-button>
          <vxe-button content="成功图标颜色" icon="fa fa-check my-success"></vxe-button>
          <vxe-button content="信息图标颜色" icon="fa fa-info my-info"></vxe-button>
          <vxe-button content="警告图标颜色" icon="fa fa-warning my-warning"></vxe-button>
          <vxe-button content="危险图标颜色" icon="fa fa-trash-o my-danger"></vxe-button>
        </p>

        <p>
          <vxe-button content="使用第三方图标" mode="text" icon="fa fa-plus"></vxe-button>
          <vxe-button content="主要图标颜色" mode="text" status="primary" icon="fa fa-save"></vxe-button>
          <vxe-button content="成功图标颜色" mode="text" status="success" icon="fa fa-check"></vxe-button>
          <vxe-button content="信息图标颜色" mode="text" status="info" icon="fa fa-info"></vxe-button>
          <vxe-button content="警告图标颜色" mode="text" status="warning" icon="fa fa-warning"></vxe-button>
          <vxe-button content="危险图标颜色" mode="text" status="danger" icon="fa fa-trash-o"></vxe-button>
        </p>

        <p>
          <vxe-button mode="text" icon="fa fa-plus"></vxe-button>
          <vxe-button mode="text" icon="fa fa-refresh"></vxe-button>
          <vxe-button content="图标按钮" status="primary" icon="fa fa-download"></vxe-button>
          <vxe-button content="自定义按钮颜色" status="my-purple" icon="fa fa-save"></vxe-button>
          <vxe-button content="自定义图标颜色" icon="fa fa-graduation-cap my-green"></vxe-button>
          <vxe-button content="自定义图标" icon="my-icn"></vxe-button>
        </p>
        `
      ]
    }
  }
})
</script>

<style>
.vxe-button.type--button.theme--my-purple,
.vxe-button.type--button.theme--my-purple:hover {
  color: #fff;
}
.vxe-button.type--button.theme--my-purple {
  background-color: #800080;
}
.vxe-button.type--button.theme--my-purple:active {
  background-color: #a50aa5;
}
.vxe-button.type--text.theme--my-purple {
  color: #800080;
}
.vxe-button.type--text.theme--my-purple:not(.is--disabled):hover {
  color: #a50aa5;
}
.my-green {
  color: #008000;
}
.my-primary {
  color: #3196ff;
}
.my-success {
  color: #67c23a;
}
.my-info {
  color: #909399;
}
.my-warning {
  color: #e6a23c;
}
.my-danger {
  color: #f56c6c;
}
.my-icn{
  width: 20px;
  height: 20px;
  display: inline-block;
  background: #333;
}
</style>
