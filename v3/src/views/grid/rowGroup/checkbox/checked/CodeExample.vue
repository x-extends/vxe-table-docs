<template>
  <div>
    <CodeLight path="grid/rowGroup/checkbox/checked/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="复选框">
          通过配置 <ApiLink name="grid" prop="checkbox-config"/>.<ApiLink name="grid" prop="checkMethod"/> 控制是否允许被勾选
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/checkbox/checked/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过配置 <ApiLink name="grid" prop="checkbox-config"/>.<ApiLink name="grid" prop="checkMethod"/> 控制是否显示复选框
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
