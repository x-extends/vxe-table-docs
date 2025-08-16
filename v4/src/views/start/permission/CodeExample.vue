<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="组件权限控制">
          <div>通过权限控制，您可以轻松对各类组件进行精确的控制。例如：表格按钮等...</div>
        </vxe-tip>
        <vxe-tip status="success">
          支持权限码的组件：vxe-button、vxe-button-group
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="javascript">
            import { VxeUI } from 'vxe-table'

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

            if (VxeUI.permission.checkVisible('xxx')) {
              // 判断是否有权限
            }
          </pre-code>
          <div>在组件中指定 permissionCode 权限码，当无权限时会被自动隐藏</div>
          <pre-code language="html">
            &lt;vxe-button permission-code="xxx"&gt;按钮&lt;/vxe-button&gt;
            &lt;vxe-link permission-code="xxx"&gt;链接&lt;/vxe-link&gt;
          </pre-code>
          <div>如果多个权限码，支持分隔符：|（或）</div>
          <pre-code language="html">
            &lt;vxe-button permission-code="aaa|bbb"&gt;按钮&lt;/vxe-button&gt;
            &lt;vxe-link permission-code="aaa|bbb"&gt;链接&lt;/vxe-link&gt;
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
