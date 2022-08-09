<template>
  <div>
    <h2>{{ $t('app.aside.nav.button') }}</h2>
    <p class="tip">标准按钮，文本按钮、下拉按钮</p>

    <h3>{{ $t('基础用法') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-button content="默认颜色"></vxe-button>
          <vxe-button status="primary" content="主要颜色"></vxe-button>
          <vxe-button status="success" content="成功颜色"></vxe-button>
          <vxe-button status="info" content="信息颜色"></vxe-button>
          <vxe-button status="warning" content="警告颜色"></vxe-button>
          <vxe-button status="danger" content="危险颜色"></vxe-button>
        </p>
        <p>
          <vxe-button content="默认尺寸"></vxe-button>
          <vxe-button size="medium" content="中等尺寸"></vxe-button>
          <vxe-button size="small" content="小型尺寸"></vxe-button>
          <vxe-button size="mini" content="超小尺寸"></vxe-button>
        </p>
        <p>
          <vxe-button type="text" content="默认颜色"></vxe-button>
          <vxe-button type="text" status="primary" content="主要颜色"></vxe-button>
          <vxe-button type="text" status="success" content="信息颜色"></vxe-button>
          <vxe-button type="text" status="info" content="信息颜色"></vxe-button>
          <vxe-button type="text" status="warning" content="警告颜色"></vxe-button>
          <vxe-button type="text" status="danger" content="危险颜色"></vxe-button>
        </p>
        <p>
          <vxe-button round>圆角按钮</vxe-button>
          <vxe-button loading round>圆角按钮</vxe-button>
          <vxe-button status="primary" round>主要颜色</vxe-button>
          <vxe-button status="success" round>成功颜色</vxe-button>
          <vxe-button status="info" round>信息颜色</vxe-button>
          <vxe-button status="warning" round>警告颜色</vxe-button>
          <vxe-button status="danger" round>危险颜色</vxe-button>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[0] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('禁用状态') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-button content="默认禁用颜色" disabled></vxe-button>
          <vxe-button status="primary" content="主要禁用颜色" disabled></vxe-button>
          <vxe-button status="success" content="成功禁用颜色" disabled></vxe-button>
          <vxe-button status="info" content="信息禁用颜色" disabled></vxe-button>
          <vxe-button status="warning" content="警告禁用颜色" disabled></vxe-button>
          <vxe-button status="danger" content="危险禁用颜色" disabled></vxe-button>
        </p>
        <p>
          <vxe-button type="text" content="默认禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="primary" content="主要禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="success" content="成功禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="info" content="信息禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="warning" content="警告禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="danger" content="危险禁用颜色" disabled></vxe-button>
        </p>

      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[1] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('加载中') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-button content="默认颜色" loading></vxe-button>
          <vxe-button status="primary" content="主要颜色" loading></vxe-button>
          <vxe-button status="success" content="成功颜色" loading></vxe-button>
          <vxe-button status="info" content="信息颜色" loading></vxe-button>
          <vxe-button status="warning" content="警告颜色" loading></vxe-button>
          <vxe-button status="danger" content="危险颜色" loading></vxe-button>
        </p>

         <p>
          <vxe-button type="text" content="默认颜色" loading></vxe-button>
          <vxe-button type="text" status="primary" content="主要颜色" loading></vxe-button>
          <vxe-button type="text" status="success" content="成功颜色" loading></vxe-button>
          <vxe-button type="text" status="info" content="信息颜色" loading></vxe-button>
          <vxe-button type="text" status="warning" content="警告颜色" loading></vxe-button>
          <vxe-button type="text" status="danger" content="危险颜色" loading></vxe-button>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[2] }}</pre-code></pre>
    </demo-block>

    <h3>{{ $t('下拉按钮') }}</h3>
    <demo-block>
      <div slot="source">
        <p>
          <vxe-button transfer>
            <template #default>默认颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="primary" transfer>
            <template #default>主要颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="primary">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="success" transfer>
            <template #default>成功颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="success">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="info" transfer>
            <template #default>信息颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="my-purple">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="warning" transfer placement="top">
            <template #default>固定向上</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="warning">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="danger" transfer placement="bottom">
            <template #default>固定向下</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="danger">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
        </p>

         <p>
          <vxe-button size="mini" content="超小下拉按钮">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="primary" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
          <vxe-button size="small" content="小型下拉按钮">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="success" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
          <vxe-button size="medium" content="固定向上" placement="top">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="warning" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
          <vxe-button content="固定向下" placement="bottom">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="danger" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
        </p>
      </div>
      <pre slot="highlight"><pre-code class="xml">{{ demoCodes[3] }}</pre-code></pre>
    </demo-block>

    <pre>
      <pre-code>
        | Tab | 切换到上一个 |
        | Shift + Tab | 切换到下一个 |
        | Spacebar | 按下点击 |
        | Enter | 点击 |
      </pre-code>
    </pre>

    <!-- <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="css">{{ demoCodes[1] }}</pre-code>
    </pre> -->
  </div>
