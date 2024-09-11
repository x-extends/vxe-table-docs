<template>
  <div>
    <p>
      <vxe-link href="https://vxeui.com">有下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="primary">有下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="success">有下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="info">有下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="warning">有下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="error">有下划线</vxe-link>
    </p>
    <p>
      <vxe-link href="https://vxeui.com" :underline="false">无下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="primary" :underline="false">无下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="success" :underline="false">无下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="info" :underline="false">无下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="warning" :underline="false">无下划线</vxe-link>
      <vxe-link href="https://vxeui.com" status="error" :underline="false">无下划线</vxe-link>
    </p>
  </div>
</template>
