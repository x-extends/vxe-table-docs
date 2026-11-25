<template>
  <div>
    <CodeLight path="grid/filter/footer/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实线表尾合计">
          使用 <ApiLink name="grid" prop="footer-data" /> 来实现表尾合计。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/filter/footer/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          旧方式，通过 <ApiLink name="grid" prop="footer-method" /> 来实现表尾合计
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
