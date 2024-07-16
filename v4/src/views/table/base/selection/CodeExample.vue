<template>
  <div>
    <CodeLight path="table/base/selection/Demo1">
      <template #tip>
        <vxe-tip status="primary">多选表格，用户手动勾选时会触发事件 <ApiLink name="table" prop="checkbox-change"/></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo5">
      <template #tip>
        <vxe-tip status="primary">通过配置 <ApiLink name="table" prop="trigger"/>=row 设置触发方式，点击行可勾选</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo6">
      <template #tip>
        <vxe-tip status="primary">
          默认选中，通过指定 <ApiLink name="table" prop="checkRowKeys"/> 设置默认选中的行，指定默认值需要有 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="keyField"/>
        </vxe-tip>
        <vxe-tip status="error">默认行为只会在 reload 之后触发一次</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo7">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="table" prop="checkStrictly"/> 设置父子节点不互相关联，启用后 <ApiLink name="table" prop="showHeader"/> 默认为 false</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo8">
      <template #tip>
        <vxe-tip status="primary">多选可单选同时使用</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
