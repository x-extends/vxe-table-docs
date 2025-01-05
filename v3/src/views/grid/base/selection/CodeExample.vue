<template>
  <div>
    <CodeLight path="grid/base/selection/Demo1">
      <template #tip>
        <vxe-tip status="primary">多选表格，用户手动勾选时会触发事件 <ApiLink name="grid" prop="checkbox-change"/></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/selection/Demo6">
      <template #tip>
        <vxe-tip status="primary">
          默认选中，通过指定 <ApiLink name="grid" prop="checkRowKeys"/> 设置默认选中的行，指定默认值需要有 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="keyField"/>
        </vxe-tip>
        <vxe-tip status="error">默认行为只会在 reload 之后触发一次</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/selection/Demo7">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="grid" prop="checkStrictly"/> 设置父子节点不互相关联，启用后 <ApiLink name="grid" prop="showHeader"/> 默认为 false</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/selection/Demo8">
      <template #tip>
        <vxe-tip status="primary">多选可单选同时使用</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
