<template>
  <div>
    <CodeLight path="grid/base/round/Demo1">
      <template #tip>
        <vxe-tip status="primary">圆角边框，通过设置 <ApiLink name="grid" prop="round"/> 参数</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/round/Demo2">
      <template #tip>
        <vxe-tip status="primary">出现滚动条时</vxe-tip>
        <vxe-tip status="error">
          滚动条是不支持圆角的，可以自行通过样式去修改
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
