<template>
  <div>
    <CodeLight path="table/keyboard/tree/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="树结构按键操作">
          通过 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="isCurrent"/> 和 <ApiLink name="table" prop="keyboard-config"/> 来启用按键功能
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 移动到当前行的上一行 |
            | Arrow Down ↓ | 移动到当前行的下一行 |
            | Enter | 进入当前行子节点 |
            | Backspace | 回退到上一级节点 |
            | Page Up | 向上翻页滚动 |
            | Page Down | 向下翻页滚动 |
            | Home | 滚动到顶部 |
            | End | 滚动到底部 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
