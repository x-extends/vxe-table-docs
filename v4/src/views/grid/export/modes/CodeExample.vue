<template>
  <div>
    <CodeLight path="grid/export/modes/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义数据">
          通过设置 export-config.remote 服务端导出和 export-config.modes 自定义导出模式列表
        </vxe-tip>
        <vxe-tip status="success">
          内置模式：current（当前页）、selected（勾选的数据）
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
