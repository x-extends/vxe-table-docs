<template>
  <div>
    <CodeLight path="grid/cellTip/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认提示方式">
          <div>当使用想要切换默认的提示方式时就非常有用了，可以统一切换。</div>
        </vxe-tip>
        <vxe-tip status="success" title="小提示">
          <div>当设置 <ApiLink name="grid" prop="show-overflow"/>=true 默认值由 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="mode"/> 设置</div>
          <div>当设置 <ApiLink name="grid" prop="show-header-overflow"/>=true 默认值由 <ApiLink name="grid" prop="header-tooltip-config"/>.<ApiLink name="grid" prop="mode"/> 设置</div>
          <div>当设置 <ApiLink name="grid" prop="show-footer-overflow"/>=true 默认值由 <ApiLink name="grid" prop="footer-tooltip-config"/>.<ApiLink name="grid" prop="mode"/> 设置</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
