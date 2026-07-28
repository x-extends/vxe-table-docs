<template>
  <div>
    <CodeLight path="table/base/overflow/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          当内容溢出时显示为省略号，<ApiLink name="column" prop="show-overflow"/> 和 <ApiLink name="table" prop="show-header-overflow"/> 和 <ApiLink name="table" prop="show-footer-overflow"/><br>
          <ApiLink name="column" prop="ellipsis"/> 当内容溢出时显示为省略号<br>
          <ApiLink name="column" prop="title"/> 当内容溢出时显示为省略号并用原生 title 显示<br>
          <ApiLink name="column" prop="tooltip"/> 当内容溢出时显示为省略号并用 tooltip 显示<br>
        </vxe-tip>
        <vxe-tip status="success" title="小提示">
          <div>当设置 <ApiLink name="column" prop="show-overflow"/>=true 默认值由 <ApiLink name="table" prop="tooltip-config"/>.<ApiLink name="table" prop="mode"/> 设置</div>
          <div>当设置 <ApiLink name="column" prop="show-header-overflow"/>=true 默认值由 <ApiLink name="table" prop="header-tooltip-config"/>.<ApiLink name="table" prop="mode"/> 设置</div>
          <div>当设置 <ApiLink name="column" prop="show-footer-overflow"/>=true 默认值由 <ApiLink name="table" prop="footer-tooltip-config"/>.<ApiLink name="table" prop="mode"/> 设置</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/overflow/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="table" prop="enterable"/> 开启鼠标是否可进入到 tooltip 中
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
