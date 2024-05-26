<template>
  <div>
    <h2>{{ $t('app.aside.nav.theme') }}</h2>
    <p class="tip">支持默认主题和暗黑主题</p>
    <pre>
      <pre-code class="javascript">
        import { VxeUI } from 'vxe-table'

        // 切换为默认主题
        // VxeUI.setTheme('light')

        // 切换为暗黑主题
        VxeUI.setTheme('dark')
      </pre-code>
    </pre>

    <!-- <h2>重写样式，覆盖默认主题样式</h2>
    <p class="tip">修改 css 变量（<a class="link" href="https://github.com/x-extends/vxe-table/blob/master/styles/cssvar.scss" target="_blank">查看所有变量</a>），并引入所有样式</p>
    <pre>
      <pre-code class="scss">
        @import 'vxe-table/lib/style.css';

        // 给 html 加 class，例如 black-theme，然后修改css变量
        html.black-theme {
          --vxe-font-color: #98989E;
          --vxe-primary-color: #2C7ECF;
          --vxe-icon-background-color: #98989E;
          --vxe-table-font-color: #98989E;
          --vxe-table-resizable-color: #95969a;
          --vxe-table-header-background-color: #28282A;
          --vxe-table-body-background-color: #151518;
          --vxe-table-background-color: #4a5663;
          --vxe-table-border-width: 1px;
          --vxe-table-border-color: #37373A;
          // ...
        }
      </pre-code>
    </pre> -->
  </div>
</template>
