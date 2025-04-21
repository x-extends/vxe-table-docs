<template>
  <div>
    <CodeLight path="grid/merge/spanMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义合并行">
          通过 <ApiLink name="grid" prop="span-method"/> 自定义合并行函数，将多行相同字段值的数据合并为一行
        </vxe-tip>
        <vxe-tip status="error">
          <div>如果该方式的虚拟滚动存在功能限制；</div>
          <div>如果没有进行跨行合并的，则支持纵向虚拟滚动；</div>
          <div>如果没有进行跨列合并的，则支持横向虚拟滚动；</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/merge/spanMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="自定义合并列">
          通过 <ApiLink name="grid" prop="span-method"/> 自定义合并列函数，将多行对应的字段合并为一列
        </vxe-tip>
        <vxe-tip status="error">
          <div>如果该方式的虚拟滚动存在功能限制；</div>
          <div>如果没有进行跨行合并的，则支持纵向虚拟滚动；</div>
          <div>如果没有进行跨列合并的，则支持横向虚拟滚动；</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
