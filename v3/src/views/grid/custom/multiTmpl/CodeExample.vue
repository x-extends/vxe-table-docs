<template>
  <div>
    <CodeLight path="grid/custom/multiTmpl/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义多模板">
          通过插槽配合自定义模板，根据业务实现更复杂的自定义列，实现多模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/multiTmpl/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现宽度调整，由于宽度是特殊属性，并不属于直接设置的逻辑，需要用到内部属性 column.renderWidth 来实现，可能存在兼容性风险
        </vxe-tip>
        <vxe-tip status="error">
          由于用到了内部属性，因此可能会造成版本升级无法兼容性的风险
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
