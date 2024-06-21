<template>
  <div>
    <CodeLight path="table/tree/line/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          树表格，通过配置 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="line"/>: true} 属性来开启树节点连接线<br>
          <span class="red">（注：连接线不支持虚拟滚动）</span>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/line/Demo2">
      <template #tip>
        <vxe-tip status="primary">复选框</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/line/Demo3">
      <template #tip>
        <vxe-tip status="primary">自定义图标，通过设置 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="iconOpen"/>, <ApiLink name="table" prop="iconClose"/>} 局部替换默认的图标</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/line/Demo4">
      <template #tip>
        <vxe-tip status="primary">更多自定义</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
