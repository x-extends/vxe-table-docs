<template>
  <div>
    <CodeLight path="table/checkbox/range/Demo1" previewPath="/resource/docsImg/checkboxRange.gif">
      <template #tip>
        <vxe-tip status="primary" title="鼠标滑动范围选择">
          通过 <ApiLink name="table" prop="range"/> 启用范围选中,启用后鼠标按住复选框的列，向上或向下滑动选取
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | MouseLeft | 按住复选框的列，向上或向下滑动选取 |
            | MouseLeft + Ctrl | 局部选取/取消 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
