<template>
  <div>
    <CodeLight path="grid/base/overflow/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          当内容溢出时显示为省略号，<ApiLink name="column" prop="show-overflow"/> 和 <ApiLink name="grid" prop="show-header-overflow"/> 和 <ApiLink name="grid" prop="show-footer-overflow"/><br>
          <ApiLink name="column" prop="ellipsis"/> 当内容溢出时显示为省略号<br>
          <ApiLink name="column" prop="title"/> 当内容溢出时显示为省略号并用原生 title 显示<br>
          <ApiLink name="column" prop="tooltip"/> 当内容溢出时显示为省略号并用 tooltip 显示<br>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/overflow/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="contentMethod"/> 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null 使用默认的提示消息<br>
          还可以通过 <ApiLink name="grid" prop="enterable"/> 开启鼠标是否可进入到 tooltip 中
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
