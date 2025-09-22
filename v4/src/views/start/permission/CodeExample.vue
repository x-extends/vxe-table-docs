<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="组件权限控制">
          <div>通过权限控制，您可以轻松对各类组件进行精确的控制。例如：菜单、表格按钮等...</div>
        </vxe-tip>
        <vxe-tip status="error">
          只对支持权限码的组件有效
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'
            // VxeUI 是 Vxe 库通用全局实例

            VxeUI.setConfig({
              // 全局权限码控制方法
              permissionMethod ({ code }) {
                if (code === 'xxx') {
                  return {
                    // 是否可视
                    visible: false,
                    // 是否禁用
                    disabled: false
                  }
                }
                return {
                  visible: true,
                  disabled: false
                }
              }
            })
          </pre-code>
          <div>在组件中使用，指定 permissionCode 权限码，当无权限时会被自动隐藏</div>
          <pre-code class="html">
            &lt;vxe-button permission-code="xxx"&gt;按钮&lt;/vxe-button&gt;
            &lt;vxe-link permission-code="xxx"&gt;链接&lt;/vxe-link&gt;
          </pre-code>
          <div>在组件中使用，如果多个权限码，支持分隔符：|（或）</div>
          <pre-code class="html">
            &lt;vxe-button permission-code="aaa|bbb"&gt;按钮&lt;/vxe-button&gt;
            &lt;vxe-link permission-code="aaa|bbb"&gt;链接&lt;/vxe-link&gt;
          </pre-code>
          <div>如果在 js 中使用</div>
          <pre-code class="javascript">
            if (VxeUI.permission.checkVisible('xxx')) {
              // 判断是否有可视权限
            }

            if (VxeUI.permission.checkDisable('xxx')) {
              // 判断是否被禁用
            }

            const permissionInfo = VxeUI.permission.getCheckInfo('xxx')
            if (permissionInfo.visible) {
              // 判断是否有可视权限
            }
            if (permissionInfo.disabled) {
              // 判断是否被禁用
            }
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
