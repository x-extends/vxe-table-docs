<template>
  <div>
    <CodeLight path="grid/keyboard/editMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="重写默认编辑行为">
          当启用 <ApiLink name="grid" prop="keyboard-config"/>.<ApiLink name="grid" prop="isEdit"/> 按键编辑功能时，默认情况下是覆盖式编辑，可以通过重写 <ApiLink name="grid" prop="keyboard-config"/>.<ApiLink name="grid" prop="editMethod"/> 方法来实现追加式编辑
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
