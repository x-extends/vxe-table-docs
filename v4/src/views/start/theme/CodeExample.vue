<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="自定义主题">
          默认支持 light 和 dark 两种主题样式，通过调用 VxeUI.setTheme('light') 方法修改组件主题样式
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
  </div>
</template>
