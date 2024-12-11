<template>
  <div>
    <CodeLight path="table/rowDrag/tree/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="树结构">
          树结构的拖动，默认情况下可以拖拽第一级的数据
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | MouseLeft | 移动到指定行的上面或者下面 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
