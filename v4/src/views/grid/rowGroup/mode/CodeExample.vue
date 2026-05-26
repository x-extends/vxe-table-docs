<template>
  <div>
    <CodeLight path="grid/rowGroup/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分组列展示方式">
          默认是参数 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="mode"/>=default 是自定根据分组字段按层级展示分组
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/mode/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="mode"/>=column 设置为自动根据分组字段锁对应的列来展示层级关系
        </vxe-tip>
        <vxe-tip status="success">
          该方式不需要指定 <ApiLink name="grid" prop="rowGroupNode"/>，会自动根据分组字段来展示层级关系
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/mode/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="aggregate-config"/>.<ApiLink name="grid" prop="mode"/>=combined 设置将多个分组字段合并为一组进行展示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
