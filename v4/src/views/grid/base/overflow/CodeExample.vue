<template>
  <div>
    <CodeLight path="grid/base/overflow/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          当内容溢出时显示为省略号，<ApiLink name="grid" prop="show-overflow"/> 和 <ApiLink name="grid" prop="show-header-overflow"/> 和 <ApiLink name="grid" prop="show-footer-overflow"/><br>
          <ApiLink name="grid" prop="ellipsis"/> 当内容溢出时显示为省略号<br>
          <ApiLink name="grid" prop="title"/> 当内容溢出时显示为省略号并用原生 title 显示<br>
          <ApiLink name="grid" prop="tooltip"/> 当内容溢出时显示为省略号并用 tooltip 显示<br>
        </vxe-tip>
        <vxe-tip status="success" title="小提示">
          <div>当设置 <ApiLink name="grid" prop="show-overflow"/>=true 默认值由 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="mode"/> 设置</div>
          <div>当设置 <ApiLink name="grid" prop="show-header-overflow"/>=true 默认值由 <ApiLink name="grid" prop="header-tooltip-config"/>.<ApiLink name="grid" prop="mode"/> 设置</div>
          <div>当设置 <ApiLink name="grid" prop="show-footer-overflow"/>=true 默认值由 <ApiLink name="grid" prop="footer-tooltip-config"/>.<ApiLink name="grid" prop="mode"/> 设置</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/overflow/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="enterable"/> 开启鼠标是否可进入到面板中，设置 <ApiLink name="grid" prop="tooltip-config"/>.<ApiLink name="grid" prop="defaultPlacement"/> 可以设置默认方向
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
