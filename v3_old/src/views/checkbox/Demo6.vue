<template>
  <div>
    <p>
      <vxe-checkbox-group v-model="valGroup1" :max="2">
        <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
        <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
        <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
        <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
        <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
      </vxe-checkbox-group>
    </p>
    <p>
      <vxe-checkbox-group v-model="valGroup2" :max="2" disabled>
        <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
        <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
        <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
        <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
        <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
      </vxe-checkbox-group>
    </p>
    <p>
      <vxe-checkbox-group v-model="valGroup3" :max="2">
        <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
        <vxe-checkbox label="2" content="CSS" disabled></vxe-checkbox>
        <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
        <vxe-checkbox label="4" content="SASS" disabled></vxe-checkbox>
        <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
      </vxe-checkbox-group>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valGroup1: [],
      valGroup2: ['2', '4'],
      valGroup3: ['3']
    }
  }
}
</script>
