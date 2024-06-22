<template>
  <div>
    <CodeLight path="grid/base/empty/Demo1">
      <template #tip>
        <vxe-tip status="primary">当数据为空时，通过 <ApiLink name="table" prop="empty-text"/> 设置空数据提示文本，可以使用 渲染器 实现全局复用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/empty/Demo2">
      <template #tip>
        <vxe-tip status="primary">可以通过 slot=<ApiLink name="table" prop="empty"/> 自定义提示语</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/empty/Demo3">
      <template #tip>
        <vxe-tip status="primary">出现滚动条</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
