<template>
  <div>
    <CodeLight path="grid/edit/rowSave/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现行保存功能">
          内置的输入控件默认是懒更新，可以通过 <ApiLink name="grid" prop="edit-render"/>.<ApiLink name="grid" prop="immediate"/> 设置为实时更新，配合行编辑实现单独行保存给你
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
