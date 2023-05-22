<template>
  <div>
    <CodeLight path="table/advanced/toolbar/Demo1">
      <template #tip>
        <div>
          使用自带的工具栏 <toolbar-api-link name="vxe-toolbar"/>，配合模板可以自定义功能<br>
          支持显示/隐藏列、列宽拖动状态的保存功能，还可以配合 <table-api-link prop="custom"/> 事件实现显示/隐藏列的服务端保存<br>
          <span class="green">（注：需要使用 <table-api-link prop="connect"/> 方法关联表格后才能使用相关功能）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/toolbar/Demo2">
      <template #tip>
        <div>工具栏和表格默认是上下相邻关系，通过调用 <table-api-link prop="connect"/>() 方法与表格进行关联，就可以开启相关的功能</div>
      </template>
    </CodeLight>
  </div>
</template>
