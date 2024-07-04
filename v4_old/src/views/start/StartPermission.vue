<template>
  <div>
    <h2>全局权限控制</h2>
    <p class="tip">通过权限控制，您可以轻松对各类组件进行精确的控制。例如：表格的按钮等</p>
    <pre>
      <pre-code class="javascript">
        import { VXETable } from 'vxe-table'

        VXETable.setConfig({
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
      <div>在组件中指定 permissionCode 权限码，当无权限时会被自动隐藏</div>
      <pre-code class="html">
        &lt;vxe-button permission-code="xxx"&gt;按钮&lt;/vxe-button&gt;
      </pre-code>
    </pre>
  </div>
</template>
