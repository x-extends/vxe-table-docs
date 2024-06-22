<template>
  <div>
    <CodeLight path="grid/proxy/toolbarQuery/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="与工具栏刷新配合使用">
         <div>通过 <ApiLink name="grid" prop="proxy-config"/>.<ApiLink name="grid" prop="ajax"/>.query 配置获取列表数据源，再通过 <ApiLink name="grid" prop="toolbar-config"/>.<ApiLink name="grid" prop="refresh"/> 开启工具栏刷新按钮。刷新按钮会在点击后自动调用 ajax.query 并将数据进行渲染。</div>
        </vxe-tip>
        <vxe-tip status="success">
          内置功能 code：query（查询当前）、reload（重新加载）
        </vxe-tip>
        <vxe-tip status="error" title="重要提示">
          当点击刷新按钮时，默认会执行 reload 操作，如果需要 query 操作，可以设置 <ApiLink name="grid" prop="toolbar-config"/>.<ApiLink name="grid" prop="refresh"/>.code='query'；如果不希望自动调用 ajax.query 也可以分开，配置 <ApiLink name="grid" prop="toolbar-config"/>.<ApiLink name="grid" prop="refresh"/>.<ApiLink name="grid" prop="queryMethod"/> 自定义刷新方法。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
