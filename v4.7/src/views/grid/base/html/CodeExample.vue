<template>
  <div>
    <CodeLight path="grid/base/html/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          设置 <ApiLink name="column" prop="type"/>=<ApiLink name="column" prop="html"/> 显示为 HTML 标签，不支持和其他功能列共存，需要启用 <ApiLink name="table" prop="column-config"/>.<ApiLink name="table" prop="useKey"/> 与 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="useKey"/><br>
          <span class="red">（动态渲染任意 HTML 是非常危险的，很容易导致 <a class="link" href="https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC">XSS</a> 攻击，请确保内容是可信的）</span>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
