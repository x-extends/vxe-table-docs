<template>
  <div>
    <CodeLight path="table/keyboard/undoRedo/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="撤销与重做">
          通过设置 <ApiLink name="table" prop="keyboard-config"/>.<ApiLink name="table" prop="isUndoRedo"/> 启用撤销与重做功能
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Ctrl + Z | Command + Z | 撤销 |
            | Ctrl + Y | Command + Shift + Z | 重做 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
