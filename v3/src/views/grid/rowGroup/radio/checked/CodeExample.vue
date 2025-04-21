<template>
  <div>
    <CodeLight path="grid/rowGroup/radio/checked/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单选框">
          通过配置 <ApiLink name="grid" prop="radio-config"/>.<ApiLink name="grid" prop="checkMethod"/> 控制是否允许被勾选
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/rowGroup/radio/checked/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过配置 <ApiLink name="grid" prop="radio-config"/>.<ApiLink name="grid" prop="checkMethod"/> 控制是否显示单选框
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
