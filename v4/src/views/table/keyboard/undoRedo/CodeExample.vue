<template>
  <div>
    <CodeLight path="table/keyboard/undoRedo/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="撤销与重做">
          通过设置 <ApiLink name="table" prop="keyboard-config"/>.<ApiLink name="table" prop="isUndoRedo"/> 启用撤销与重做功能
        </vxe-tip>
        <vxe-tip status="error" title="支持场景">
          <div>✔️支持设置最大栈的历史步数</div>
          <div>✔️支持单元格编辑后还原</div>
          <div>⚠️不支持新增行</div>
          <div>⚠️不支持删除行</div>
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
