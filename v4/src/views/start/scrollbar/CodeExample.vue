<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="滚动条">
          默认是使用原生滚动条，支持设置为虚拟滚动条，所有浏览器统一样式
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="javascript">
            import { VxeUI } from 'vxe-table'
            // VxeUI 是 Vxe 库通用全局实例（也可以使用旧别名 VXETable）

            VxeUI.setConfig({
              useScrollbar: true  // 全局启用虚拟滚动条
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
