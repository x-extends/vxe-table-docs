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
        <vxe-tip status="primary" title="自定义主题">
          通过修复 css 变量（<vxe-link href="https://gitee.com/xuliangzhan/vxe-table/blob/v3/styles/theme/light.scss" status="primary">全量变量</vxe-link>）方式修改组件主题样式，给 html 加个 class="my-theme"，示例：
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="css">
            html.my-theme {
              // 主题色
              --vxe-ui-font-primary-color: #44bf16;
            }
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
