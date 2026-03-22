<template>
  <div>
    <CodeLight path="grid/scroll/compactV/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="紧凑模式">
          通过 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="height"/> 和 <ApiLink name="grid" prop="cell-config"/>.<ApiLink name="grid" prop="pading"/> 来修改默认单元格高度和边距
        </vxe-tip>
        <vxe-tip status="warning" title="小提示">
          <div>渲染量限制：支持纵向可视区最大60行（总最大30万行），横向可视区最大40列（总最大3万列），可视区数量是指实际渲染的单元格数量（行*列=单元格数量）。流畅度说明：小于160（极致流畅）、小于400（流畅）、大于400（影响流畅度）、大于600（影响卡顿）、大于1400（严重卡顿）</div>
        </vxe-tip>
        <vxe-tip status="error">
          建议单元格高度最低不应该低于30px，否则将会导致无法适配标准控件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
