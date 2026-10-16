<template>
  <div>
    <CodeLight path="grid/cellTip/wh/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义宽高">
          当内容很多时，还可以通过 <ApiLink name="grid" prop="tooltip-config" />.<ApiLink name="grid" prop="width" />、<ApiLink name="grid" prop="tooltip-config" />.<ApiLink name="grid" prop="height" />、<ApiLink name="grid" prop="tooltip-config" />.<ApiLink name="grid" prop="maxWidth" />、<ApiLink name="grid" prop="tooltip-config" />.<ApiLink name="grid" prop="maxHeight" /> 设置容器宽高
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/cellTip/wh/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          原生滚动条搭配工具提示框可能样式会不一致，可以通过 <ApiLink name="grid" prop="use-scrollbar" /> 启用虚拟滚动条完美显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
