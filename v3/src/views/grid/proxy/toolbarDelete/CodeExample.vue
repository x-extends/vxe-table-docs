<template>
  <div>
    <CodeLight path="grid/proxy/toolbarDelete/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="配置删除行接口">
          <div>通过 <ApiLink name="grid" prop="proxy-config"/>.<ApiLink name="grid" prop="ajax"/>.delete 配置删除接口</div>
        </vxe-tip>
        <vxe-tip status="success">
          内置功能 code：delete（删除选中）
        </vxe-tip>
        <vxe-tip status="error" title="重要提示">
          当点击删除按钮时。如果已选有数据则会自动触发调用 <ApiLink name="grid" prop="ajax"/>.delete 方法，调用成功之后会执行 query 操作，刷新当前列表。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
