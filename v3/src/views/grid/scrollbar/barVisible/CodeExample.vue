<template>
  <div>
    <CodeLight path="grid/scrollbar/barVisible/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="滚动条显示方式">
          支持自动显示、不显示以及固定显示，通过 <ApiLink name="grid" prop="scrollbar-config"/>.<ApiLink name="grid" prop="x"/>.<ApiLink name="grid" prop="visible"/> 与 <ApiLink name="grid" prop="scrollbar-config"/>.<ApiLink name="grid" prop="y"/>.<ApiLink name="grid" prop="visible"/> 设置去掉滚动条
        </vxe-tip>
        <vxe-tip status="error">
          去掉后不可操作滚动行为，可以通过手动调用 <ApiLink name="grid" prop="scrollTo"/> 等方法滚动
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/scrollbar/barVisible/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          设置为自动显示，当内容超出时自动出现滚动条
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/scrollbar/barVisible/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          设置为固定显示，不管内容有没有超出都显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
