<template>
  <div>
    <CodeLight path="vars/table/round/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="圆角">
          可以通过 css 变量表格圆角的大小
        </vxe-tip>
        <vxe-tip status="error">
          滚动条是不支持圆角的，可以自行通过样式去修改
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="vars/table/round/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          纵向滚动条
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="vars/table/round/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          横向滚动条与纵向滚动条
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
