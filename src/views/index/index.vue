<template>
  <div class="index-box">
    this is index
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.index-box {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
