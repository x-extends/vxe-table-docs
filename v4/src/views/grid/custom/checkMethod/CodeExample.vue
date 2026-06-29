<template>
  <div>
    <CodeLight path="grid/custom/checkMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="禁用显示隐藏">
          通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="checkMethod"/> 来控制是否允许勾选个性化列表的操作列
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/checkMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          弹窗模式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/checkMethod/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          抽屉模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
