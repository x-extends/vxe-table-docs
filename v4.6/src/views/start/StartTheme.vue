<template>
  <div>
    <h2>{{ $t('app.aside.nav.theme') }}</h2>
    <p class="tip">支持默认主题和暗黑主题</p>
    <pre>
      <pre-code class="javascript">
        import { VXETable } from 'vxe-table'

        // 切换为默认主题
        // VXETable.setTheme('light')

        // 切换为暗黑主题
        VXETable.setTheme('dark')
      </pre-code>
    </pre>

    <h2>方式二：重写 css 变量</h2>
    <p class="tip">全局引入，创建 css 文件（<a class="link" href="https://github.com/x-extends/vxe-table/blob/v4.6/styles/theme/default.scss" target="_blank">查看所有变量</a>）</p>
    <pre>
      <pre-code class="scss">
        // 给 html 加 class，例如 black-theme，然后修改css变量
        html.black-theme {
          --vxe-ui-font-color: #999999,
          --vxe-ui-font-primary-color: #ff0000;
        }
      </pre-code>
    </pre>

    <h2>方式三：重写 scss 变量</h2>
    <p class="tip">全局引入，创建 scss 文件（<a class="link" href="https://github.com/x-extends/vxe-table/blob/v4.6/styles/variable.scss" target="_blank">查看所有变量</a>）</p>
    <pre>
      <pre-code class="scss">
        @use 'vxe-table/styles/variable.scss' as vxe_table_variable with (
          $vxe-ui-font-color: #999999,
          $vxe-ui-font-primary-color: #ff0000
        );
        @use 'vxe-table/styles/all.scss' as vxe_table_all;
      </pre-code>
    </pre>
  </div>
</template>
