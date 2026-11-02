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

    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="局部切换">
          虚拟滚动条默认继承上下文，给父组件加上 use-scrollbar 即可作用于所有子孙组件
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="html">
            &lt;vxe-layout-container use-scrollbar&gt;
              &lt;vxe-layout-container vertical&gt;
                &lt;vxe-layout-header fixed&gt;
                  &lt;div&gt;头部&lt;/div&gt;
                &lt;/vxe-layout-header&gt;
                &lt;vxe-layout-body show-backtop&gt;
                  &lt;div&gt;内容&lt;/div&gt;
                &lt;/vxe-layout-body&gt;
              &lt;/vxe-layout-container&gt;
            &lt;/vxe-layout-container&gt;
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
