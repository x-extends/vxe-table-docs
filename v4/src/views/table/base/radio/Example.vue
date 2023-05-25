<template>
  <div>
    <CodeLight path="table/base/radio/Demo1">
      <template #tip>
        <div>单选表格，用户手动选中时会触发事件 <table-api-link prop="radio-change"/>，还通过 <table-api-link prop="highlight"/> 设置高亮选中行</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo2">
      <template #tip>
        <div>通过 <table-api-link prop="checkMethod"/> 方法控制 checkbox 是否允许用户手动选中，如果被禁用，可以调用 <table-api-link prop="setRadioRow"/> 方法手动设置</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo3">
      <template #tip>
        <div>
          默认选中，通过指定 <table-api-link prop="checkRowKey"/> 设置默认选中的行，指定默认值需要有 <table-api-link prop="row-config"/>.<table-api-link prop="keyField"/><br>
          <span class="red">（注：默认行为只会在 reload 之后触发一次，可以调用 <table-api-link prop="setRadioRow"/> 方法设置）</span>
        </div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo4">
      <template #tip>
        <div>严格模式，单选的默认行为是不允许取消的，可以通过设置 <table-api-link prop="radio-config"/>.<table-api-link prop="strict"/>=false 允许取消</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo5">
      <template #tip>
        <div>两种方式混合使用</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/radio/Demo6">
      <template #tip>
        <div>更多方式</div>
      </template>
    </CodeLight>
  </div>
</template>
