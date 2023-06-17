<template>
  <div>
    <CodeLight path="radio/Demo1">
      <template #tip>
        <div>单选框，基础用法</div>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo2">
      <template #tip>
        <div>禁用状态</div>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo3">
      <template #tip>
        <div>单选组</div>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo4">
      <template #tip>
        <div>支持取消，如果为选择状态，再次点击则取消</div>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo5">
      <template #tip>
        <div>单选按钮</div>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift + Tab | 切换到下一个 |
            | Arrow Up ↑ | 如果在分组内则移动到上一个选项 |
            | Arrow Left ← | 如果在分组内则移动到上一个选项 |
            | Arrow Down ↓ | 如果在分组内则移动到下一个选项 |
            | Arrow Right → | 如果在分组内则移动到下一个选项 |
            | Spacebar | 按下勾选 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