</template>

<script>
export default {
  data  () {
    return {
      demoCodes: [
        `
        <p>
          <vxe-button content="默认颜色"></vxe-button>
          <vxe-button status="primary" content="主要颜色"></vxe-button>
          <vxe-button status="success" content="成功颜色"></vxe-button>
          <vxe-button status="info" content="信息颜色"></vxe-button>
          <vxe-button status="warning" content="警告颜色"></vxe-button>
          <vxe-button status="danger" content="危险颜色"></vxe-button>
        </p>
        <p>
          <vxe-button content="默认尺寸"></vxe-button>
          <vxe-button size="medium" content="中等尺寸"></vxe-button>
          <vxe-button size="small" content="小型尺寸"></vxe-button>
          <vxe-button size="mini" content="超小尺寸"></vxe-button>
        </p>
        <p>
          <vxe-button type="text" content="默认颜色"></vxe-button>
          <vxe-button type="text" status="primary" content="主要颜色"></vxe-button>
          <vxe-button type="text" status="success" content="信息颜色"></vxe-button>
          <vxe-button type="text" status="info" content="信息颜色"></vxe-button>
          <vxe-button type="text" status="warning" content="警告颜色"></vxe-button>
          <vxe-button type="text" status="danger" content="危险颜色"></vxe-button>
        </p>
        <p>
          <vxe-button round>圆角按钮</vxe-button>
          <vxe-button loading round>圆角按钮</vxe-button>
          <vxe-button status="primary" round>主要颜色</vxe-button>
          <vxe-button status="success" round>成功颜色</vxe-button>
          <vxe-button status="info" round>信息颜色</vxe-button>
          <vxe-button status="warning" round>警告颜色</vxe-button>
          <vxe-button status="danger" round>危险颜色</vxe-button>
        </p>
        `,

        `
        <p>
          <vxe-button content="默认禁用颜色" disabled></vxe-button>
          <vxe-button status="primary" content="主要禁用颜色" disabled></vxe-button>
          <vxe-button status="success" content="成功禁用颜色" disabled></vxe-button>
          <vxe-button status="info" content="信息禁用颜色" disabled></vxe-button>
          <vxe-button status="warning" content="警告禁用颜色" disabled></vxe-button>
          <vxe-button status="danger" content="危险禁用颜色" disabled></vxe-button>
        </p>
        <p>
          <vxe-button type="text" content="默认禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="primary" content="主要禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="success" content="成功禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="info" content="信息禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="warning" content="警告禁用颜色" disabled></vxe-button>
          <vxe-button type="text" status="danger" content="危险禁用颜色" disabled></vxe-button>
        </p>
        `,

         `
        <p>
          <vxe-button content="默认颜色" loading></vxe-button>
          <vxe-button status="primary" content="主要颜色" loading></vxe-button>
          <vxe-button status="success" content="成功颜色" loading></vxe-button>
          <vxe-button status="info" content="信息颜色" loading></vxe-button>
          <vxe-button status="warning" content="警告颜色" loading></vxe-button>
          <vxe-button status="danger" content="危险颜色" loading></vxe-button>
        </p>

         <p>
          <vxe-button type="text" content="默认颜色" loading></vxe-button>
          <vxe-button type="text" status="primary" content="主要颜色" loading></vxe-button>
          <vxe-button type="text" status="success" content="成功颜色" loading></vxe-button>
          <vxe-button type="text" status="info" content="信息颜色" loading></vxe-button>
          <vxe-button type="text" status="warning" content="警告颜色" loading></vxe-button>
          <vxe-button type="text" status="danger" content="危险颜色" loading></vxe-button>
        </p>
        `,

         `
        <p>
          <vxe-button transfer>
            <template #default>默认颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="primary" transfer>
            <template #default>主要颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="primary">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="success" transfer>
            <template #default>成功颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="success">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="info" transfer>
            <template #default>信息颜色</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="my-purple">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="warning" transfer placement="top">
            <template #default>固定向上</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="warning">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
          <vxe-button status="danger" transfer placement="bottom">
            <template #default>固定向下</template>
            <template #dropdowns>
              <vxe-button type="text">下拉按钮1</vxe-button>
              <vxe-button type="text" status="danger">下拉按钮2</vxe-button>
              <vxe-button type="text">下拉按钮3</vxe-button>
            </template>
          </vxe-button>
        </p>

         <p>
          <vxe-button size="mini" content="超小下拉按钮">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="primary" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
          <vxe-button size="small" content="小型下拉按钮">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="success" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
          <vxe-button size="medium" content="固定向上" placement="top">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="warning" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
          <vxe-button content="固定向下" placement="bottom">
            <template #dropdowns>
              <vxe-button type="text" content="下拉按钮1"></vxe-button>
              <vxe-button type="text" status="danger" content="下拉按钮2"></vxe-button>
              <vxe-button type="text" content="下拉按钮3"></vxe-button>
            </template>
          </vxe-button>
        </p>
        `
      ]
    }
  }
}
</script>
