<template>
  <div>
    <CodeLight path="table/keyboard/enterAppend/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="在最后一行回车键自动新增一行">
          通过 <ApiLink name="table" prop="keyboard-config"/>.<ApiLink name="table" prop="isLastEnterAppendRow"/> 设置当活动单元格处于最后一行时，按回车键自动在表尾新增一行
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Enter | 取消编辑并移动到当前活动单元格下面的单元格，当处于最后一行时，自动新增一行 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
