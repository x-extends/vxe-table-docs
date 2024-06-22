<template>
  <div>
    <CodeLight path="table/advanced/toolbar/Demo1">
      <template #tip>
        <div>工具栏：通过 <toolbar-api-link prop="custom"/> 开启自定义列设置按钮，可以通过表格的 <table-api-link prop="custom-config"/> 参数开启将列个性化的设置状态保存到本地</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/toolbar/Demo2">
      <template #tip>
        <div>自定义列设置，通过 <table-api-link prop="custom-config"/>.<table-api-link prop="mode"/> 设置弹窗高级模式</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/toolbar/Demo3">
      <template #tip>
        <div>工具栏和表格默认是上下相邻关系，通过调用 <table-api-link prop="connect"/>() 方法与表格进行关联，就可以开启相关的功能</div>
      </template>
    </CodeLight>
  </div>
</template>
