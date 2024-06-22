<template>
  <div>
    <CodeLight path="tool/clipboard/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="剪贴板">
          通过调用 VxeUI.clipboard.copy('xxx') 方法将字符串复制到剪贴板
        </vxe-tip>
        <vxe-tip status="error" title="">
          需要注意该方法只会在事件中调用才能触发生效
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
