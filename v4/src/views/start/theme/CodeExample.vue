<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="内置主题">
          默认支持 light 和 dark 两种主题样式，通过调用 VxeUI.setTheme('light') 方式修改组件主题样式
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-table'

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
        <vxe-tip status="primary" title="自定义 css 变量">
          通过修改 css 变量（<vxe-link href="https://gitee.com/xuliangzhan/vxe-table/blob/master/styles/theme/light.scss" status="primary" target="_blank">查看全部变量</vxe-link>）方式修改组件样式，给 html 加个 class="my-theme"，示例：
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="css">
            // 给 html 加 class，例如 my-theme，然后修改css变量
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
        <vxe-tip status="primary" title="自定义 scss 变量">
          通过修改 scss 变量（<vxe-link href="https://gitee.com/xuliangzhan/vxe-table/blob/master/styles/variable.scss" status="primary" target="_blank">查看全部变量</vxe-link>）方式修改组件样式，示例：
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="css">
            @use 'vxe-table/styles/variable.scss' with (
              $vxe-font-color: #999999,
              $vxe-primary-color: #ff0000
            );
            @use 'vxe-table/styles/all.scss';
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
