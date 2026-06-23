<template>
  <div>
    <CodeLight path="grid/edit/beforeEdit/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="编辑之前拦截">
          通过 <ApiLink name="grid" prop="edit-config"/>.<ApiLink name="grid" prop="beforeEditMethod"/> 编辑之前的方法，可以用来拦截当前是否允许编辑
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          需要注意该方式只能是同步的
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/beforeEdit/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现异步编辑拦截
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/beforeEdit/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          实现异步编辑禁用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
