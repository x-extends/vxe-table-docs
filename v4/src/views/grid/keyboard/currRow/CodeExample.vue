<template>
  <div>
    <CodeLight path="grid/keyboard/currRow/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高亮行">
          通过设置 <ApiLink name="grid" prop="mouse-config"/>.<ApiLink name="grid" prop="selected"/> 与 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="isCurrent"/> 同时启用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/keyboard/currRow/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="current-row-config"/>.<ApiLink name="grid" prop="isFollowSelected"/> 启用跟随单元格选中而移动高亮行
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
