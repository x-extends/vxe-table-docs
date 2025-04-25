<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="切换内置主题">
          默认支持 light 和 dark 两种主题样式，通过调用 VxeUI.setTheme('light') 方式修改组件主题样式
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="javascript">
            import { VxeUI } from 'vxe-table'
            // VxeUI 是通用全局实例（也可以使用旧别名 VXETable）

            // 切换为默认主题
            // VxeUI.setTheme('light')

            // 切换为暗黑主题
            VxeUI.setTheme('dark')
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="（推荐）方式一：内置主题样式修改">
          通过修内置主题 css 变量（<vxe-link href="https://gitee.com/x-extends/vxe-table/blob/master/styles/theme/light.scss" status="primary" target="_blank">查看全部变量</vxe-link>）方式修改内置主题的样式：
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="css">
            // 默认主题
            html[data-vxe-ui-theme="light"] {
              // 字体颜色
              --vxe-ui-font-color: #606266;
              // 主题颜色
              --vxe-ui-font-primary-color: #409eff;

              // 活动颜色
              --vxe-ui-font-primary-tinge-color: #d4d5d7;
              // 松开颜色
              --vxe-ui-font-primary-lighten-color: #797b80;
              // 按下颜色
              --vxe-ui-font-primary-darken-color: #47494c;
              // 禁用颜色
              --vxe-ui-font-primary-disabled-color: #BFBFBF;
            }
            // 暗黑主题
            html[data-vxe-ui-theme="dark"] {
              --vxe-ui-font-color: #a0a3a7;
              --vxe-ui-font-primary-color: #409eff;

              --vxe-ui-font-primary-tinge-color: #33353b;
              --vxe-ui-font-primary-lighten-color: #797b80;
              --vxe-ui-font-primary-darken-color: #47494c;
              --vxe-ui-font-primary-disabled-color: #464646;
            }
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="方式二：自定义主题的样式修改">
          通过修改 css 变量（<vxe-link href="https://gitee.com/x-extends/vxe-table/blob/master/styles/theme/light.scss" status="primary" target="_blank">查看全部变量</vxe-link>）方式修改组件样式，给 html 加个 class="my-theme"，示例：
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="css">
            // 给 html 加对应的 class 就可以生效，例如 my-theme，然后修改css变量
            html.my-theme {
              --vxe-ui-font-color: #999999,
              --vxe-ui-font-primary-color: #ff0000;
            }
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="方式三：自定义全局 scss 变量">
          通过修改 scss 变量（<vxe-link href="https://gitee.com/x-extends/vxe-table/blob/master/styles/variable.scss" status="primary" target="_blank">查看全部变量</vxe-link>）方式修改全局组件样式，示例：
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="css">
            @use 'vxe-table/styles/variable.scss' as vxe_table_variable with (
              $vxe-ui-font-color: #999999,
              $vxe-ui-font-primary-color: #ff0000
            );
            @use 'vxe-table/styles/all.scss' as vxe_table_all;
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
