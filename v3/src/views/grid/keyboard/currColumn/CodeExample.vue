<template>
  <div>
    <CodeLight path="grid/keyboard/currColumn/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高亮列">
          通过设置 <ApiLink name="grid" prop="keyboard-config"/>.<ApiLink name="grid" prop="isArrow"/> 启用快捷键操作
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/keyboard/currColumn/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="mouse-config"/>.<ApiLink name="grid" prop="selected"/> 与 <ApiLink name="grid" prop="column-config"/>.<ApiLink name="grid" prop="isCurrent"/> 同时启用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/keyboard/currColumn/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="current-column-config"/>.<ApiLink name="grid" prop="isFollowSelected"/> 启用跟随单元格选中而移动高亮列
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
