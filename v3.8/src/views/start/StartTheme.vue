<template>
  <div>
    <h2>{{ $t('app.aside.nav.theme') }}</h2>
    <p class="tip">全局引入，创建 scss 文件（<a class="link" href="https://github.com/x-extends/vxe-table/blob/v3.8/styles/variable.scss" target="_blank">查看所有变量</a>）</p>
    <pre>
      <pre-code class="scss">
        @use 'vxe-table/styles/variable.scss' with (
          $vxe-font-color: #999999,
          $vxe-primary-color: #ff0000
        );
        @use 'vxe-table/styles/modules.scss';
      </pre-code>
    </pre>
  </div>
</template>
