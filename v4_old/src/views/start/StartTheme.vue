<template>
  <div>
    <h2>{{ $t('app.aside.nav.theme') }}</h2>
    <p class="tip">
      默认支持 light 和 dark 两种主题样式，通过调用 VXETable.setTheme('light') 方式修改组件主题样式
    </p>
    <pre>
      <pre-code class="javascript">
        import { VXETable } from 'vxe-table'
        // VXETable 是旧版 Vxe 库通用全局实例（建议统一使用别名 VxeUI）

        // 切换为默认主题
        // VXETable.setTheme('light')

        // 切换为暗黑主题
        VXETable.setTheme('dark')
      </pre-code>
    </pre>

    <p class="tip">
      通过修改 css 变量（<a href="https://gitee.com/x-extends/vxe-table/blob/master/styles/theme/light.scss" status="primary" target="_blank">查看全部变量</a>）方式修改组件样式，给 html 加个 class="my-theme"，示例：
    </p>
    <pre>
      <pre-code class="css">
        // 给 html 加 class，例如 my-theme，然后修改css变量
        html.my-theme {
          --vxe-ui-font-color: #999999,
          --vxe-ui-font-primary-color: #ff0000;
        }
      </pre-code>
    </pre>

    <p class="tip">
      通过修改 scss 变量（<a href="https://gitee.com/x-extends/vxe-table/blob/master/styles/variable.scss" status="primary" target="_blank">查看全部变量</a>）方式修改组件样式，示例：
    </p>
    <pre>
      <pre-code class="css">
        @use 'vxe-table/styles/variable.scss' as vxe_table_variable with (
          $vxe-ui-font-color: #999999,
          $vxe-ui-font-primary-color: #ff0000
        );
        @use 'vxe-table/styles/all.scss' as vxe_table_all;
      </pre-code>
    </pre>
  </div>
</template>
