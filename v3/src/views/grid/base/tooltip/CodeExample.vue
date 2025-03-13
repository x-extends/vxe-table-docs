<template>
  <div>
    <CodeLight path="grid/base/tooltip/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="showAll"/> 开启全表工具提示，还可以配合 <ApiLink name="grid" prop="contentMethod"/> 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null 使用默认的提示消息<br>
          还可以设置 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="enterable"/> 允许鼠标进入 tooltip 中，通过 <ApiLink name="column" prop="title-prefix"/>、<ApiLink name="column" prop="title-suffix"/> 设置列标题的前缀或后缀提示消息
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
