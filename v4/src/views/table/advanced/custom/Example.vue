<template>
  <div>
    <CodeLight path="table/advanced/custom/Demo1">
      <template #tip>
        <div>
          通过 <table-column-api-link prop="visible"/> 属性设置默认是否显示，也可以通过函数式调用 <table-api-link prop="showColumn"/>、<table-api-link prop="hideColumn"/> 操作列的显示/隐藏<br>
          还可以通过动态修改列的 visible 属性，可以实现远程读取配置后控制是否显示，最后调用 <table-api-link prop="refreshColumn"/> 刷新列
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/custom/Demo2">
      <template #tip>
        <div>如果是根据服务端数据控制显示/隐藏列，在获取到配置信息后动态更改列的 <table-column-api-link prop="visible"/> 属性，然后调用 <table-api-link prop="refreshColumn"/> 属性列即可</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/custom/Demo3">
      <template #tip>
        <div>通过 <table-column-api-link prop="visible"/> 属性设置默认是否显示，通过 <table-api-link prop="resetColumn"/> 函数重置全部列为可视状态</div>
      </template>
    </CodeLight>

    <CodeLight path="table/advanced/custom/Demo4">
      <template #tip>
        <div>通过 <table-column-api-link prop="visible"/> 属性设置默认是否显示，通过 <table-api-link prop="resetColumn"/> 函数重置全部列为可视状态</div>
      </template>
    </CodeLight>
  </div>
</template>
