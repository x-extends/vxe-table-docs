<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="全局 z-index 调整">
          <div>全局 z-index 默认起始是 999，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡。可以通过以下全局设置，也可以去 <vxe-link status="primary" :router-link="{name: 'StartConfig'}">全局参数</vxe-link> 设置。</div>
          <div>使用 <vxe-link href="https://www.npmjs.com/package/dom-zindex" target="_blank" status="primary">dom-zindex</vxe-link> 来设置，更加方便快捷。</div>
        </vxe-tip>
        <vxe-tip status="success">
          Vxe 组件使用 <vxe-link href="https://www.npmjs.com/package/dom-zindex" target="_blank" status="primary">dom-zindex</vxe-link> 规范共享 z-index，对于多个组件库共用的场景将非常有用
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import domZIndex from 'dom-zindex'

            // 获取页面中最大的 z-index
            // domZIndex.getMax()

            // 设置当前 z-index 起始值
            domZIndex.setCurrent(1000)

            // 获取当前 z-index 值
            // domZIndex.getCurrent() // 1000

            // 计算下一个并返回计算后的 z-index 值
            // domZIndex.getNext() // 1001
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
