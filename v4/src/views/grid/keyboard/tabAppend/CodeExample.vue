<template>
  <div>
    <CodeLight path="grid/keyboard/tabAppend/Demo1" previewPath="/resource/docsImg/table_keyboard_tab_append.gif">
      <template #tip>
        <vxe-tip status="primary" title="在最后一行tab键自动新增一行">
          通过 <ApiLink name="grid" prop="keyboard-config"/>.<ApiLink name="grid" prop="isLastTabAppendRow"/> 设置当活动单元格处于最后一行时，按Tab键自动在表尾新增一行
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 取消编辑并移动到当前活动单元格右侧的单元格，当处于最后一行最后一列时，自动新增一行 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
