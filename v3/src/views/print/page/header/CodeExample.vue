<template>
  <div>
    <CodeLight path="print/page/header/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="页眉、标题">
          显示标题
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="print/page/header/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义页眉
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="print/page/header/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          将页码显示在页眉上方
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
