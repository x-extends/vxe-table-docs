<template>
  <div>
    <CodeLight path="table/tree/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary">自定义展开节点图标，通过设置 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="iconOpen"/>, <ApiLink name="table" prop="iconClose"/>} 局部替换默认的图标</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">更多自定义</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/icon/Demo3">
      <template #tip>
        <vxe-tip status="primary">还可以通过 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="toggleMethod"/>} 方法实现展开与关闭的细节处理，返回值用来决定是否允许继续执行</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
