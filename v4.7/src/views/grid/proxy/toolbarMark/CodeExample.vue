<template>
  <div>
    <CodeLight path="grid/proxy/toolbarMark/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="配置批量标记删除">
          <div>通过 <ApiLink name="grid" prop="proxy-config"/>.<ApiLink name="grid" prop="ajax"/>.save 保存接口</div>
        </vxe-tip>
        <vxe-tip status="success">
          内置功能 code：mark_cancel（标记/取消标记）save（保存）
        </vxe-tip>
        <vxe-tip status="error" title="重要提示">
          当点击标记按钮时，如果已被标记，则取消标记状态，否则为标记状态。当点击保存时，如果已选有被标记数据则会自动触发调用 <ApiLink name="grid" prop="ajax"/>.save 方法，调用成功之后会执行 query 操作，刷新当前列表。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
