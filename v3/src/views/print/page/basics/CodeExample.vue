<template>
  <div>
    <CodeLight path="print/page/basics/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分页打印">
          支持任意自定义每一页打印的内容
        </vxe-tip>
        <vxe-tip status="error">
          当使用分页打印时，由于非常灵活，可以自行精确控制到每一页，所以需要自行计算好每一页放的内容，超出将被忽略。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="print/page/basics/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          对齐方式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="print/page/basics/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          打印多张图片
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
