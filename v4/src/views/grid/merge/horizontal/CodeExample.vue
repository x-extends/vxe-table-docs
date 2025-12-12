<template>
  <div>
    <CodeLight path="grid/merge/horizontal/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现横向树列表"></vxe-tip>
        <vxe-tip status="warning" title="小提示">
          <div>如果使用 <ApiLink name="grid" prop="merge-cells"/> 方式则是全功能的，支持虚拟滚动；</div>
          <div>如果使用 <ApiLink name="grid" prop="span-method"/> 方式的虚拟滚动支持部分功能，存在功能限制：如果进行跨行合并，则不支持纵向虚拟滚动；如果进行跨列合并，则不支持横向虚拟滚动</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
